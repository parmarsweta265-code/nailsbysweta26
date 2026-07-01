"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useScrolled } from "@/hooks/useScrolled";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

export function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / Brand */}
        <Link
          href="#home"
          className="flex flex-col leading-none group"
          aria-label={`${business.displayName} — go to top`}
        >
          <span
            className={`font-playfair font-bold text-xl transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Nails by Sweta<span className="text-roseGold">26</span>
          </span>
          <span
            className={`text-[10px] font-poppins tracking-[0.18em] uppercase transition-colors duration-300 ${
              scrolled ? "text-roseGold" : "text-roseGoldLight"
            }`}
          >
            {business.tagline}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-poppins text-sm font-medium transition-colors duration-200 hover:text-roseGold
                  ${scrolled ? "text-charcoal" : "text-white/90"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-roseGold hover:bg-roseGoldDark text-white
            font-poppins font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300
            shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5"
          aria-label="Book appointment on WhatsApp"
        >
          <FaWhatsapp size={16} aria-hidden="true" />
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-blush shadow-luxury"
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block font-poppins text-base font-medium text-charcoal hover:text-roseGold
                      py-3 border-b border-blush/60 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaWhatsapp size={18} aria-hidden="true" />
                  Book Now on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
