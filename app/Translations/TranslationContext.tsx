/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { createContext, useContext, useState } from "react";
import translations from "./translations";

type Translations = typeof translations; // Infer the type of the translations object
type Locale = keyof Translations; // 'en' | 'ar'

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  locale: "en",
  setLocale: () => {}, // Default is a no-op
  t: (key) => key, // Default returns the key if not found
});

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations[locale];
  
    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if not found
      }
    }
  
    return value; // Return the resolved value (string or object)
  };
  

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
