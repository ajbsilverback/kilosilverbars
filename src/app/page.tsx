import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Kilo Silver Bars: 1,000 Grams of Pure Silver Bullion",
  description:
    "Learn why kilo silver bars (1,000 grams / 32.15 oz) offer an accessible entry into substantial silver ownership. Compare bar sizes, understand premiums, storage, and liquidity.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "Kilo Silver Bars: 1,000 Grams of Pure Silver Bullion",
    description:
      "Learn why kilo silver bars offer an accessible entry into substantial silver ownership. Compare bar sizes, understand premiums, storage, and liquidity.",
    url: SITE_CONFIG.domain,
  },
};

export default async function HomePage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kilo Silver Bars: 1,000 Grams of Pure Silver Bullion",
    description:
      "Learn why kilo silver bars (1,000 grams / 32.15 oz) offer an accessible entry into substantial silver ownership. Compare bar sizes, understand premiums, storage, and liquidity.",
    url: SITE_CONFIG.domain,
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
      name: "Kilo Silver Bars",
      description: "One kilogram (1,000 gram) silver bullion bars",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section */}
      <section className="relative silver-bar-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy-50 border border-navy-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-navy-700 mr-3 animate-pulse" />
                <span className="text-navy-700 text-sm font-medium">
                  1 Kilogram (1,000 Grams) of Pure Silver
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="silver-text">Kilo Silver Bars</span>
                <br />
                <span className="text-gray-900">
                  Accessible. Substantial. Valuable.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-prose">
                Discover why kilo silver bars are a popular choice for 
                investors seeking an accessible entry point into substantial 
                silver ownership with competitive premiums. Learn{" "}
                <Link href="/where-to-buy-kilo-silver-bars" className="text-navy-700 hover:underline">
                  where to buy kilo silver bars
                </Link>{" "}
                in our independent buying guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/live-silver-prices" className="btn-primary">
                  View Current Silver Prices
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Browse Educational Guides
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/kilo-silver-bar.png"
                alt="Kilo silver bar"
                width={600}
                height={600}
                className="max-w-lg w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Silver Price Section */}
      <section className="pt-4 pb-10 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-gray-900">
              <span className="silver-text">Live Silver Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track real-time silver prices with live market data updated on page load.
            </p>
          </div>
          <LiveGbozSpotCard />
        </div>
      </section>

      {/* Why Kilo Silver Bars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Why <span className="silver-text">Kilo Silver Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The kilo silver bar represents an ideal balance of 
              substantial silver content, competitive premiums, and practical ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Competitive Premiums
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kilo bars offer{" "}
                <Link href="/resources/premiums-explained" className="text-navy-700 hover:underline">
                  competitive retail premiums
                </Link>{" "}
                of typically 3-6% over{" "}
                <Link href="/live-silver-prices" className="text-navy-700 hover:underline">
                  spot price
                </Link>. Compared to 1 oz bars or rounds (5-15% premium), you get more silver 
                for your money with the kilo format.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Accessible Entry Point
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At approximately 32.15 troy ounces, kilo bars offer a meaningful 
                silver position without requiring the substantial capital of larger 
                institutional formats. Perfect for building a diversified precious 
                metals portfolio over time.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl silver-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">
                Storage Efficiency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A single kilo bar stores the equivalent value of 32+ individual 
                1 oz bars in one compact unit. This simplifies 
                storage, reduces handling, and makes inventory management 
                straightforward for home safes or vault storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys Kilo Silver Bars */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 silver-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
                Who Buys <span className="silver-text">Kilo Silver Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Kilo bars serve a wide range of investors seeking meaningful 
                silver exposure with practical benefits.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Individual Investors
                    </h3>
                    <p className="text-gray-600">
                      Investors with $1,000-$10,000+ to allocate to precious metals 
                      find kilo bars offer excellent value, balancing premium 
                      savings with manageable capital commitment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Collectors & Stackers
                    </h3>
                    <p className="text-gray-600">
                      Silver stackers appreciate the kilo format for building 
                      substantial positions efficiently. The metric weight 
                      (1,000 grams) makes tracking and calculating holdings 
                      straightforward.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-navy-700 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Long-Term Holders
                    </h3>
                    <p className="text-gray-600">
                      Investors with multi-year time horizons prioritize acquisition 
                      cost over maximum flexibility. The lower premiums on kilo bars 
                      compound into meaningful value over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard priceData={priceData} />
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Comparing <span className="silver-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding how kilo silver bars compare to other denominations 
              helps you choose the right size for your investment goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-silver-200">
              <thead>
                <tr className="border-b border-silver-200 bg-gray-50">
                  <th className="text-left py-4 px-6 text-navy-700 font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    10 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-navy-700 font-display">
                    Kilo Bar (32.15 oz)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Premium Over Spot</td>
                  <td className="py-4 px-6 text-center">5-15%</td>
                  <td className="py-4 px-6 text-center">4-8%</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-semibold">
                    3-6% (Better Value)
                  </td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Entry Cost</td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 1.10).toLocaleString("en-US")}</>
                    ) : (
                      "~$38"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round((priceData.ask / SITE_CONFIG.troyOunces) * 10 * 1.06).toLocaleString("en-US")}</>
                    ) : (
                      "~$360"
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {priceData ? (
                      <>~${Math.round(priceData.ask).toLocaleString("en-US")}</>
                    ) : (
                      "~$1,100"
                    )}
                  </td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Divisibility</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Storage Efficiency</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Better</td>
                  <td className="py-4 px-6 text-center text-emerald-600 font-semibold">Best</td>
                </tr>
                <tr className="border-b border-silver-100">
                  <td className="py-4 px-6 font-medium">Global Recognition</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center text-emerald-600">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">Maximum Flexibility</td>
                  <td className="py-4 px-6 text-center">Balance</td>
                  <td className="py-4 px-6 text-center text-navy-700 font-semibold">
                    Value & Substance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
              Important <span className="silver-text">Considerations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              While kilo bars offer excellent value, consider these factors 
              when planning your silver investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Liquidity Considerations
              </h3>
              <p className="text-gray-600 mb-4">
                Kilo bars are widely recognized and liquid, though slightly less 
                so than 1 oz formats. Established dealers maintain ready markets, 
                and the international metric standard ensures global acceptance. 
                Learn more in our{" "}
                <Link href="/resources/liquidity-considerations" className="text-navy-700 hover:underline">
                  liquidity guide
                </Link>.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> If you 
                anticipate needing to liquidate small portions frequently, 
                maintaining some smaller bars alongside kilos provides flexibility.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Partial Sales
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike holding multiple small bars, you cannot partially 
                liquidate a kilo bar. When you sell, you&apos;re converting 
                approximately {priceData ? `$${Math.round(priceData.ask).toLocaleString("en-US")}` : "$1,100"}+ to cash at once.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> Many 
                investors combine kilo bars for core holdings with smaller 
                bars for flexibility when partial liquidation might be needed.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Storage Requirements
              </h3>
              <p className="text-gray-600 mb-4">
                A kilo bar weighs approximately 2.2 pounds (1 kg) and is highly 
                portable. Most{" "}
                <Link href="/resources/storage-options" className="text-navy-700 hover:underline">
                  home safes
                </Link>{" "}
                can easily accommodate multiple kilo bars, making them practical 
                for personal storage while still representing meaningful value.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> Professional 
                vault storage remains an option for larger collections, though 
                many kilo bar owners successfully store at home.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">
                Authentication & Quality
              </h3>
              <p className="text-gray-600 mb-4">
                Buy only from{" "}
                <Link href="/where-to-buy-kilo-silver-bars" className="text-navy-700 hover:underline">
                  established dealers
                </Link>{" "}
                and choose bars from recognized refiners with proper 
                documentation. Quality kilo bars include serial numbers, 
                weight stamps, and purity markings.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-navy-700">Consider:</strong> Bars from{" "}
                <Link href="/resources/brand-differences" className="text-navy-700 hover:underline">
                  refiners like PAMP, Valcambi, Heraeus, and Royal Canadian Mint
                </Link>{" "}
                include documentation that aids authentication and resale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 silver-bar-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/live-silver-prices" className="text-navy-700 hover:underline">
              current silver prices
            </Link>
            , dive into our{" "}
            <Link href="/resources" className="text-navy-700 hover:underline">
              educational guides
            </Link>
            , and discover whether kilo silver bars are right for your 
            investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/live-silver-prices" className="btn-primary">
              View Current Silver Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Browse Educational Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
