export type { Business } from "@/data/business";
export type { Service } from "@/data/services";
export type { GalleryItem } from "@/data/gallery";
export type { Testimonial } from "@/data/testimonials";

export interface NavItem {
  label: string;
  href: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}
