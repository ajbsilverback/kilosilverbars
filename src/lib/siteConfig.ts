/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for KiloSilverBars.com
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.kilosilverbars.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.kilosilverbars.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "Kilo Silver Bars",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "kilo silver bars",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "silver",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "bars",
  
  /** Size or series identifier */
  sizeOrSeries: "1 kilo",

  /** Troy ounce equivalent (1 kilo = 32.15 troy ounces) */
  troyOunces: 32.15,

  /** Gram weight */
  grams: 1000,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * SBK = 1 Kilo Silver Bar
   */
  productSymbol: "SBK",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price per troy ounce)
   * SBSPOT = Silver Spot Price
   */
  spotSymbol: "SBSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "individual investors and collectors seeking an accessible entry point to substantial silver ownership with competitive premiums",

  /** Approved Monex.com links for authoritative references */
  monexLinks: {
    /** Silver bars product page */
    productPage: "https://www.monex.com/silver/",
    /** Silver spot prices */
    spotPrices: "https://www.monex.com/silver-prices/",
    /** Investing in silver overview */
    investingOverview: "https://www.monex.com/investing-in-silver/",
    /** Silver price charts */
    priceCharts: "https://www.monex.com/silver-prices/",
    /** Silver knowledge base */
    knowledgeBase: "https://www.monex.com/knowledge-base/silver-investing/silver-bullion/",
    /** Educational articles */
    articles: {
      bullionHistory: "https://www.monex.com/knowledge/great-bullion-famine-bullionism-and-bullionist-controversy/",
      investingInSilver: "https://www.monex.com/investing-in-silver/",
      silverBars: "https://www.monex.com/silver/",
      storageAndCare: "https://www.monex.com/knowledge-base/silver-investing/",
    },
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
