"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FloatingNav } from "./UI/floating-navbar"; 

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "Internships", label: "Careers" },
    { href: "articles", label: "Articles" }, 
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-transparent`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/">
          <motion.img
            src="/iCogLogo.png"
            alt="iCog Labs Logo"
            className="w-20 h-20 md:w-20 md:h-20 ml-3 mt-2" // Added margin-left and margin-top
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Center: Nav Items with FloatingNav Component */}
        <div className="hidden md:block">
          <FloatingNav
            navItems={navLinks.map(({ href, label }) => ({
              link: href,
              name: label,
            }))}
          />
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
