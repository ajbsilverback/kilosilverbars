import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { SilverPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveSilverSpotIndexCard from "@/components/LiveSilverSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Live Kilo Silver Bar Price | Silver Spot Price Today",
  description:
    "Track live kilo silver bar prices updated on page load. Compare spot prices, understand premiums, and view historical charts. Data sourced from Monex.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-silver-prices`,
  },
  openGraph: {
    title: "Live Kilo Silver Bar Price | Silver Spot Price Today",
    description:
      "Track live kilo silver bar prices updated on page load. Compare spot prices, understand premiums, and view historical charts.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotIndexData = await fetchMetalSpotIndex();
  
  // Format spot price for display
  const spotPricePerOz = spotIndexData?.ask ?? 30;
  const formattedSpotPrice = `$${Math.round(spotPricePerOz).toLocaleString("en-US")}`;
  
  // Calculate example prices based on live spot (kilo = 32.15 oz)
  const oneOzBarsTotal = Math.round(spotPricePerOz * SITE_CONFIG.troyOunces * 1.10); // 10% premium
  const tenOzBarsTotal = Math.round(spotPricePerOz * SITE_CONFIG.troyOunces * 1.06); // 6% avg premium
  const kiloBarsTotal = Math.round(spotPricePerOz * SITE_CONFIG.troyOunces * 1.04); // 4% premium
  const savings = oneOzBarsTotal - kiloBarsTotal;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Live Kilo Silver Bar Price | Silver Spot Price Today",
    description:
      "Track live kilo silver bar prices updated on page load. Compare spot prices, understand premiums, and view historical charts. Data sourced from Monex.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    isPartOf: {
      "@type": "WebSite",
      url: SITE_CONFIG.domain,
      name: SITE_CONFIG.brandName,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.domain}/#organization`,
    },
    about: {
      "@type": "Thing",
      name: "Silver Spot Prices",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a kilo silver bar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a kilo silver bar consists of the spot price of silver multiplied by 32.15 troy ounces, plus a premium that covers refining, distribution, and dealer margins. Kilo bar premiums typically range from 3-6% over spot, offering competitive value compared to smaller bars.",
        },
      },
      {
        "@type": "Question",
        name: "Why do kilo silver bars have lower premiums than smaller bars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kilo bars have lower premiums because manufacturing costs are spread across more silver content. Producing one kilo bar is more efficient than producing 32 individual 1 oz bars. The per-ounce production cost decreases with bar size.",
        },
      },
      {
        "@type": "Question",
        name: "How often do silver prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silver prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, industrial demand, investment flows, and supply dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live silver prices via Monex data",
    "Track silver spot prices per troy ounce for reference",
    "Understand how spot prices relate to kilo bar retail pricing",
    "Learn about premium structures: kilo bars have 3-6% premiums (better than 1 oz)",
    "Compare premiums across bar sizes (1 oz vs 10 oz vs kilo)",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 silver-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="silver-text">Kilo Silver Bar Price</span>
              <br />
              <span className="text-gray-900">& Live Silver Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-6 text-left">
              Track live silver prices and understand how spot pricing affects 
              the cost of kilo silver bars. Use these tools to make informed 
              decisions about your precious metals investments. Return to our{" "}
              <Link href="/" className="text-navy-700 hover:underline">
                overview of kilo silver bars
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-navy-700 hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Silver Price Card */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Silver Spot Index Card */}
          <LiveSilverSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-gray-900 text-center">
              Silver Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <SilverPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Silver Prices */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center text-gray-900">
              Understanding <span className="silver-text">Kilo Bar Pricing</span>
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-navy-700">
                  Spot Price vs. Kilo Bar Price
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When purchasing a kilo silver bar, you&apos;ll pay a premium 
                  above the calculated spot value (spot price × 32.15 oz). 
                  The spot price represents the current market rate for silver 
                  traded in bulk on commodities exchanges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kilo bars offer <strong className="text-gray-900">competitive 
                  retail premiums</strong>, typically 3-6% over spot. This{" "}
                  <Link href="/resources/premiums-explained" className="text-navy-700 hover:underline">
                    premium
                  </Link>{" "}
                  covers refining, assaying, shipping, and{" "}
                  <Link href="/where-to-buy-kilo-silver-bars" className="text-navy-700 hover:underline">
                    dealer margins
                  </Link>.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-navy-700">
                  Why Kilo Bars Have Better Premiums
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-3">•</span>
                    <span>
                      <strong className="text-gray-900">Economy of Scale:</strong> Producing 
                      one kilo bar is more efficient than producing 32 individual 
                      1 oz bars with the same total silver content.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-3">•</span>
                    <span>
                      <strong className="text-gray-900">Reduced Handling:</strong> Fewer 
                      individual units to package, ship, and inventory reduces 
                      per-ounce costs throughout the supply chain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-3">•</span>
                    <span>
                      <strong className="text-gray-900">Global Standard:</strong> The metric 
                      kilogram is internationally recognized, ensuring efficient 
                      markets and competitive pricing worldwide.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-3">•</span>
                    <span>
                      <strong className="text-gray-900">Simpler Packaging:</strong> Kilo 
                      bars require less elaborate packaging than tubes of 
                      smaller bars or individually sealed products.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-navy-700">
                  Premium Comparison by Size
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  The premium savings on kilo bars are meaningful when building 
                  a silver position. See our{" "}
                  <Link href="/resources/size-comparison" className="text-navy-700 hover:underline">
                    complete bar size comparison
                  </Link>{" "}
                  for detailed analysis:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-500 text-sm mb-2">
                    <strong className="text-navy-700">Example at {formattedSpotPrice}/oz spot (buying 32.15 oz of silver):</strong>
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• <strong className="text-gray-900">32 × 1 oz bars (10% avg premium):</strong> ~${oneOzBarsTotal.toLocaleString("en-US")}</li>
                    <li>• <strong className="text-gray-900">3 × 10 oz bars (6% avg premium):</strong> ~${tenOzBarsTotal.toLocaleString("en-US")}</li>
                    <li>• <strong className="text-gray-900">1 × kilo bar (4% premium):</strong> ~${kiloBarsTotal.toLocaleString("en-US")}</li>
                    <li className="pt-2 border-t border-silver-200">
                      <strong className="text-navy-700">Savings:</strong> ~${savings.toLocaleString("en-US")} by choosing kilo over 1 oz bars
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 mb-6">
            For detailed market analysis and silver pricing:
          </p>
          <a
            href="https://www.monex.com/silver-prices/"
            target="_blank"
            rel="nofollow noopener"
            className="inline-flex items-center text-navy-700 hover:text-navy-600 transition-colors"
          >
            <span>Monex silver price charts</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900">
            Learn More About Kilo Silver Bars
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-navy-700 hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of kilo bar investing, or return to our{" "}
            <Link href="/" className="text-navy-700 hover:underline">
              kilo silver bar overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
