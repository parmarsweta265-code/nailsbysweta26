// ─── Testimonials Configuration ───────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Anand",
    review:
      "Sweta's work is absolutely stunning! My gel extensions lasted a full month without a single chip. The studio is spotless and she made me feel so comfortable throughout.",
    rating: 5,
    service: "Nail Extensions",
    date: "June 2026",
  },
  {
    id: "t2",
    name: "Meera Patel",
    location: "Vadodara",
    review:
      "I came for nail art for my wedding and I'm beyond thrilled. Sweta created intricate floral designs that matched my lehenga perfectly. Every guest complimented them!",
    rating: 5,
    service: "Nail Art",
    date: "May 2026",
  },
  {
    id: "t3",
    name: "Ritu Desai",
    location: "Anand",
    review:
      "Best nail studio in Anand, hands down. The rose gold ombre set she did for me got so many compliments. Professional, hygienic, and genuinely passionate about her craft.",
    rating: 5,
    service: "Gel Polish",
    date: "May 2026",
  },
  {
    id: "t4",
    name: "Anjali Joshi",
    location: "Nadiad",
    review:
      "I was nervous about getting extensions for the first time but Sweta explained everything and made the process so relaxing. The shape and length are exactly what I wanted!",
    rating: 5,
    service: "Nail Extensions",
    date: "April 2026",
  },
  {
    id: "t5",
    name: "Kavya Shah",
    location: "Anand",
    review:
      "The chrome mirror nails she did are out of this world! I get stopped everywhere and asked about them. WhatsApp booking is super easy too — highly recommend.",
    rating: 5,
    service: "Chrome Finish",
    date: "April 2026",
  },
  {
    id: "t6",
    name: "Nisha Mehta",
    location: "Ahmedabad",
    review:
      "Drove from Ahmedabad just for a Sweta appointment and it was 100% worth it. Quality rivals any big-city salon but the personal attention here is unmatched.",
    rating: 5,
    service: "Luxury Manicure",
    date: "March 2026",
  },
];
