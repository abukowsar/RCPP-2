"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: Array<{
    path: string;
    label: string;
    subMenu?: Array<{ path: string; label: string }>;
  }>;
  isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  toggleMenu,
  links,
  isActive,
}) => {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubMenu = (path: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <Image
              src="/rcpp-logo.png"
              alt="logo"
              width={160}
              height={35}
              className="w-[160px]"
            />
          </Link>
          <button
            className="text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-grow p-4">
          {links.map((link) =>
            link.subMenu ? (
              <div key={link.path}>
                <button
                  onClick={() => toggleSubMenu(link.path)}
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 hover:text-primary transition-colors p-2 rounded-md"
                >
                  {link.label}
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-200 ${openSubMenus[link.path] ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openSubMenus[link.path] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {link.subMenu.map((subLink) => (
                        <Link
                          key={subLink.path}
                          href={subLink.path}
                          onClick={toggleMenu}
                          className="text-gray-600 hover:text-primary transition-colors p-2 rounded-md flex items-center"
                        >
                          <ChevronRight size={16} className="mr-2" />
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                href={link.path}
                onClick={toggleMenu}
                className={`block py-2 text-lg font-medium transition-colors p-2 rounded-md ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-900 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Footer actions */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <Link
              href="/login"
              onClick={toggleMenu}
              className="block w-full text-center bg-primary text-white py-3 rounded-md font-medium hover:bg-primary-dark transition-colors mb-3"
            >
              Login
            </Link>

           
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
