"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaClock } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { buildWhatsAppUrl, buildBookingMessage } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white" aria-label="Our services">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-charcoal"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <div className="divider-rose" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-charcoal/60 font-poppins text-sm mt-4 max-w-lg mx-auto"
          >
            Every service is performed with premium products, meticulous hygiene, and personal attention.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const waUrl = buildWhatsAppUrl(
              business.whatsapp,
              buildBookingMessage(service.name)
            );

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.55 }}
                className="card-luxury group flex flex-col"
                aria-label={`Service: ${service.name}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.imagePath}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0
                    group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-roseGold text-white
                      text-[10px] font-poppins font-semibold px-2.5 py-1 rounded-full">
                      <MdStar size={11} aria-hidden="true" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="heading-card text-charcoal leading-snug">{service.name}</h3>
                    <div className="text-right shrink-0">
                      <p className="font-playfair font-bold text-roseGold text-lg leading-none">
                        {service.price}
                      </p>
                      {service.priceNote && (
                        <p className="text-[10px] text-charcoal/40 font-poppins">{service.priceNote}</p>
                      )}
                    </div>
                  </div>

                  {service.duration && (
                    <p className="flex items-center gap-1 text-[11px] text-charcoal/40 font-poppins mb-3">
                      <FaClock size={10} aria-hidden="true" />
                      {service.duration}
                    </p>
                  )}

                  <p className="text-charcoal/60 text-xs leading-relaxed font-poppins flex-1 mb-5">
                    {service.description}
                  </p>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-roseGold hover:bg-roseGoldDark
                      text-white text-sm font-poppins font-medium px-4 py-2.5 rounded-full
                      transition-all duration-300 hover:shadow-luxury mt-auto"
                    aria-label={`Book ${service.name} on WhatsApp`}
                  >
                    <FaWhatsapp size={15} aria-hidden="true" />
                    Book This Service
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
