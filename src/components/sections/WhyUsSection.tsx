"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaShieldAlt,
  FaPaintBrush,
  FaCrown,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaLeaf,
    title: "Premium Products",
    description: "Only top-grade gel brands and hypoallergenic materials — nothing that compromises your nail health.",
    accent: "#B76E79",
  },
  {
    icon: FaShieldAlt,
    title: "100% Hygienic",
    description: "Sterilised tools, disposable files and buffers for every client — your safety is our standard.",
    accent: "#8B4F58",
  },
  {
    icon: FaPaintBrush,
    title: "Expert Nail Art",
    description: "From delicate florals to bold 3D designs — intricate art crafted with a steady hand and an eye for detail.",
    accent: "#B76E79",
  },
  {
    icon: FaCrown,
    title: "Luxury Experience",
    description: "A calm, curated studio environment where every detail is designed to make you feel indulged.",
    accent: "#D4A0A7",
  },
  {
    icon: FaWhatsapp,
    title: "Easy WhatsApp Booking",
    description: "No complicated forms — just send a WhatsApp message and we'll confirm your slot in minutes.",
    accent: "#8B4F58",
  },
  {
    icon: FaHeart,
    title: "Client Satisfaction",
    description: "We don't consider an appointment done until you leave with nails you love and a smile to match.",
    accent: "#B76E79",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden" aria-label="Why choose us">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #B76E79 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4A0A7 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-poppins font-semibold tracking-[0.2em] uppercase text-roseGoldLight mb-3"
          >
            The Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-white"
          >
            Why Choose <span className="text-gradient">Nails by Sweta26</span>
          </motion.h2>
          <div className="divider-rose" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-roseGold/40
                rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
                  bg-roseGold/10 group-hover:bg-roseGold/20 transition-colors"
              >
                <r.icon className="text-roseGoldLight" size={22} aria-hidden="true" />
              </div>
              <h3 className="font-playfair text-white text-lg font-semibold mb-3">{r.title}</h3>
              <p className="text-white/50 font-poppins text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
