"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

export function FloatingButtons() {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="Quick action buttons"
    >
      {/* Scroll to top */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white border border-roseGold/20 text-roseGold
              shadow-luxury hover:bg-roseGold hover:text-white hover:shadow-luxury-hover
              flex items-center justify-center transition-all duration-200"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg
          hover:shadow-xl flex items-center justify-center transition-shadow duration-200"
        aria-label="Open WhatsApp to book appointment"
      >
        <FaWhatsapp size={28} aria-hidden="true" />
      </motion.a>
    </div>
  );
}
