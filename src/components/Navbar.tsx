"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/#timeline", label: "Heritage" },
  { href: "/clients", label: "Clients" },
  { href: "/#research", label: "R&D" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <Image
              src={scrolled ? "/brand/main_logo.png" : "/brand/main_logo_white.png"}
              alt="Aerosapien"
              width={220}
              height={54}
              className={`object-contain transition-all duration-300 ${scrolled ? "" : "drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]"}`}
              unoptimized
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-300 hover:text-[var(--color-brand-accent)] ${
                  scrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-2 px-5 py-2 text-[11px] font-bold tracking-wider uppercase bg-[var(--color-brand-accent)] text-white rounded transition-all duration-200 shadow-[0_3px_0_#007a99,0_5px_12px_rgba(0,181,226,0.25)] hover:shadow-[0_2px_0_#007a99] hover:translate-y-px active:shadow-none active:translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-[var(--color-deep-navy)]" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-slate-700 hover:text-[var(--color-brand-accent)] transition-colors py-1.5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block mt-3 px-5 py-3 text-center font-semibold bg-[var(--color-deep-navy)] text-white rounded hover:bg-[var(--color-brand-accent)] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
