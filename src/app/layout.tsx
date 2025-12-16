import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Global structured data for WebSite and Organization
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.domain,
  description:
    "Independent educational resource about kilo silver bars (1,000 grams), covering premiums, storage, refiner standards, and practical considerations for precious metals investors.",
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_CONFIG.domain}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.domain}/resources?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_CONFIG.domain}/#organization`,
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.domain,
  logo: `${SITE_CONFIG.domain}/og-image.jpg`,
  description:
    "Independent educational publisher providing comprehensive guides on kilo silver bars for investors. We do not sell precious metals or provide financial advice.",
  sameAs: [],
  foundingDate: "2024",
  knowsAbout: [
    "Kilo silver bars",
    "1 kilogram silver bullion",
    "Silver bullion investing",
    "Precious metals storage",
    "Silver spot prices",
    "Silver bar premiums",
  ],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about kilo silver bars (1,000 grams), a popular choice for investors seeking substantial silver positions with competitive premiums. Expert insights on silver bullion bars.",
  keywords: [
    "kilo silver bars",
    "1 kilo silver bars",
    "kilogram silver bars",
    "1000 gram silver bars",
    "silver bullion bars",
    "buy kilo silver bars",
    "silver investment",
    "silver bar prices",
    "silver bullion",
    "kilo silver bar premiums",
    "silver bar storage",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Discover everything about kilo silver bars (1,000 grams), a popular choice for investors seeking substantial silver positions with competitive premiums.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kilo Silver Bars - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Discover everything about kilo silver bars (1,000 grams), a popular choice for investors seeking substantial silver positions with competitive premiums.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bullion-light text-gray-900 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
