"use client";
import { MailIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    
    { path: "/report", label: "Report Incident" },
    { path: "/awareness", label: "Awareness & Training" },
    { path: "/help-desk", label: "Help Desk" },
    {
      path: "/services",
      label: "Services",
      subMenu: [
        { path: "/services/investigation", label: "Investigation Support" },
        { path: "/services/education", label: "Cyber Education" },
        { path: "/services/threat-map", label: "Threat Visualization" },
      ],
    },
  ];

  return (
    <div className={`sticky top-0 z-50 bg-white shadow-md ${scrolling ? "shadow" : ""}`}>
      <div className="bg-slate-900 hidden md:block text-white">
        <Marquee speed={30} className="text-sm py-2">
          🛡️ Report cybercrime instantly | 📚 Learn online safety | 🤖 Chat with our AI help desk |
          Contact: <span className="text-primary px-2 flex items-center gap-1"><MailIcon size={15} /> support@rcpp.gov.bd</span>
        </Marquee>
      </div>

      <div className="container mx-auto px-2 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <Image
              src="/rcpp-logo.png"
              alt="RCPP Logo"
              width={180}
              height={60}
              priority
              className="h-auto w-[130px] lg:w-[180px]"
            />
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            {links.map((link) =>
              link.subMenu ? (
                <NavigationMenu key={link.path}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent px-0">
                        <span className={`text-sm lg:text-base ${isActive(link.path) ? "text-primary font-semibold" : "text-slate-800 hover:text-primary"}`}>
                          {link.label}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-64 bg-white border shadow-md">
                          {link.subMenu.map((sub) => (
                            <Link
                              key={sub.path}
                              href={sub.path}
                              className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary hover:text-white"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm lg:text-base ${isActive(link.path) ? "text-primary font-semibold" : "text-slate-800 hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md  hover:bg-primary/80"
            >
              Login
            </Link>
            <button onClick={toggleMenu} className="md:hidden text-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            links={links}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
