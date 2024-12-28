'use client';

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "../Translations/TranslationContext";
import { LanguageSwitcher } from "./UI/LanguageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t  } = useTranslation();

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          {t("header_brand")}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9 nav-menu" >
          <Link href="#features" className="hover:text-indigo-600">
            {t("header_features")}
          </Link>
          <Link href="#pricing" className="hover:text-indigo-600">
            {t("header_pricing")}
          </Link>
          <Link href="#testimonials" className="hover:text-indigo-600">
            {t("header_testimonials")}
          </Link>
          <Link href="#faq" className="hover:text-indigo-600">
            {t("header_faq")}
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {t("header_login")}
          </Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="#features" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                {t("header_features")}
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                {t("header_pricing")}
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                {t("header_testimonials")}
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                {t("header_faq")}
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => setMenuOpen(false)}
              >
                {t("header_login")}
              </Link>
            </li>
            <li >
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
