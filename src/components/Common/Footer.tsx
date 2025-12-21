import React from "react";
import {
  MailIcon,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#198754] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">RCPP</h2>
          <p className="text-gray-200 max-w-sm">
            Rapid Cyber Prevention Program — Promoting safe internet use and preventing cybercrime through real-time response and awareness.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/report" className="hover:underline hover:text-gray-300">
                Report Incident
              </a>
            </li>
            <li>
              <a href="/awareness" className="hover:underline hover:text-gray-300">
                Awareness & Training
              </a>
            </li>
            <li>
              <a href="/help-desk" className="hover:underline hover:text-gray-300">
                Help Desk
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline hover:text-gray-300">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-3 mb-3">
            <MailIcon size={20} />
            <a href="mailto:support@rcpp.gov.bd" className="hover:underline">
              support@rcpp.gov.bd
            </a>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <Phone size={20} />
            <a href="tel:+8809612345678" className="hover:underline">
              +880 9612 345 678
            </a>
          </div>
          <p className="text-gray-300 mt-4 max-w-xs">
            123 Cyber Street, Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="border-t border-white/30 mt-10 pt-6 text-center text-gray-300 text-sm">
        © 2025 Rapid Cyber Prevention Program (RCPP). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
