import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$1,000" (ask price × 32.15 oz rounded to $50)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$950–$1,100" (ask ± 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$1,000+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$1,000+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a kilo silver bar?",
    answer: "A kilo silver bar weighs exactly 1,000 grams, which equals approximately 32.15 troy ounces. This makes it roughly 2.2 pounds (1 kilogram), making it highly portable while representing substantial silver value. The metric kilogram is an international standard recognized globally.",
  },
  {
    question: "Why do kilo silver bars have competitive premiums?",
    answer: "Kilo bars offer premiums typically in the 3-6% range over spot, which is competitive compared to 1 oz bars (5-15%). This efficiency comes from spreading manufacturing costs across more silver content. Producing one kilo bar is more efficient than producing 32 individual 1 oz bars, reducing per-ounce production and handling costs.",
  },
  {
    question: "How much capital do I need to buy a kilo silver bar?",
    answer: "At current silver prices, a single kilo silver bar costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. This accessible price point makes kilo bars suitable for individual investors looking to build meaningful silver positions without the substantial capital required by larger institutional formats.",
  },
  {
    question: "Are kilo silver bars easy to sell?",
    answer: "Yes, kilo bars are widely recognized and liquid. The kilogram is an international standard, so these bars are accepted by dealers worldwide. Most established bullion dealers maintain ready markets for kilo bars from recognized refiners. While slightly less liquid than 1 oz bars, kilo bars sell readily through proper channels.",
  },
  {
    question: "How do I store kilo silver bars safely?",
    answer: "Kilo bars are practical for home storage given their manageable 2.2 lb weight. Most home safes can accommodate multiple kilo bars. For larger collections, professional vault storage remains an option. Key considerations include security, insurance, and proper documentation of serial numbers and purchase records.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and kilo silver bar prices?",
    answer: "The kilo bar price equals the spot price multiplied by 32.15 troy ounces, plus a premium (typically 3-6%). The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This represents competitive premium efficiency compared to smaller bar sizes.",
  },
  {
    question: "Why do kilo bar premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Brand differences also matter, as bars from top-tier refiners like PAMP or Valcambi may trade differently than lesser-known sources. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my kilo bar investment?",
    answer: "The bid-ask spread on kilo bars is typically competitive, around 2-4%. With a {{CAPITAL_REQUIREMENT}} bar, the spread represents meaningful dollars. Understanding spreads is important because your silver must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do kilo bars have lower premiums than 10 oz bars?",
    answer: "Yes, kilo bars typically offer slightly lower per-ounce premiums than 10 oz bars (which run 4-8% over spot). The premium savings become meaningful when building substantial positions. Purchasing a kilo bar instead of equivalent smaller bars can save meaningful amounts on each purchase.",
  },
  {
    question: "When is the best time to buy kilo silver bars based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-6% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand. For purchases, patience during normal market conditions typically yields better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your kilo silver bar resources cover?",
    answer: "Our educational library covers all aspects of kilo bar investing including: understanding premiums, size comparisons (1 oz vs 10 oz vs kilo), storage options, brand comparisons (PAMP, Valcambi, Heraeus, RCM, etc.), silver market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "Are kilo silver bars better than smaller bars?",
    answer: "Neither is universally better; each serves different investor needs. Kilo bars excel in premium efficiency and are ideal for building meaningful positions. Smaller bars offer maximum flexibility for partial liquidation. Many investors combine sizes, using kilo bars for core holdings and smaller bars for flexibility.",
  },
  {
    question: "Which brands of kilo silver bars are most recognized?",
    answer: "Top-tier brands include PAMP Suisse, Valcambi, Heraeus, Royal Canadian Mint, Perth Mint, and other accredited refiners. These bars meet strict purity and weight standards. Bars from recognized refiners are accepted globally and typically command better resale values.",
  },
  {
    question: "How do kilo silver bars compare to silver ETFs?",
    answer: "Kilo bars provide direct physical ownership with no counterparty risk—you hold the actual metal. Silver ETFs offer convenience and easy trading but represent claims on silver held by third parties. For investors seeking tangible assets outside the financial system, kilo bars provide direct ownership that ETFs cannot match.",
  },
  {
    question: "What should I look for when buying my first kilo silver bar?",
    answer: "For first-time kilo bar buyers: choose recognized refiners, verify the dealer's reputation, compare premiums across multiple sources, ensure full documentation including weight certification and serial number, and plan your storage solution before purchasing.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a kilo silver bar?",
      answer: "Typical premiums for kilo silver bars from recognized refiners range from 3-6% over spot under normal market conditions. This is better than 1 oz bars (5-15%) or 10 oz bars (4-8%). During supply constraints, premiums can temporarily rise, but kilo bars maintain competitive premiums.",
    },
    {
      question: "How much can I save by buying kilo bars instead of 1 oz bars?",
      answer: "The savings are meaningful. Purchasing silver as 32 individual 1 oz bars (10% average premium) costs significantly more than the same silver content as a kilo bar (4% premium). On a typical purchase, you might save $50-$100 or more by choosing the kilo format.",
    },
    {
      question: "Do I recover the premium when I sell my kilo silver bar?",
      answer: "You typically don't recover the full premium on resale, but kilo bars from recognized refiners have reasonable bid-ask spreads. The combination of competitive purchase premiums and reasonable spreads makes kilo bars economically efficient.",
    },
  ],
  "size-comparison": [
    {
      question: "How much money do I save buying a kilo bar instead of equivalent smaller bars?",
      answer: "Premium savings are meaningful. If 1 oz bars carry 10% premiums and kilo bars carry 4%, you save approximately 6% on the silver value. On a {{CAPITAL_REQUIREMENT}} purchase, that could be $50-$70 in savings per bar.",
    },
    {
      question: "When should I choose kilo bars over smaller sizes?",
      answer: "Choose kilo bars when you have capital to deploy ({{LIQUIDITY_THRESHOLD}}+), have a reasonable investment horizon, don't anticipate needing very small partial liquidations, want competitive premium efficiency, and have storage arranged. The premium savings justify reduced flexibility for investors meeting these criteria.",
    },
    {
      question: "Can I mix kilo bars with smaller bars in my portfolio?",
      answer: "Yes, many investors combine sizes strategically. A common approach: use kilo bars for core holdings to maximize premium efficiency, then maintain smaller bars (1 oz or 10 oz) as a liquidity reserve for potential partial sales. This captures the benefits of both approaches.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for kilo silver bars?",
      answer: "Kilo bars are practical for home storage given their 2.2 lb weight and {{CAPITAL_REQUIREMENT}} value per bar. A quality home safe can accommodate multiple kilo bars. For larger collections, professional vault storage with allocated segregation provides institutional-grade security.",
    },
    {
      question: "Can I store kilo silver bars at home?",
      answer: "Yes, home storage is very practical for kilo bars. At 2.2 pounds per bar, they're manageable to handle and most home safes can easily accommodate them. The value concentration is meaningful but manageable with basic security measures.",
    },
    {
      question: "What are typical costs for professional kilo bar storage?",
      answer: "Professional vault storage typically costs 0.3-0.5% of value annually for silver. For a single kilo bar, expect $5-$10 per year. Many facilities offer lower rates for larger holdings. Home storage eliminates these costs if you have adequate security.",
    },
  ],
  "brand-differences": [
    {
      question: "Which kilo bar brands are most recognized globally?",
      answer: "Top brands include PAMP Suisse, Valcambi, Heraeus, Royal Canadian Mint, Perth Mint, and similar accredited refiners. These bars meet strict standards and are accepted by dealers worldwide.",
    },
    {
      question: "Do different kilo bar brands have different premiums?",
      answer: "Premium differences between major recognized brands are typically modest at the kilo size. PAMP bars with their distinctive design may carry slight premiums over generic bars. The key criterion is choosing recognized refiners.",
    },
    {
      question: "What security features do kilo bars have?",
      answer: "Kilo silver bars from major refiners include: unique serial numbers, weight stamps, refiner hallmarks, and purity markings (.999 fine typical). Some refiners like PAMP include additional security features and assay certificates.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a kilo silver bar?",
      answer: "Kilo bars from recognized refiners can typically be sold same-day or within 1-3 business days through established dealers. The international kilogram standard ensures global acceptance. Having full documentation expedites the process.",
    },
    {
      question: "Will I get a worse price selling a kilo bar than smaller bars?",
      answer: "Not necessarily. Kilo bars from recognized refiners have competitive percentage spreads due to their international standard and broad dealer acceptance. Properly documented bars from top brands achieve strong resale prices.",
    },
    {
      question: "What if I only need to liquidate part of my silver holdings?",
      answer: "This is the key liquidity trade-off with kilo bars: you cannot partially liquidate a single bar. If you hold one kilo bar and need $500, you must sell the entire bar ({{CAPITAL_REQUIREMENT_PLUS}}) or seek other liquidity sources. Investors anticipating partial liquidation needs often maintain some smaller bars alongside kilo holdings.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Silver prices respond to multiple factors: industrial demand (solar panels, electronics), investment flows, dollar strength (inverse relationship), interest rates, and supply dynamics from mining. Unlike gold, silver has significant industrial applications that affect its price behavior.",
    },
    {
      question: "How do commodity markets affect kilo silver bar values?",
      answer: "Commodity exchange silver prices provide the benchmark for physical bar pricing. This creates efficient price discovery for all silver formats including kilo bars. The global commodity infrastructure ensures consistent pricing.",
    },
    {
      question: "Do kilo bar premiums change with market conditions?",
      answer: "Yes, though typically less dramatically than for 1 oz coins. During retail demand surges, small format premiums might spike significantly, while kilo premiums remain more stable. Premium stability is another advantage of the kilo format.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for kilo silver bars?",
      answer: "Under normal market conditions, spreads of 2-4% for kilo bars from recognized refiners represent competitive pricing. This is reasonable compared to smaller bars. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a kilo bar?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 4% over spot and expect to receive 1% below spot when selling, you need 5% silver appreciation to break even. On a {{CAPITAL_REQUIREMENT}} bar, that's approximately $50 in silver price movement.",
    },
    {
      question: "Do spreads vary by kilo bar brand?",
      answer: "Yes, recognized brands from major refiners trade with tighter spreads due to instant recognition and broad acceptance. Generic or lesser-known bars may face wider spreads or require additional authentication.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a kilo silver bar is authentic?",
      answer: "Key verification methods: confirm the bar matches stated weight (use a calibrated scale), verify serial number documentation, examine hallmarks and stamps for precision, check for proper refiner markings. For secondary market purchases, consider professional XRF testing.",
    },
    {
      question: "What security features should I look for on kilo bars?",
      answer: "Look for: precision-stamped weight and purity marks, unique serial number, refiner logo/hallmark, and proper documentation. Some refiners like PAMP include assay certificates. Any inconsistency in weight, markings, or documentation should trigger professional verification.",
    },
    {
      question: "Should I have kilo bars professionally authenticated?",
      answer: "For secondary market purchases or bars without complete documentation, professional authentication is worthwhile. XRF testing verifies silver content non-destructively. The cost is modest compared to the bar's value and provides peace of mind.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What refiner accreditation matters for kilo bars?",
      answer: "LBMA (London Bullion Market Association) accreditation and similar standards ensure refiners meet strict quality requirements. Bars from accredited refiners are accepted globally without additional verification, maximizing liquidity and resale value.",
    },
    {
      question: "Are retail kilo bars different from wholesale silver?",
      answer: "Kilo bars from recognized refiners are the same quality products used throughout the precious metals supply chain. There is no 'retail grade' distinction. Retail investors buying from proper sources own refiner-quality silver.",
    },
    {
      question: "Can I buy silver at wholesale pricing?",
      answer: "Retail investors pay somewhat higher premiums than large wholesale buyers due to smaller order sizes. However, kilo bars get you closer to wholesale economics than smaller formats. Building relationships with dealers may improve your pricing over time.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in kilo silver bars?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier. The specific allocation to silver vs gold depends on your outlook and objectives. Kilo bars are appropriate when your silver allocation exceeds $1,000-$5,000, making premium efficiency valuable.",
    },
    {
      question: "Should I buy kilo bars all at once or over time?",
      answer: "Both approaches have merit. Purchasing several bars at once may capture better per-bar pricing. Dollar-cost averaging reduces timing risk. For kilo bars, many investors make periodic purchases as capital becomes available.",
    },
    {
      question: "How do kilo bars fit with other silver investments like ETFs?",
      answer: "Kilo bars and silver ETFs serve different purposes. ETFs offer liquidity and easy trading but carry counterparty risk. Kilo bars provide direct ownership outside the financial system but are less liquid. Many investors use ETFs for trading and kilo bars for core physical holdings.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a kilo silver bar?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order, completing payment, and arranging delivery or pickup. Most transactions complete within a few days.",
    },
    {
      question: "What payment methods are accepted for kilo bar purchases?",
      answer: "Most dealers accept credit cards, debit cards, bank transfers, and personal checks for kilo bar purchases. Credit card convenience comes with slightly higher prices to offset processing fees. Bank transfers often qualify for better pricing.",
    },
    {
      question: "Why do kilo bar prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical silver taxed when sold?",
      answer: "Physical silver is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates depend on holding period, income level, and current tax legislation. Consult a tax professional for guidance on your specific situation.",
    },
    {
      question: "Do I pay sales tax when buying a kilo silver bar?",
      answer: "Sales tax treatment varies significantly by state. Some states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules before purchasing can affect your total cost.",
    },
    {
      question: "Can I hold kilo silver bars in an IRA?",
      answer: "Certain IRAs can hold physical silver including qualifying kilo bars. The silver must meet purity requirements and be held by an approved custodian. IRA ownership provides tax-advantaged treatment but involves custodian fees and prevents personal possession while in the account.",
    },
  ],
};
