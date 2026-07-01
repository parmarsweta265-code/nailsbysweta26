"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { business } from "@/data/business";

export function HolidayPopup() {
  const [open, setOpen] = useState(false);
  const { holidayPopup } = business;

  useEffect(() => {
    if (!holidayPopup.enabled) return;
    const seen = sessionStorage.getItem("holiday_seen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("holiday_seen", "1");
    }
  }, [holidayPopup]);

  if (!holidayPopup.enabled) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Holiday notice"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-luxury-hover max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 hover:bg-black/40
                text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close holiday notice"
            >
              <FiX size={16} />
            </button>
            <div className="relative aspect-video">
              <Image
                src={holidayPopup.imagePath}
                alt={holidayPopup.altText}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
