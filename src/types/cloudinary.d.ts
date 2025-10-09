declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        config: CloudinaryUploadWidgetConfig,
        callback: (error: any, result: any) => void
      ) => {
        open: () => void;
        close: () => void;
      };
    };
  }
}

interface CloudinaryUploadWidgetConfig {
  cloudName: string;
  uploadPreset: string;
  sources?: string[];
  multiple?: boolean;
  cropping?: boolean;
  croppingAspectRatio?: number;
  showAdvancedOptions?: boolean;
  folder?: string;
  tags?: string[];
  context?: Record<string, string>;
}

export {};
