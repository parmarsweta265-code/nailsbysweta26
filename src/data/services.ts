// ─── Services Configuration ───────────────────────────────────────────────────
// Add, remove, or edit services here. Images go in public/services/

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  imagePlaceholder: string; // URL used until you add your own image
  imagePath: string; // Path in public/services/ — replace placeholder with this
  category: "extensions" | "gel" | "art" | "care" | "overlay";
  popular?: boolean;
  duration?: string;
}

export const services: Service[] = [
  {
    id: "gel-polish",
    name: "Gel Polish",
    description:
      "Long-lasting, chip-free gel colour in 100+ shades. Cured under UV for a mirror shine that stays perfect for up to 3 weeks.",
    price: "₹599",
    priceNote: "onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/gel-polish.jpg",
    category: "gel",
    popular: true,
    duration: "45 min",
  },
  {
    id: "nail-extensions",
    name: "Nail Extensions",
    description:
      "Sculpted acrylic or hard gel extensions custom-fitted to your desired length and shape — coffin, almond, stiletto, square.",
    price: "₹1,499",
    priceNote: "onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/nail-extensions.jpg",
    category: "extensions",
    popular: true,
    duration: "90 min",
  },
  {
    id: "nail-art",
    name: "Nail Art",
    description:
      "From minimalist linework to intricate florals and 3D designs — bespoke nail art crafted to match your style and mood.",
    price: "₹299",
    priceNote: "per nail onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/nail-art.jpg",
    category: "art",
    popular: true,
    duration: "30–90 min",
  },
  {
    id: "soft-gel-overlay",
    name: "Soft Gel Overlay",
    description:
      "A protective soft-gel layer over natural nails. Adds strength and glossy finish without extending length.",
    price: "₹899",
    priceNote: "onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/soft-gel-overlay.jpg",
    category: "overlay",
    duration: "60 min",
  },
  {
    id: "nail-repair",
    name: "Nail Repair & Fill",
    description:
      "Infill or repair for extensions and overlays. Keep your nails looking fresh between full sets.",
    price: "₹499",
    priceNote: "onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/nail-repair.jpg",
    category: "care",
    duration: "45 min",
  },
  {
    id: "manicure",
    name: "Luxury Manicure",
    description:
      "Classic manicure with cuticle care, nail shaping, hydrating hand massage, and your choice of colour.",
    price: "₹799",
    priceNote: "onwards",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/manicure.jpg",
    category: "care",
    duration: "60 min",
  },
  {
    id: "chrome-powder",
    name: "Chrome & Mirror Finish",
    description:
      "Holographic, gold, silver, or rose-gold chrome powder applied over gel for a metallic mirror effect.",
    price: "₹199",
    priceNote: "add-on",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/chrome-powder.jpg",
    category: "art",
    duration: "15 min",
  },
  {
    id: "nail-removal",
    name: "Safe Nail Removal",
    description:
      "Gentle soak-off removal of gel, extensions, or overlays — no damage, no filing down the natural nail plate.",
    price: "₹299",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    imagePath: "/services/nail-removal.jpg",
    category: "care",
    duration: "30 min",
  },
];
