"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { galleryItems } from "@/data/gallery";
import { sortByDate, relativeDate } from "@/lib/utils";

const sorted = sortByDate(galleryItems);

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + sorted.length) % sorted.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % sorted.length : null));

  return (
    <>
      <section id="gallery" className="section-padding bg-mist" aria-label="Gallery">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="heading-section text-charcoal"
            >
              Nail <span className="text-gradient">Gallery</span>
            </motion.h2>
            <div className="divider-rose" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal/60 font-poppins text-sm mt-4 max-w-md mx-auto"
            >
              A look at our recent work — click any image to view full size.
            </motion.p>
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {sorted.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl
                  shadow-soft hover:shadow-luxury-hover transition-all duration-300"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
              >
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col
                    justify-end p-3">
                    <p className="text-white font-playfair text-sm font-semibold leading-snug">
                      {item.title}
                    </p>
                    <p className="text-white/60 text-[10px] font-poppins flex items-center gap-1 mt-1">
                      <FiClock size={10} />
                      {relativeDate(item.uploadDate)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={`Gallery lightbox — ${sorted[lightboxIndex].title}`}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10
                hover:bg-white/20 p-2.5 rounded-full transition-all"
              aria-label="Close lightbox"
            >
              <FiX size={22} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl max-h-[85vh] w-full px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={sorted[lightboxIndex].imagePath}
                  alt={sorted[lightboxIndex].title}
                  fill
                  sizes="(max-width: 672px) 100vw, 672px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-white font-playfair font-semibold">{sorted[lightboxIndex].title}</p>
                <p className="text-white/40 text-xs font-poppins mt-0.5">
                  {relativeDate(sorted[lightboxIndex].uploadDate)}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              aria-label="Next image"
            >
              <FiChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
