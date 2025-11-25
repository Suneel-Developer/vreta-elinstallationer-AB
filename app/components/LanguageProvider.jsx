"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../lib/translations";

const LanguageContext = createContext({
  language: "sv",
  setLanguage: () => {},
  translations: translations.sv,
});

const STORAGE_KEY = "vreta-language";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sv");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && translations[storedLanguage]) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translations: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

