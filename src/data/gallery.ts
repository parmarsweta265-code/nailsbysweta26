// ─── Gallery Configuration ────────────────────────────────────────────────────
// Add your gallery images here. Images go in public/gallery/
// Newest items should be at the top — the gallery sorts by uploadDate desc.

export interface GalleryItem {
  id: string;
  title: string;
  imagePath: string; // Your actual image in public/gallery/
  imagePlaceholder: string; // Placeholder until you add your image
  uploadDate: string; // ISO date string: "2026-06-20"
  tags?: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Rose Gold Ombre Extensions",
    imagePath:
      "https://drive.google.com/uc?export=view&id=15AqbGzL-jwurUR4MjfUi9oWcI8xzDyjO",
    imagePlaceholder:
      "https://drive.google.com/uc?export=view&id=15AqbGzL-jwurUR4MjfUi9oWcI8xzDyjO",
    uploadDate: "2026-06-25",
    tags: ["extensions", "ombre", "rose gold"],
  },
  {
    id: "g2",
    title: "French Tip Almond Nails",
    imagePath: "/gallery/g2.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-06-22",
    tags: ["french", "almond", "classic"],
  },
  {
    id: "g3",
    title: "3D Floral Nail Art",
    imagePath: "/gallery/g3.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-06-20",
    tags: ["3d", "floral", "art"],
  },
  {
    id: "g4",
    title: "Holographic Chrome Set",
    imagePath: "/gallery/g4.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-06-15",
    tags: ["chrome", "holographic"],
  },
  {
    id: "g5",
    title: "Nude Gel Coffin Nails",
    imagePath: "/gallery/g5.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-06-10",
    tags: ["nude", "coffin", "gel"],
  },
  {
    id: "g6",
    title: "Pastel Swirl Art",
    imagePath: "/gallery/g6.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-06-05",
    tags: ["pastel", "swirl", "art"],
  },
  {
    id: "g7",
    title: "Deep Red Stiletto Extensions",
    imagePath: "/gallery/g7.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-05-28",
    tags: ["red", "stiletto", "extensions"],
  },
  {
    id: "g8",
    title: "White Soft Gel Overlay",
    imagePath: "/gallery/g8.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-05-20",
    tags: ["white", "overlay", "minimal"],
  },
  {
    id: "g9",
    title: "Galaxy Nail Art",
    imagePath: "/gallery/g9.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-05-10",
    tags: ["galaxy", "art", "dark"],
  },
  {
    id: "g10",
    title: "Bridal Nail Set",
    imagePath: "/gallery/g10.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-04-30",
    tags: ["bridal", "white", "extensions"],
  },
  {
    id: "g11",
    title: "Marble Effect Gel",
    imagePath: "/gallery/g11.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-04-15",
    tags: ["marble", "gel", "minimal"],
  },
  {
    id: "g12",
    title: "Glitter Ombre Set",
    imagePath: "/gallery/g12.jpg",
    imagePlaceholder:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    uploadDate: "2026-03-30",
    tags: ["glitter", "ombre"],
  },
];
