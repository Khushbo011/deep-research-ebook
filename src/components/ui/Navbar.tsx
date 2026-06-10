"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/#overview" },
    { name: "Research Topics", href: "/#topics" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian/80 backdrop-blur-md border-b border-border-gold py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-champagne to-soft-gold flex items-center justify-center text-obsidian font-serif font-bold text-lg">
            D
          </div>
          <span className="font-serif text-xl tracking-wide text-ivory group-hover:text-champagne transition-colors">
            DeepResearch
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-champagne transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" variant="outline">
            Secure Access
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ivory hover:text-champagne transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian border-b border-border-gold overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-muted hover:text-champagne transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 w-full">Secure Access</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
