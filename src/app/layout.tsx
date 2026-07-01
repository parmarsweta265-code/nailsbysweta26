import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "@/styles/globals.css";
import { business } from "@/data/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.displayName} | ${business.tagline}`,
    template: `%s | ${business.displayName}`,
  },
  description: business.description,
  keywords: [
    "nail salon Anand",
    "nail extensions Gujarat",
    "gel nails Anand",
    "nail art Anand",
    "luxury nail studio Gujarat",
    "Sweta Parmar nails",
    "NailsbySweta26",
  ],
  authors: [{ name: business.owner }],
  creator: business.owner,
  openGraph: {
    type: "website",
    locale: business.locale,
    url: business.siteUrl,
    title: `${business.displayName} | ${business.tagline}`,
    description: business.description,
    siteName: business.displayName,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: business.displayName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.displayName} | ${business.tagline}`,
    description: business.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: business.themeColor,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.displayName,
  description: business.description,
  url: business.siteUrl,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Anand",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "17:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "14:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "10:00", closes: "22:00" },
  ],
  sameAs: [business.instagram],
  priceRange: "₹₹",
  image: `${business.siteUrl}/og-image.jpg`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={business.siteUrl} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
