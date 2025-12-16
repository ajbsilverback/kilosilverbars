export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  /** Contextual Monex.com reference link for this article */
  monexLink: string;
  /** Descriptive anchor text for the Monex link */
  monexAnchorText: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Kilo Silver Bar Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why kilo bars have competitive premiums, and how to evaluate costs when purchasing kilo silver bars.",
    excerpt:
      "Discover why kilo silver bars command competitive retail premiums and how to maximize your silver buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/investing-in-silver/",
    monexAnchorText: "Monex analysis of silver bar investments",
  },
  {
    slug: "size-comparison",
    title: "Kilo vs 10 oz vs 1 oz Silver Bars: Finding Your Ideal Size",
    description:
      "A detailed comparison of silver bar sizes to help you choose the right denomination for your investment goals and capital.",
    excerpt:
      "Compare kilo, 10 oz, and 1 oz silver bars across premiums, liquidity, and practical considerations for investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver/",
    monexAnchorText: "Monex comparison of silver bar options",
  },
  {
    slug: "storage-options",
    title: "Storing Your Kilo Silver Bars: Options and Best Practices",
    description:
      "Compare storage solutions for kilo silver bars from home safes to professional vault considerations.",
    excerpt:
      "A comprehensive guide to securing your kilo silver bar investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/silver-investing/",
    monexAnchorText: "Monex guide to silver storage and care",
  },
  {
    slug: "brand-differences",
    title: "Comparing Kilo Silver Bar Brands: PAMP, Valcambi, RCM & More",
    description:
      "An in-depth comparison of major kilo silver bar manufacturers and what differentiates their products.",
    excerpt:
      "Learn the differences between PAMP, Valcambi, Heraeus, RCM, and other top kilo silver bar producers.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge-base/silver-investing/silver-bullion/",
    monexAnchorText: "Monex silver bar knowledge base",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Kilo Silver Bars",
    description:
      "Understanding the liquidity trade-offs of kilo bars compared to smaller denominations and how to plan for resale.",
    excerpt:
      "Explore the liquidity dynamics of kilo silver bars and strategies for efficient buying and selling.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver/",
    monexAnchorText: "Monex silver bullion overview",
  },
  {
    slug: "market-dynamics",
    title: "Silver Market Dynamics: What Moves Kilo Bar Prices",
    description:
      "Understanding the economic factors, industrial demand, and market forces that influence silver prices.",
    excerpt:
      "Explore the key drivers behind silver price movements and what they mean for kilo bar investors.",
    category: "Market",
    monexLink: "https://www.monex.com/silver-prices/",
    monexAnchorText: "Monex silver price charts",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Kilo Silver Bars",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling kilo silver bars.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your kilo bar trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/silver/",
    monexAnchorText: "Monex tips for silver bar purchasing",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Kilo Silver Bars: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on kilo silver bars.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/silver-investing/silver-bullion/",
    monexAnchorText: "Monex silver bar reference guide",
  },
  {
    slug: "institutional-vs-retail",
    title: "Wholesale vs Retail Kilo Bar Purchasing",
    description:
      "Understanding the differences between wholesale and retail silver bar markets and their implications.",
    excerpt:
      "Learn how market structure affects kilo bar quality, pricing, and resale value for retail investors.",
    category: "Market",
    monexLink: "https://www.monex.com/investing-in-silver/",
    monexAnchorText: "Monex overview of investing in silver",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Kilo Silver Bars in Your Portfolio",
    description:
      "Strategic considerations for incorporating kilo silver bars into a diversified investment portfolio.",
    excerpt:
      "Discover how kilo bars fit into portfolio diversification strategies for individual investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
    monexAnchorText: "Monex analysis of silver investment strategies",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Kilo Silver Bars: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing kilo silver bars, including payment methods, delivery, and settlement.",
    excerpt:
      "Learn what to expect when purchasing your first kilo silver bar, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/silver/",
    monexAnchorText: "Monex silver bullion products",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Kilo Silver Bars",
    description:
      "A high-level overview of tax considerations related to physical silver ownership, including capital gains, state variations, and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical silver investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/investing-in-silver/",
    monexAnchorText: "Monex silver investment resources",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
