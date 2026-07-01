"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={14}
          className={i < rating ? "text-roseGold" : "text-charcoal/20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [auto, next]);

  const handleNav = (fn: () => void) => {
    setAuto(false);
    fn();
    setTimeout(() => setAuto(true), 8000);
  };

  const t = testimonials[current];

  return (
    <section id="reviews" className="section-padding bg-white" aria-label="Customer reviews">
      <div className="container-max">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-charcoal"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <div className="divider-rose" />
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Card */}
          <div className="relative min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="card-luxury p-8 sm:p-10 w-full"
              >
                <FaQuoteLeft className="text-roseGoldLight/40 mb-5" size={32} aria-hidden="true" />

                <p className="font-poppins text-charcoal/75 text-base leading-relaxed mb-8 italic">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-playfair font-semibold text-charcoal text-lg">{t.name}</p>
                    <p className="text-charcoal/40 text-xs font-poppins mt-0.5">
                      {t.location}{t.service ? ` · ${t.service}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <StarRating rating={t.rating} />
                    {t.date && <p className="text-charcoal/30 text-[11px] font-poppins">{t.date}</p>}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleNav(prev)}
              className="w-10 h-10 rounded-full border-2 border-roseGold/30 hover:border-roseGold
                text-roseGold hover:bg-roseGold hover:text-white flex items-center justify-center
                transition-all duration-200"
              aria-label="Previous review"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Review navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => { handleNav(() => setCurrent(i)); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-roseGold" : "w-2 h-2 bg-roseGold/25 hover:bg-roseGold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNav(next)}
              className="w-10 h-10 rounded-full border-2 border-roseGold/30 hover:border-roseGold
                text-roseGold hover:bg-roseGold hover:text-white flex items-center justify-center
                transition-all duration-200"
              aria-label="Next review"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
