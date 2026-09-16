import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Diginet Studio | Website Development, SEO & AI Automation",
  description:
    "Diginet Studio helps businesses grow online with professional website development, SEO & Google optimisation, AI automation and CRM solutions.",
  keywords: [
    "Website Development",
    "Diginet Studio",
    "SEO Optimisation",
    "AI Automation",
    "CRM Setup",
    "Digital Agency",
    "Business Websites",
    "Google Business Profile",
  ],
  authors: [{ name: "Diginet Studio" }],
  icons: {
    icon: "/diginet-logo-transparent.png",
    apple: "/diginet-logo-transparent.png",
  },
  openGraph: {
    title: "Diginet Studio | Modern Website Development Solutions",
    description:
      "We Help Creators And Businesses Grow Online Through Content, Branding, Website And Marketing.",
    url: "https://diginetstudio.com",
    siteName: "Diginet Studio",
    images: [{ url: "/diginet-logo-transparent.png", width: 642, height: 485, alt: "Diginet Studio Logo" }],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Diginet Studio",
    image: "https://diginetstudio.com/diginet-logo-transparent.png",
    description:
      "Diginet Studio helps creators and businesses build a stronger online presence through modern websites, SEO, AI automation and digital strategy.",
    url: "https://diginetstudio.com",
    telephone: "+91 93661 61941",
    priceRange: "₹7,999 - ₹19,999+",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
    sameAs: ["https://wa.me/919366161941"],
  };

  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/diginet-logo-transparent.png" />
        <link rel="apple-touch-icon" href="/diginet-logo-transparent.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#111111] font-sans antialiased selection:bg-purple-100 selection:text-purple-900">
        {children}
      </body>
    </html>
  );
}
