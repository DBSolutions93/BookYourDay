"use client";

import { useState } from "react";
import { useTranslation } from "../../Translations/TranslationContext";

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const switchLanguage = (lang: "en" | "ar") => {
    setLocale(lang); // Locale type is now enforced
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      {/* Current Language Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100"
      >
        {locale === "en" ? "EN" : "AR"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg">
          <button
            onClick={() => switchLanguage("en")}
            className={`block w-full px-4 py-2 text-left ${
              locale === "en" ? "bg-gray-100 text-gray-700" : "hover:bg-gray-100"
            }`}
            disabled={locale === "en"}
          >
            EN
          </button>
          <button
            onClick={() => switchLanguage("ar")}
            className={`block w-full px-4 py-2 text-left ${
              locale === "ar" ? "bg-gray-100 text-gray-700 " : "hover:bg-gray-100"
            }`}
            disabled={locale === "ar"}
          >
            AR
          </button>
        </div>
      )}
    </div>
  );
};
