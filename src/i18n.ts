import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(new LanguageDetector())
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en", // Set default language explicitly

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
