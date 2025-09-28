import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { I18nInstance } from "./i18next";

type InitPlugin = {
  type: string;
  init: (instance: I18nInstance) => void;
};

const I18nContext = createContext<I18nInstance | null>(null);

export const initReactI18next = {
  type: "3rdParty",
  init(instance: I18nInstance) {
    initReactI18next.instance = instance;
  },
  instance: undefined as I18nInstance | undefined,
} satisfies InitPlugin & { instance?: I18nInstance };

type ProviderProps = {
  i18n: I18nInstance;
  children: ReactNode;
};

export const I18nextProvider = ({ i18n, children }: ProviderProps) => {
  const [, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handler = (lng: string) => setLanguage(lng);
    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
  const i18n = useContext(I18nContext);
  if (!i18n) {
    throw new Error("useTranslation must be used within an I18nextProvider");
  }

  return {
    t: i18n.t.bind(i18n),
    i18n,
  };
};
