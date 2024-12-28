"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "../Translations/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4">
        {/* Top Section: Resources and Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Resources Section */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-2">
              {t("footer_resources")}
            </h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-indigo-400">
                  {t("footer_about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400">
                  {t("footer_contact")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-400">
                  {t("footer_privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info and Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <Link href="/" className="text-2xl font-bold text-white mb-2">
              {t("footer_brand")}
            </Link>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Footer Copy */}
        <p className="mt-6 text-gray-400 text-center">
          {t("footer_copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
