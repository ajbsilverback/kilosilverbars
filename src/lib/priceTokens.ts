/**
 * Dynamic Price Token System
 * 
 * Allows FAQ/content authors to use tokens like {{CAPITAL_REQUIREMENT}} 
 * instead of hard-coded dollar amounts. Tokens are replaced with live
 * values from the pricing API at render time.
 * 
 * IMPORTANT: This system is designed to be reusable across sites.
 * To adapt for a different product, only change siteConfig.ts - 
 * the tokens and content remain the same.
 */

import { ProductSpotSummary } from "./monexSpot";
import { SITE_CONFIG } from "./siteConfig";

/**
 * Configuration for price display
 */
export interface PriceTokenConfig {
  /** Premium band percentage for range calculations (default 5%) */
  premiumBandPercent?: number;
  /** Rounding increment in dollars (default 100) */
  roundingIncrement?: number;
}

const DEFAULT_CONFIG: Required<PriceTokenConfig> = {
  premiumBandPercent: 5,
  roundingIncrement: 100,
};

/**
 * Rounds a number to the nearest increment
 */
function roundToNearest(value: number, increment: number): number {
  return Math.round(value / increment) * increment;
}

/**
 * Formats a price value for display (e.g., "~$1,100")
 */
function formatPrice(value: number, prefix: string = "~"): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
  return `${prefix}${formatted}`;
}

/**
 * Token types supported by the system
 * 
 * Kilo bar tokens (based on SBK ask price ~$1,100):
 * - BAR_PRICE: $1,100 (kilo bar ask price)
 * - CAPITAL_REQUIREMENT: ~$1,100 (kilo bar ask price rounded)
 * - CAPITAL_REQUIREMENT_RANGE: ~$1,000–$1,200 (kilo bar ± 5%)
 * - CAPITAL_REQUIREMENT_PLUS: ~$1,100+ (kilo bar with plus)
 * - LIQUIDITY_THRESHOLD: ~$1,100+ (same as plus)
 * 
 * Comparison bar tokens (calculated from spot = kiloAsk / 32.15):
 * - ONE_OZ_BAR_PRICE_RANGE: $32–$38 (spot × 1.05 to spot × 1.15)
 * - TEN_OZ_BAR_PRICE_RANGE: $330–$360 (spot × 10 × 1.04 to spot × 10 × 1.08)
 */
export type PriceTokenType = 
  | "BAR_PRICE"                     // $1,100 (kilo bar ask price, no tilde)
  | "CAPITAL_REQUIREMENT"           // ~$1,100 (kilo bar ask price rounded)
  | "CAPITAL_REQUIREMENT_RANGE"     // ~$1,000–$1,200 (kilo bar ± premium band)
  | "CAPITAL_REQUIREMENT_PLUS"      // ~$1,100+ (kilo bar with plus)
  | "LIQUIDITY_THRESHOLD"           // ~$1,100+ (same as plus, for liquidity context)
  | "ONE_OZ_BAR_PRICE_RANGE"        // $32–$38 (1 oz bar with 5-15% premium)
  | "TEN_OZ_BAR_PRICE_RANGE";       // $330–$360 (10 oz bar with 4-8% premium)

/**
 * Regex pattern to match tokens in strings
 * Matches: {{TOKEN_NAME}}
 */
const TOKEN_PATTERN = /\{\{(BAR_PRICE|CAPITAL_REQUIREMENT|CAPITAL_REQUIREMENT_RANGE|CAPITAL_REQUIREMENT_PLUS|LIQUIDITY_THRESHOLD|ONE_OZ_BAR_PRICE_RANGE|TEN_OZ_BAR_PRICE_RANGE)\}\}/g;

/**
 * Resolves a single token to its display value
 */
export function resolveToken(
  tokenType: PriceTokenType,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  const { premiumBandPercent, roundingIncrement } = { ...DEFAULT_CONFIG, ...config };

  // If no price data available, return a sensible fallback
  if (!priceData || priceData.ask <= 0) {
    return "current market price";
  }

  const askPrice = priceData.ask;
  const roundedAsk = roundToNearest(askPrice, roundingIncrement);
  
  // Derive spot price from kilo bar price (kilo = 32.15 troy oz)
  const spotPricePerOz = askPrice / SITE_CONFIG.troyOunces;

  switch (tokenType) {
    case "BAR_PRICE":
      return formatPrice(roundedAsk, ""); // No tilde prefix for BAR_PRICE

    case "CAPITAL_REQUIREMENT":
      return formatPrice(roundedAsk);

    case "CAPITAL_REQUIREMENT_RANGE": {
      const lowBound = roundToNearest(askPrice * (1 - premiumBandPercent / 100), roundingIncrement);
      const highBound = roundToNearest(askPrice * (1 + premiumBandPercent / 100), roundingIncrement);
      return `${formatPrice(lowBound)}–${formatPrice(highBound).replace("~", "")}`;
    }

    case "CAPITAL_REQUIREMENT_PLUS":
    case "LIQUIDITY_THRESHOLD":
      return `${formatPrice(roundedAsk)}+`;

    // 1 oz bar: spot price + 5-15% premium, rounded to nearest $5
    case "ONE_OZ_BAR_PRICE_RANGE": {
      const oneOzLow = roundToNearest(spotPricePerOz * 1.05, 5);
      const oneOzHigh = roundToNearest(spotPricePerOz * 1.15, 5);
      return `$${oneOzLow}–$${oneOzHigh}`;
    }

    // 10 oz bar: (spot × 10) + 4-8% premium, rounded to nearest $10
    case "TEN_OZ_BAR_PRICE_RANGE": {
      const tenOzBase = spotPricePerOz * 10;
      const tenOzLow = roundToNearest(tenOzBase * 1.04, 10);
      const tenOzHigh = roundToNearest(tenOzBase * 1.08, 10);
      return `$${tenOzLow}–$${tenOzHigh}`;
    }

    default:
      return "current market price";
  }
}

/**
 * Replaces all tokens in a string with their resolved values
 * 
 * @param text - The string containing tokens (e.g., "Costs {{CAPITAL_REQUIREMENT}}")
 * @param priceData - The fetched price data (or null if unavailable)
 * @param config - Optional configuration for formatting
 * @returns The string with all tokens replaced
 */
export function replaceTokens(
  text: string,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {}
): string {
  return text.replace(TOKEN_PATTERN, (match, tokenType: PriceTokenType) => {
    return resolveToken(tokenType, priceData, config);
  });
}

/**
 * Checks if a string contains any price tokens
 */
export function hasTokens(text: string): boolean {
  TOKEN_PATTERN.lastIndex = 0; // Reset regex state
  return TOKEN_PATTERN.test(text);
}

/**
 * Gets all tokens found in a string
 */
export function findTokens(text: string): PriceTokenType[] {
  const tokens: PriceTokenType[] = [];
  let match;
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[1] as PriceTokenType);
  }
  return tokens;
}
