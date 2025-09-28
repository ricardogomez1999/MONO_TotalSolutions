export type Resource = Record<string, unknown>;

export type InitOptions = {
  resources: Record<string, { translation: Resource } | Resource>;
  lng: string;
  fallbackLng?: string;
  interpolation?: {
    escapeValue?: boolean;
  };
};

export type TOptions = {
  returnObjects?: boolean;
  lng?: string;
} & Record<string, unknown>;

type Listener = (language: string) => void;

class SimpleI18Next {
  private resources: Record<string, Resource> = {};
  private listeners: Map<string, Set<Listener>> = new Map();
  private plugins: Array<{ init?: (instance: SimpleI18Next) => void }> = [];
  private initialized = false;

  public language = "en";
  public fallbackLng: string | undefined;

  use(plugin: { init?: (instance: SimpleI18Next) => void }) {
    this.plugins.push(plugin);
    if (this.initialized) {
      plugin.init?.(this);
    }
    return this;
  }

  async init(options: InitOptions) {
    this.resources = {};
    Object.entries(options.resources).forEach(([lng, resource]) => {
      if (Object.prototype.hasOwnProperty.call(resource, "translation")) {
        const withTranslation = resource as { translation: Resource };
        this.resources[lng] = withTranslation.translation;
      } else {
        this.resources[lng] = resource as Resource;
      }
    });
    this.language = options.lng;
    this.fallbackLng = options.fallbackLng ?? options.lng;
    this.initialized = true;
    this.plugins.forEach((plugin) => plugin.init?.(this));
    return this;
  }

  t<T = string>(key: string, options: TOptions = {}) {
    const targetLanguage = (options.lng ?? this.language).split("-")[0];
    let value = this.resolveValue(targetLanguage, key);

    if (value === undefined && this.fallbackLng) {
      value = this.resolveValue(this.fallbackLng, key);
    }

    if (value === undefined) {
      return key;
    }

    if (options.returnObjects) {
      return value as T;
    }

    if (Array.isArray(value)) {
      return value as T;
    }

    if (typeof value === "string") {
      return this.interpolate(value, options) as T;
    }

    return value as T;
  }

  async changeLanguage(language: string) {
    this.language = language;
    this.emit("languageChanged", this.language);
    return this.language;
  }

  on(event: string, listener: Listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);
  }

  off(event: string, listener: Listener) {
    this.listeners.get(event)?.delete(listener);
  }

  private emit(event: string, payload: string) {
    this.listeners.get(event)?.forEach((listener) => listener(payload));
  }

  private resolveValue(language: string, key: string) {
    const resource = this.resources[language];
    if (!resource) {
      return undefined;
    }
    return key.split(".").reduce<unknown>((acc, segment) => {
      if (acc === undefined || acc === null) {
        return undefined;
      }
      if (typeof acc !== "object") {
        return undefined;
      }
      const container = acc as Record<string, unknown>;
      return container[segment];
    }, resource as unknown);
  }

  private interpolate(template: string, options: Record<string, unknown>) {
    return template.replace(/{{(.*?)}}/g, (_, token) => {
      const key = token.trim();
      const value = options[key];
      return value === undefined || value === null ? "" : String(value);
    });
  }
}

const instance = new SimpleI18Next();

export default instance;
export type I18nInstance = SimpleI18Next;
