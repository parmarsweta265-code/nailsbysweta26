"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI saw your special offer and would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

export function OfferPopup() {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { offerPopup } = business;

  useEffect(() => {
    if (!offerPopup.enabled) return;
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem("offer_seen");
      if (!seen) {
        setOpen(true);
        sessionStorage.setItem("offer_seen", "1");
      }
    }, offerPopup.delayMs);
    return () => clearTimeout(timer);
  }, [offerPopup]);

  if (!offerPopup.enabled) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Special offer"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-luxury-hover max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 hover:bg-black/40
                text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Close offer"
            >
              <FiX size={16} />
            </button>

            {/* Image or fallback */}
            {!imgError ? (
              <div className="relative aspect-[4/3]">
                <Image
                  src={offerPopup.imagePath}
                  alt="Special offer"
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              </div>
            ) : offerPopup.showFallback ? (
              <div className="bg-rose-gradient p-10 text-center">
                <p className="font-playfair text-white text-2xl font-bold mb-2">
                  {offerPopup.fallbackTitle}
                </p>
                <p className="font-poppins text-white/85 text-sm">
                  {offerPopup.fallbackDescription}
                </p>
              </div>
            ) : null}

            {/* Footer */}
            <div className="p-6">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setOpen(false)}
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                {offerPopup.fallbackCta ?? "Book Now"}
              </a>
              <button
                onClick={() => setOpen(false)}
                className="block text-center text-xs text-charcoal/40 hover:text-charcoal/70
                  font-poppins mt-3 mx-auto transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
