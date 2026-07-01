"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { MdSpa } from "react-icons/md";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

// Hero slides — replace URLs with your own images in public/hero/
const slides = [
  {
    src: "/hero/hero1.jpg",
    alt: "Luxury nail extensions — rose gold ombre",
  },
  {
    src: "/hero/hero2.jpg",
    alt: "Intricate nail art — floral design",
  },
  {
    src: "/hero/hero3.jpg",
    alt: "Gel polish — perfect finish",
  },
  {
    src: "/hero/hero4.jpg",
    alt: "Nail studio — premium experience",
  },
];

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — welcome to NailsbySweta26"
    >
      {/* Slideshow */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-roseGoldDark/20 to-transparent" />
      </div>

      {/* Pre-load next image */}
      <div className="sr-only" aria-hidden="true">
        {slides.map((s, i) =>
          i !== current ? (
            <Image key={s.src} src={s.src} alt="" fill sizes="1px" priority={false} />
          ) : null
        )}
      </div>

      {/* Slide indicators */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        role="tablist"
        aria-label="Hero slideshow"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-roseGoldLight"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-roseGoldLight/40
            flex items-center justify-center">
            <MdSpa className="text-roseGoldLight" size={28} aria-hidden="true" />
          </div>
        </motion.div>

        {/* Brand name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs font-poppins font-semibold tracking-[0.25em] uppercase text-roseGoldLight mb-3"
        >
          {business.displayName}
        </motion.p>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
        >
          {business.tagline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-poppins text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Premium nail studio in Anand — luxury extensions, gel polish, and bespoke nail art crafted for you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-roseGold hover:bg-roseGoldDark
              text-white font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300
              shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5"
            aria-label="Book appointment on WhatsApp"
          >
            <FaWhatsapp size={20} aria-hidden="true" />
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50
              hover:border-white text-white font-poppins font-medium px-8 py-4 rounded-full
              transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50
          hover:text-roseGoldLight transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FaChevronDown size={16} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
