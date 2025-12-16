import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live kilo silver bar prices):
 * - {{BAR_PRICE}}                 -> "$1,100" (ask price, no tilde)
 * - {{CAPITAL_REQUIREMENT}}       -> "~$1,100" (ask price rounded)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$1,000–$1,200" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$1,100+" (ask price with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$1,100+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a kilo silver bar?",
    answer: "A kilo silver bar weighs exactly 1,000 grams (32.15 troy ounces), or about 2.2 pounds. The metric kilogram is an internationally recognized standard, ensuring global acceptance and consistent pricing.",
  },
  {
    question: "Why do kilo silver bars have competitive premiums?",
    answer: "Kilo bars typically carry premiums of 3-6% over spot—better than 1 oz bars (5-15%) or 10 oz bars (4-8%). Manufacturing one kilo bar costs less per ounce than producing 32 individual pieces, and that efficiency passes to buyers.",
  },
  {
    question: "How much capital do I need to buy a kilo silver bar?",
    answer: "A single kilo silver bar currently costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premium. This makes kilo bars accessible for individual investors seeking substantial silver positions.",
  },
  {
    question: "Are kilo silver bars easy to sell?",
    answer: "Yes. The kilogram is an international standard, so established dealers worldwide maintain ready markets for kilo bars from recognized refiners. Liquidity is strong, though slightly less immediate than 1 oz formats.",
  },
  {
    question: "How do I store kilo silver bars safely?",
    answer: "Kilo bars fit easily in most home safes at just 2.2 pounds each. For larger holdings, professional vault storage is available. Either way, document serial numbers and keep purchase records for insurance and resale.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and kilo silver bar prices?",
    answer: "The kilo bar price equals spot price × 32.15 troy ounces, plus a premium (typically 3-6%). At current prices, that's approximately {{CAPITAL_REQUIREMENT}} per bar—a competitive premium compared to smaller formats.",
  },
  {
    question: "Why do kilo bar premiums vary between dealers?",
    answer: "Premiums vary based on dealer overhead, inventory levels, and sourcing. Bars from top refiners (PAMP, Valcambi) may trade slightly higher than generic bars. Always compare several dealers before buying.",
  },
  {
    question: "How does the bid-ask spread affect my kilo bar investment?",
    answer: "Kilo bars typically have 2-4% spreads. On a {{CAPITAL_REQUIREMENT}} bar, that's real money. Your silver must appreciate by the full spread before you break even on a round-trip transaction.",
  },
  {
    question: "Do kilo bars have lower premiums than 10 oz bars?",
    answer: "Yes. Kilo bars typically run 3-6% over spot; 10 oz bars run 4-8%. The savings add up when building meaningful positions over time.",
  },
  {
    question: "When is the best time to buy kilo silver bars based on pricing?",
    answer: "Buy during calm markets when premiums sit at normal levels (3-6%). Avoid crisis-driven spikes when retail premiums can temporarily surge well above normal.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your kilo silver bar resources cover?",
    answer: "Our guides cover premiums, size comparisons, storage, brand comparisons (PAMP, Valcambi, Heraeus, RCM), market dynamics, bid-ask spreads, authentication, and portfolio allocation—everything you need to make informed kilo bar decisions.",
  },
  {
    question: "Are kilo silver bars better than smaller bars?",
    answer: "It depends on your goals. Kilo bars offer better premiums; smaller bars offer more flexibility for partial sales. Many investors use kilo bars for core holdings and keep some smaller bars for liquidity.",
  },
  {
    question: "Which brands of kilo silver bars are most recognized?",
    answer: "PAMP Suisse, Valcambi, Heraeus, Royal Canadian Mint, and Perth Mint are top choices. These refiners meet strict purity standards and their bars trade with better liquidity and resale values.",
  },
  {
    question: "How do kilo silver bars compare to silver ETFs?",
    answer: "Kilo bars give you direct ownership—no counterparty risk. ETFs are convenient but represent claims on silver held by others. For tangible assets outside the financial system, physical bars are the clear choice.",
  },
  {
    question: "What should I look for when buying my first kilo silver bar?",
    answer: "Choose a recognized refiner, verify dealer reputation, compare premiums from multiple sources, ensure you receive proper documentation (weight certification, serial number), and have storage arranged before purchase.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a kilo silver bar?",
      answer: "Recognized refiners' kilo bars typically carry 3-6% premiums over spot—better than 1 oz bars (5-15%) or 10 oz bars (4-8%). Premiums may rise during supply constraints but remain competitive relative to smaller formats.",
    },
    {
      question: "How much can I save by buying kilo bars instead of 1 oz bars?",
      answer: "Substantial savings. Buying 32 individual 1 oz bars at 10% premium costs significantly more than one kilo bar at 4% premium. Expect to save $50-$100+ per kilo bar equivalent.",
    },
    {
      question: "Do I recover the premium when I sell my kilo silver bar?",
      answer: "Not fully, but kilo bars from recognized refiners have competitive bid-ask spreads. The combination of lower purchase premiums and reasonable spreads makes kilo bars economically efficient over the ownership cycle.",
    },
  ],
  "size-comparison": [
    {
      question: "How much money do I save buying a kilo bar instead of equivalent smaller bars?",
      answer: "With 1 oz bars at 10% premium and kilo bars at 4%, you save roughly 6% on silver value. On a {{CAPITAL_REQUIREMENT}} purchase, that's $50-$70 in real savings.",
    },
    {
      question: "When should I choose kilo bars over smaller sizes?",
      answer: "Choose kilo bars when you have {{LIQUIDITY_THRESHOLD}}+ to deploy, don't need very small partial liquidations, and have storage arranged. The premium savings outweigh reduced flexibility for most buy-and-hold investors.",
    },
    {
      question: "Can I mix kilo bars with smaller bars in my portfolio?",
      answer: "Absolutely. Many investors use kilo bars for core holdings (premium efficiency) and keep some 1 oz or 10 oz bars as a liquidity reserve for potential partial sales.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for kilo silver bars?",
      answer: "Most kilo bar owners use home safes—the bars weigh just 2.2 lbs and fit easily. For larger collections, professional vault storage with allocated segregation offers institutional-grade security.",
    },
    {
      question: "Can I store kilo silver bars at home?",
      answer: "Yes. At 2.2 pounds and {{CAPITAL_REQUIREMENT}} per bar, kilo bars are practical for home safes with basic security measures. Many investors successfully store multiple bars at home.",
    },
    {
      question: "What are typical costs for professional kilo bar storage?",
      answer: "Vault storage runs 0.3-0.5% of value annually. For one kilo bar, that's roughly $5-$10/year. Home storage eliminates these costs if you have adequate security.",
    },
  ],
  "brand-differences": [
    {
      question: "Which kilo bar brands are most recognized globally?",
      answer: "PAMP Suisse, Valcambi, Heraeus, Royal Canadian Mint, and Perth Mint lead the market. These accredited refiners meet strict standards; their bars trade globally with excellent liquidity.",
    },
    {
      question: "Do different kilo bar brands have different premiums?",
      answer: "Differences are modest at the kilo size. PAMP's distinctive design may command a slight premium. The key is choosing any recognized refiner—brand matters less than accreditation.",
    },
    {
      question: "What security features do kilo bars have?",
      answer: "Major refiners include serial numbers, weight stamps, hallmarks, and purity markings (.999 fine). Some, like PAMP, add assay certificates and proprietary security features.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a kilo silver bar?",
      answer: "Same-day to 1-3 business days through established dealers. The international kilogram standard ensures global acceptance. Complete documentation speeds the process.",
    },
    {
      question: "Will I get a worse price selling a kilo bar than smaller bars?",
      answer: "Not necessarily. Kilo bars from recognized refiners have competitive spreads due to broad dealer acceptance and international standardization. Documentation helps achieve strong resale prices.",
    },
    {
      question: "What if I only need to liquidate part of my silver holdings?",
      answer: "This is the key trade-off: you can't partially sell one bar. If you need $500 but hold only one kilo bar ({{CAPITAL_REQUIREMENT_PLUS}}), you must sell it all or find other liquidity. Keep some smaller bars if partial sales may be needed.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Industrial demand (solar, electronics), investment flows, dollar strength, interest rates, and mining supply all move prices. Unlike gold, silver's significant industrial use creates unique price dynamics.",
    },
    {
      question: "How do commodity markets affect kilo silver bar values?",
      answer: "Exchange-traded silver prices set the benchmark for all physical products. Kilo bars track these prices closely, benefiting from efficient global price discovery.",
    },
    {
      question: "Do kilo bar premiums change with market conditions?",
      answer: "Yes, but less dramatically than smaller formats. During retail demand surges, 1 oz premiums might spike while kilo premiums stay relatively stable—another advantage of the format.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for kilo silver bars?",
      answer: "Spreads of 2-4% from recognized refiners are competitive. If a dealer quotes significantly wider, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a kilo bar?",
      answer: "Add purchase premium to expected selling discount. Pay 4% over spot, sell 1% below spot = need 5% appreciation to break even. On a {{CAPITAL_REQUIREMENT}} bar, that's roughly $50 in price movement.",
    },
    {
      question: "Do spreads vary by kilo bar brand?",
      answer: "Yes. Recognized brands trade with tighter spreads due to instant recognition. Generic bars may face wider spreads or require extra authentication.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a kilo silver bar is authentic?",
      answer: "Weigh on a calibrated scale, verify serial documentation, examine hallmarks for precision, and check refiner markings. For secondary market bars, consider professional XRF testing.",
    },
    {
      question: "What security features should I look for on kilo bars?",
      answer: "Precision-stamped weight and purity, unique serial number, refiner hallmark, and documentation. Any inconsistency warrants professional verification before purchase.",
    },
    {
      question: "Should I have kilo bars professionally authenticated?",
      answer: "For secondary market purchases or incomplete documentation, yes. XRF testing is non-destructive and inexpensive relative to bar value. It provides peace of mind.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What refiner accreditation matters for kilo bars?",
      answer: "LBMA accreditation ensures strict quality standards. Bars from accredited refiners are accepted globally without extra verification, maximizing liquidity and resale value.",
    },
    {
      question: "Are retail kilo bars different from wholesale silver?",
      answer: "No. Kilo bars from recognized refiners are identical quality throughout the supply chain. There's no 'retail grade'—proper dealers sell refiner-quality silver.",
    },
    {
      question: "Can I buy silver at wholesale pricing?",
      answer: "Not exactly, but kilo bars get you closer to wholesale economics than smaller formats. Building dealer relationships may improve your pricing over time.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in kilo silver bars?",
      answer: "Conventional guidance suggests 5-15% in precious metals overall. Kilo bars make sense when your silver allocation exceeds $1,000-$5,000, where premium efficiency becomes meaningful.",
    },
    {
      question: "Should I buy kilo bars all at once or over time?",
      answer: "Both work. Bulk purchases may get better per-bar pricing; dollar-cost averaging reduces timing risk. Many investors simply buy as capital becomes available.",
    },
    {
      question: "How do kilo bars fit with other silver investments like ETFs?",
      answer: "Different tools for different purposes. ETFs offer liquidity but carry counterparty risk. Kilo bars provide direct ownership outside the financial system. Many investors use both.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a kilo silver bar?",
      answer: "Research dealers, compare premiums, place order, pay, await delivery. Most transactions complete within a few days. Simple process, but compare prices first.",
    },
    {
      question: "What payment methods are accepted for kilo bar purchases?",
      answer: "Most dealers accept cards, bank transfers, and checks. Credit cards add convenience at slightly higher prices. Bank transfers often get better pricing.",
    },
    {
      question: "Why do kilo bar prices vary between dealers?",
      answer: "Different overhead, sourcing relationships, and margins. Always compare several dealers before buying—price differences are real.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical silver taxed when sold?",
      answer: "Physical silver is classified as a collectible. Capital gains tax applies on profitable sales. Rates depend on holding period and income. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a kilo silver bar?",
      answer: "Varies by state. Some exempt precious metals entirely; others tax at standard rates; some have threshold exemptions. Know your state's rules—it affects total cost.",
    },
    {
      question: "Can I hold kilo silver bars in an IRA?",
      answer: "Yes, if they meet purity requirements and are held by an approved custodian. Tax advantages come with custodian fees and no personal possession while in the account.",
    },
  ],
};
