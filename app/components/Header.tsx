'use client'

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          BOOKYOURDAY
        </Link>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#features" className="hover:text-indigo-600">
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-indigo-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-indigo-600">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-indigo-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Login
              </Link>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="#features" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-indigo-600" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
