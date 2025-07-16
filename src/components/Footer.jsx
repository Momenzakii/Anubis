import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo33.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div className="space-y-4">
          <img src={Logo} alt="ANUBIS Logo" className="w-28" />
          <p className="text-sm text-gray-400">
            ANUBIS Real Estate offers premium properties in Egypt’s top
            destinations. Trust, luxury, and exceptional service.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h3 className="text-orange-400 font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#properties"
                className="hover:text-orange-400 transition"
              >
                Properties
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-orange-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-orange-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:text-orange-400 transition">
                Booking
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-orange-400 font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl text-orange-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-white transition" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            📍 El Gouna – New Cairo – North Coast
            <br />
            📞 +20 100 000 000
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} ANUBIS Real Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
