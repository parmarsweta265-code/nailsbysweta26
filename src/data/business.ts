// ─── Business Configuration ───────────────────────────────────────────────────
// Edit this file to update all business information across the website.

export const business = {
  name: "NailsbySweta26",
  displayName: "Nails by Sweta26",
  tagline: "Where Beauty Meets Elegance",
  description:
    "Nails by Sweta26 is a premium nail studio in Anand offering luxury nail extensions, gel polish, nail art, overlays, and professional nail care. We focus on hygiene, quality, and customer satisfaction to give every client a beautiful experience.",
  shortDescription:
    "Premium nail studio in Anand, Gujarat — luxury nail art & extensions by appointment.",
  owner: "Sweta Parmar",
  address: "Anand, Gujarat, India",
  googleMapsUrl: "https://maps.app.goo.gl/HnN9e9z6J8w8sDcM6",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6!2d72.9589!3d22.5564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMzJzIzLjAiTiA3MsKwNTcnMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  phone: "+918200119976",
  whatsapp: "+918200119976",
  whatsappDisplay: "+91 820 011 9976",
  instagram: "https://www.instagram.com/nails_by_sweta26",
  instagramHandle: "@nails_by_sweta26",
  email: "",

  workingHours: [
    { days: "Monday – Friday", hours: "5:00 PM – 10:00 PM" },
    { days: "Saturday", hours: "2:00 PM onwards" },
    { days: "Sunday", hours: "10:00 AM – 10:00 PM" },
  ],

  // ─── Popup Controls ──────────────────────────────────────────────────────────
  offerPopup: {
    enabled: true,
    delayMs: 2000,
    // Place your offer image at: public/offers/offer.jpg
    imagePath: "/offers/offer.jpg",
    // Fallback when image is missing — set to false to hide fallback content
    showFallback: true,
    fallbackTitle: "✨ Special Offer",
    fallbackDescription: "Get 20% off on your first nail extension appointment!",
    fallbackCta: "Book Now on WhatsApp",
  },

  holidayPopup: {
    enabled: false,
    // Place your holiday image at: public/holiday/holiday.jpg
    imagePath: "/holiday/holiday.jpg",
    altText: "Holiday Special",
  },

  // ─── SEO ─────────────────────────────────────────────────────────────────────
  siteUrl: "https://nailsbysweta26.com",
  locale: "en_IN",
  themeColor: "#B76E79",
};

export type Business = typeof business;
