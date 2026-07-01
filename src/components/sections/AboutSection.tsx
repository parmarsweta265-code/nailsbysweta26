"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaStar, FaHeart, FaAward } from "react-icons/fa";
import { business } from "@/data/business";

const features = [
  {
    icon: FaLeaf,
    title: "Premium Products",
    description: "We use only top-tier gel brands, hypoallergenic materials, and professional-grade tools.",
  },
  {
    icon: FaAward,
    title: "100% Hygiene",
    description: "Every tool is sterilised before use. Disposable files and buffers for every client.",
  },
  {
    icon: FaStar,
    title: "Expert Nail Art",
    description: "Intricate designs crafted with precision — from minimalist to elaborate and 3D.",
  },
  {
    icon: FaHeart,
    title: "Client First",
    description: "Your comfort, satisfaction, and nail health are at the centre of every appointment.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-luxury" aria-label="About NailsbySweta26">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none shadow-luxury-hover">
              <Image
                src="/about/about.jpg"
                alt="Sweta Parmar — nail artist at NailsbySweta26"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              {/* Decorative overlay strip */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-playfair text-white text-lg font-semibold">{business.owner}</p>
                <p className="text-roseGoldLight text-xs font-poppins tracking-widest uppercase mt-0.5">
                  Founder & Nail Artist
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-roseGold rounded-full flex flex-col
              items-center justify-center text-white shadow-luxury animate-float">
              <span className="font-playfair font-bold text-lg leading-none">5★</span>
              <span className="text-[9px] font-poppins tracking-wide leading-none mt-0.5">Rated</span>
            </div>
          </motion.div>

          {/* Text side */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-section text-charcoal mb-2"
            >
              Luxury Nail Care,
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-section text-gradient mb-5"
            >
              Crafted with Heart
            </motion.h2>

            <div className="divider-rose !mx-0" />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-poppins text-charcoal/70 leading-relaxed mt-5 mb-8 max-w-lg"
            >
              {business.description}
            </motion.p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-roseGold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="text-roseGold" size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-charcoal text-sm mb-1">{f.title}</h3>
                    <p className="text-charcoal/60 text-xs leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
