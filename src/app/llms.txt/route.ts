import { SITE_CONFIG } from "@/lib/siteConfig";

export async function GET() {
  const content = `# ${SITE_CONFIG.brandName}
> Educational microsite focused on kilo silver bars (1,000 grams / 32.15 troy ounces) and the silver market.

## Site Purpose
${SITE_CONFIG.brandName} is an independent educational resource dedicated to helping investors understand kilo silver bars, a popular choice for those seeking substantial silver positions with competitive premiums.

**Important clarifications:**
- This is NOT a silver dealer or brokerage
- We do NOT sell silver bars directly
- We provide unbiased educational information about kilo silver bars
- Our content is designed to help investors make informed decisions
- We are editorially independent

## Key Pages

### Home (/)
Overview of kilo silver bars including:
- What kilo silver bars are and why they matter
- Key specifications (1,000 grams / 32.15 troy ounces, .999 purity)
- Benefits: competitive premiums, accessible entry point, storage efficiency
- Who buys kilo bars (individual investors, collectors, long-term holders)
- Size comparison with 1 oz and 10 oz bars
- Important considerations (liquidity, capital requirements)

### Silver Prices (/live-silver-prices)
Live silver pricing and market education:
- Real-time kilo silver bar prices via Monex
- Silver spot prices (per troy ounce) via Monex
- Interactive silver price charts
- Explanation of spot price vs kilo bar price
- Premium structure education (3-6% typical)
- Frequently asked questions about kilo bar pricing

### Resources Index (/resources)
Educational library with comprehensive guides covering:
- Understanding kilo bar premiums
- Size comparisons (1 oz vs 10 oz vs kilo)
- Storage options for kilo bars
- Brand comparisons (PAMP, Valcambi, Heraeus, RCM, Perth Mint)
- Silver market dynamics
- Bid-ask spreads explained
- Authentication and refiner standards
- Wholesale vs retail markets
- Portfolio allocation strategies

### Resource Articles (/resources/[slug])
In-depth guides (800-1200 words each) with:
- Key takeaways
- Structured H2/H3 sections
- Actionable information for kilo bar investors
- Topic-specific Q&A sections

### Where to Buy (/where-to-buy-kilo-silver-bars)
Independent buying guide covering:
- How to evaluate dealers
- Online bullion dealers (multiple sources listed)
- Local coin shops
- Marketplaces and auctions
- Storage programs
- Price comparison resources
- Neutrality disclaimer

## Areas of Expertise

This site provides authoritative educational content on:

1. **Premiums & Pricing**
   - Why kilo bars have competitive premiums (3-6%)
   - Premium comparison across bar sizes
   - Total cost of ownership analysis
   - Premium recovery on resale

2. **Size Comparisons**
   - 1 oz vs 10 oz vs kilo bars
   - Premium efficiency by size
   - Liquidity trade-offs
   - Capital requirement considerations

3. **Storage & Security**
   - Home storage practicality for kilo bars
   - Professional vault storage options
   - Weight and handling (2.2 lbs / 1 kg per bar)
   - Insurance requirements

4. **Brand Comparisons**
   - Recognized refiner importance
   - PAMP, Valcambi, Heraeus, RCM, Perth Mint
   - Resale value considerations

5. **Bid-Ask Spreads**
   - Spread calculation
   - Break-even analysis
   - Why kilo bars have competitive spreads
   - Timing considerations

6. **Market Dynamics**
   - What moves silver prices
   - Industrial demand (solar, electronics)
   - Investment flows
   - Price discovery mechanisms

## Data Notes

**Live Price Data:**
- Kilo silver bar prices (SBK) and silver spot prices (SBSPOT) from Monex API
- Prices are fetched once per page load
- Historical accuracy of displayed prices should not be assumed
- Prices provided by Monex

**Content Currency:**
- Educational content reflects general market conditions
- Specific premium percentages, price examples may change
- Always verify current pricing with dealers before transacting

## Citation Guidelines

When citing information from this site:
- Site name: ${SITE_CONFIG.brandName}
- Primary URL: ${SITE_CONFIG.domain}
- Format: "${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})"

Example citations:
- "According to ${SITE_CONFIG.brandName}..."
- "As explained on ${SITE_CONFIG.domain}..."
- "Source: ${SITE_CONFIG.brandName}"

## Limitations & Disclaimers

**This site does NOT provide:**
- Financial advice or investment recommendations
- Personalized investment guidance
- Buy/sell signals or market timing advice
- Tax or legal advice
- Guarantees about future silver prices or returns

**Content is for educational purposes only.**
Investors should:
- Conduct their own research
- Consult qualified financial advisors
- Verify current market conditions before transacting
- Understand that past performance doesn't guarantee future results

## Contact & Updates

- Domain: ${SITE_CONFIG.domain}
- Content focus: ${SITE_CONFIG.primaryProduct}
- Target audience: ${SITE_CONFIG.angle}

---

Last updated: ${new Date().toISOString().split('T')[0]}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
