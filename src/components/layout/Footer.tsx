import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FiClock, FiHeart } from "react-icons/fi";
import { business } from "@/data/business";
import { buildWhatsAppUrl } from "@/lib/utils";

const bookingUrl = buildWhatsAppUrl(
  business.whatsapp,
  "Hello NailsbySweta26,\n\nI would like to book an appointment. Please let me know your available timings.\n\nThank you."
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80" role="contentinfo">
      {/* Top strip */}
      <div className="bg-roseGold">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-playfair text-white text-lg font-semibold">
            Ready to book your luxury nail experience?
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-roseGold font-poppins font-semibold
              text-sm px-5 py-2 rounded-full hover:bg-blush transition-colors whitespace-nowrap"
          >
            <FaWhatsapp size={16} />
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="font-playfair text-white text-2xl font-bold mb-1">
            Nails by Sweta<span className="text-roseGoldLight">26</span>
          </h2>
          <p className="text-roseGoldLight text-xs font-poppins tracking-widest uppercase mb-4">
            {business.tagline}
          </p>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            {business.shortDescription}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-roseGold flex items-center justify-center transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-roseGold flex items-center justify-center transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-playfair text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-roseGoldLight transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="text-white font-playfair text-lg font-semibold mb-5">Studio Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-roseGoldLight mt-0.5 shrink-0" size={14} />
              <span>{business.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaWhatsapp className="text-roseGoldLight mt-0.5 shrink-0" size={14} />
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-roseGoldLight transition-colors">
                {business.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FaInstagram className="text-roseGoldLight mt-0.5 shrink-0" size={14} />
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-roseGoldLight transition-colors">
                {business.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiClock className="text-roseGoldLight mt-0.5 shrink-0" size={14} />
              <div className="space-y-1">
                {business.workingHours.map((h) => (
                  <div key={h.days}>
                    <span className="text-white/50">{h.days}:</span>{" "}
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© 2026 {business.displayName}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="text-roseGoldLight" size={11} aria-hidden="true" /> in Anand, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
