"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#services" },
    { name: "About CA Tejas", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-panel py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-brand-navy" : "text-white"}`}>
              Tejas Dangle <span className="text-brand-emerald">&</span> Associates
            </span>
            <span className={`text-sm font-medium tracking-widest uppercase transition-colors ${isScrolled ? "text-brand-gray" : "text-slate-300"}`}>
              Chartered Accountants
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-emerald transition-colors ${isScrolled ? "text-brand-navy" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917030535953"
              className="group flex items-center space-x-2 bg-brand-navy text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-navy-light transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span>703053 5953</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-brand-navy" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-brand-navy border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+917030535953"
                className="flex items-center justify-center space-x-2 bg-brand-emerald text-white px-6 py-4 rounded-xl font-medium shadow-lg mt-8"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 703053 5953</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
