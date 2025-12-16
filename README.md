# KiloSilverBars.com

An educational microsite about kilo silver bars (1,000 grams / 32.15 troy ounces) built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of kilo silver bars, including benefits, who buys them, key specifications, and size comparisons
- **Prices Page**: Live silver pricing with spot data and kilo bar calculations, plus educational content about premiums
- **Resources**: 12 in-depth educational articles covering:
  - Understanding Kilo Bar Premiums
  - Size Comparison (1 oz vs 10 oz vs Kilo)
  - Storage Options for Kilo Bars
  - Brand Differences (PAMP, Valcambi, Heraeus, RCM, Perth Mint)
  - Liquidity Considerations
  - Market Dynamics
  - Bid-Ask Spreads
  - Authentication Guide
  - Wholesale vs Retail Markets
  - Portfolio Allocation
  - First-Time Buyers Guide
  - Tax Considerations
- **Where to Buy**: Independent dealer guide with multiple sources and neutrality disclaimer
- **About**: Site mission and editorial independence

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── live-silver-prices/
│   │   └── page.tsx        # Silver prices page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy-kilo-silver-bars/
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGbozSpotCard.tsx        # Kilo bar price card
│   ├── LiveSilverSpotIndexCard.tsx # Spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   └── monexSpot.ts        # Pricing API utilities
└── data/
    ├── resources.ts        # Resource metadata
    ├── qa-content.ts       # Q&A content
    └── article-content.ts  # Article content
```

## API Configuration

This site uses the Monex API for pricing data:

- **Product Symbol**: SBK (1 Kilo Silver Bar)
- **Spot Symbol**: SBSPOT (Silver spot price per troy ounce)

API endpoints:
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=SBK`
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=SBSPOT`

Prices are fetched once per page load (no polling/intervals).

## SEO Features

- Schema.org markup on all pages (WebPage, Article, FAQPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml
- llms.txt for AI crawlers

## Deployment

This site is configured for deployment on Vercel.

## License

All rights reserved.
