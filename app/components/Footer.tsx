// src/components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-white">
            BOOKYOURDAY
          </Link>
          <p className="mt-2 text-gray-400">
            © {new Date().getFullYear()} BOOKYOURDAY. All rights reserved.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold text-white mb-2">Resources</h4>
          <ul>
            <li className="mb-1">
              <Link href="/about" className="hover:text-indigo-400">
                About Us
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/privacy" className="hover:text-indigo-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
