"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white" aria-label="Contact and location">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="heading-section text-charcoal"
          >
            Find <span className="text-gradient">Our Studio</span>
          </motion.h2>
          <div className="divider-rose" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            {/* Business name */}
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold text-charcoal">{business.displayName}</h3>
              <p className="text-roseGold text-xs font-poppins tracking-widest uppercase mt-1">
                {business.tagline}
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <InfoCard
                icon={FaMapMarkerAlt}
                label="Location"
                value={business.address}
                action={
                  <a
                    href={business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-roseGold hover:text-roseGoldDark
                      font-poppins font-medium mt-2 transition-colors"
                    aria-label="Get directions on Google Maps"
                  >
                    Get Directions <FaExternalLinkAlt size={10} />
                  </a>
                }
              />

              <InfoCard
                icon={FiClock}
                label="Working Hours"
                value={
                  <div className="space-y-1 mt-1">
                    {business.workingHours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm">
                        <span className="text-charcoal/50">{h.days}</span>
                        <span className="text-charcoal font-medium">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                }
              />

              <InfoCard
                icon={FaWhatsapp}
                label="WhatsApp"
                value={business.whatsappDisplay}
                action={
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-5 py-2.5 mt-3 inline-flex"
                    aria-label="Book appointment on WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                    Book Appointment
                  </a>
                }
              />

              <InfoCard
                icon={FaInstagram}
                label="Instagram"
                value={business.instagramHandle}
                action={
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-roseGold hover:text-roseGoldDark
                      font-poppins font-medium mt-2 transition-colors"
                    aria-label="Visit Instagram profile"
                  >
                    View Profile <FaExternalLinkAlt size={10} />
                  </a>
                }
              />
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl overflow-hidden shadow-luxury-hover h-[400px] lg:h-full min-h-[380px]"
          >
            <iframe
              src={`https://maps.google.com/maps?q=Anand,Gujarat,India&z=14&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NailsbySweta26 location map — Anand, Gujarat"
              aria-label="Google Map showing NailsbySweta26 location in Anand, Gujarat"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
  action?: React.ReactNode;
}

function InfoCard({ icon: Icon, label, value, action }: InfoCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-mist border border-blush/50">
      <div className="w-10 h-10 rounded-xl bg-roseGold/10 flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="text-roseGold" size={18} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-poppins font-semibold tracking-widest uppercase text-charcoal/40 mb-1">
          {label}
        </p>
        {typeof value === "string" ? (
          <p className="text-charcoal font-poppins font-medium text-sm">{value}</p>
        ) : (
          <div className="text-charcoal font-poppins text-sm">{value}</div>
        )}
        {action}
      </div>
    </div>
  );
}
