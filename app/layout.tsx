import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./ploy-facelift.css";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--sahel-font-sans",
  display: "swap",
  adjustFontFallback: true,
});

const siteDescription =
  "Sahel Power is developing mobile EV charging for drivers, fleets, and businesses in Ghana. Charging comes to the vehicle.";

const ogImage = "/images/sahel-power-ev-service-accra-hero.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Sahel Power | Mobile EV charging in Ghana",
  description: siteDescription,
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Sahel Power | Mobile EV charging in Ghana",
    siteName: "Sahel Power",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        alt: "Sahel Power mobile charging van serving an electric vehicle in Accra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahel Power | Mobile EV charging in Ghana",
    description: siteDescription,
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sahel Power",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    },
    {
      "@type": "WebSite",
      name: "Sahel Power",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    },
    {
      "@type": "WebPage",
      name: "Sahel Power | Mobile EV charging in Ghana",
      description: siteDescription,
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
      image: ogImage,
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={monaSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="/_ploy_static/_astro/index.BhEVVOhj.css"
          precedence="default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={monaSans.className}>{children}</body>
    </html>
  );
}
