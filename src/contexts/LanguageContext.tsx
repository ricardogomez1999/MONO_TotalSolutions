import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  availableLanguages: { code: string; name: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);

    // Save to localStorage
    localStorage.setItem("i18nextLng", lang);

    // Update URL to reflect language change
    const currentPath = location.pathname;
    const newPath =
      currentPath.startsWith("/en") || currentPath.startsWith("/es")
        ? `/${lang}${currentPath.slice(3)}`
        : `/${lang}${currentPath}`;

    navigate(newPath);
  };

  useEffect(() => {
    // Check localStorage first, then browser language, then URL path
    const savedLang = localStorage.getItem("i18nextLng");
    const pathSegments = location.pathname.split("/");
    const pathLang = pathSegments[1];

    // Get browser language (first 2 characters)
    const browserLang = navigator.language.split("-")[0];

    if (savedLang && ["en", "es"].includes(savedLang)) {
      // Use saved language from localStorage
      if (savedLang !== currentLanguage) {
        i18n.changeLanguage(savedLang);
        setCurrentLanguage(savedLang);
        // Update URL to match saved language
        if (!pathLang || !["en", "es"].includes(pathLang)) {
          navigate(`/${savedLang}${location.pathname}`, { replace: true });
        }
      }
    } else if (browserLang && ["en", "es"].includes(browserLang)) {
      // Use browser language if no saved language
      if (browserLang !== currentLanguage) {
        i18n.changeLanguage(browserLang);
        setCurrentLanguage(browserLang);
        localStorage.setItem("i18nextLng", browserLang);
        // Update URL to match browser language
        if (!pathLang || !["en", "es"].includes(pathLang)) {
          navigate(`/${browserLang}${location.pathname}`, { replace: true });
        }
      }
    } else if (pathLang && ["en", "es"].includes(pathLang)) {
      // Use language from URL path as fallback
      if (pathLang !== currentLanguage) {
        i18n.changeLanguage(pathLang);
        setCurrentLanguage(pathLang);
        localStorage.setItem("i18nextLng", pathLang);
      }
    } else {
      // Default to English if no language found
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
      localStorage.setItem("i18nextLng", "en");
      navigate("/en", { replace: true });
    }
  }, [location.pathname, i18n, currentLanguage, navigate]);

  const value = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
