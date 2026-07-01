"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { business } from "@/data/business";
import { galleryItems } from "@/data/gallery";
import { sortByDate } from "@/lib/utils";

// Show the 6 most recent gallery images as an Instagram preview
const preview = sortByDate(galleryItems).slice(0, 6);

export function InstagramSection() {
  return (
    <section className="section-padding bg-luxury" aria-label="Follow us on Instagram">
      <div className="container-max">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br
              from-purple-500 via-pink-500 to-orange-400 rounded-2xl mb-5"
          >
            <FaInstagram className="text-white" size={26} aria-hidden="true" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Instagram
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-charcoal"
          >
            Follow Our <span className="text-gradient">Journey</span>
          </motion.h2>
          <div className="divider-rose" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 font-poppins text-sm mt-4"
          >
            {business.instagramHandle} — new designs every week
          </motion.p>
        </div>

        {/* Preview grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-10">
          {preview.map((item, i) => (
            <motion.a
              key={item.id}
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative aspect-square rounded-xl overflow-hidden group block"
              aria-label={`View ${item.title} on Instagram`}
            >
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors
                duration-300 flex items-center justify-center">
                <FaInstagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
              text-white font-poppins font-semibold px-8 py-4 rounded-full hover:shadow-lg
              hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Follow NailsbySweta26 on Instagram"
          >
            <FaInstagram size={20} aria-hidden="true" />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
