import projectHliquity from "@/assets/project-hliquity.jpg";
import projectDchf from "@/assets/project-dchf.jpg";
import projectDefi from "@/assets/project-defi.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "hliquity-defi-borrowing-hedera",
    title: "How Interest-Free Borrowing Works on HLiquity",
    excerpt: "A deep dive into HLiquity's revolutionary borrowing mechanism on the Hedera network—interest-free loans backed by HBAR, issuing HCHF stablecoins.",
    content: `
# How Interest-Free Borrowing Works on HLiquity

HLiquity represents a paradigm shift in decentralised finance. Built on the Hedera network, it enables users to borrow against their HBAR holdings without paying ongoing interest—a model that challenges traditional lending norms.

## The Core Mechanism

HLiquity is a fork of the well-established Liquity Protocol on Ethereum, adapted for Hedera's high-throughput, low-cost infrastructure. Instead of charging interest, HLiquity applies a one-time borrowing fee when a loan is opened.

### How It Works

Users deposit HBAR as collateral into a "Trove" and can borrow HCHF—a stablecoin pegged to the Swiss Franc—against it. The minimum collateral ratio is 110%, meaning for every 100 CHF worth of HCHF borrowed, at least 110 CHF worth of HBAR must be locked.

### Key Features

- **Interest-Free**: No ongoing interest charges on loans
- **Low Collateral Ratio**: Minimum 110% vs. 150%+ on many DeFi platforms
- **Immediate Liquidation**: Undercollateralised positions are liquidated instantly
- **Non-Custodial**: Users maintain full control of their assets

## The Stability Pool

The Stability Pool is HLiquity's safety net. HCHF holders can deposit their tokens into the pool to act as liquidators. When a Trove falls below the minimum collateral ratio, the Stability Pool absorbs the debt and receives the collateral at a discount.

### Benefits for Stability Providers

- Earn HBAR from liquidated collateral at a discount
- Receive HLQT token rewards for participating
- Help maintain system stability

## HCHF: The Swiss Franc Stablecoin

HCHF is pegged to the Swiss Franc—a currency recognised for its reliability, stability, and low inflation. This makes HCHF uniquely positioned in the stablecoin landscape, which is dominated by USD-pegged tokens.

### Price Stability Mechanisms

- **Redemption**: HCHF can always be redeemed for HBAR at face value
- **Arbitrage**: Price deviations create arbitrage opportunities that self-correct
- **Collateral Backing**: Every HCHF is overcollateralised by HBAR

## Why Hedera?

Hedera offers several advantages for DeFi protocols:

- **Low Transaction Costs**: Fractions of a cent per transaction
- **High Throughput**: Thousands of transactions per second
- **Energy Efficiency**: Carbon-negative network
- **Enterprise Governance**: Governed by leading global organisations

## The HLQT Token

HLQT is the protocol's incentive token, distributed to Stability Pool providers and ecosystem participants. HLQT stakers earn a share of borrowing and redemption fees.

## Security and Trust

HLiquity has been audited by Omniscia, ensuring the smart contracts meet the highest security standards. The protocol is non-custodial, immutable, and governance-free—no single entity can alter its rules.

## Conclusion

HLiquity brings a proven DeFi model to Hedera with a unique Swiss Franc twist. By combining interest-free borrowing, robust liquidation mechanisms, and a stable currency pegged to one of the world's most trusted fiat currencies, HLiquity opens new possibilities for decentralised finance.
    `,
    author: "Swisscoast Team",
    date: "2024-04-12",
    readTime: "8 min read",
    category: "DEFI",
    image: projectHliquity
  },
  {
    id: "digital-swiss-franc-history",
    title: "The Journey to a Private Digital Swiss Franc",
    excerpt: "From the first dCHF on Ethereum in 2018 to HCHF on Hedera in 2024—how Swisscoast pioneered stable digital Swiss currency.",
    content: `
# The Journey to a Private Digital Swiss Franc

The Swiss Franc has long been a symbol of financial stability and trust. Swisscoast set out to bring those qualities into the decentralised digital world—and succeeded, twice.

## The First dCHF: March 2018

On March 20, 2018, Swisscoast launched the first private digital Swiss franc (dCHF) on the Ethereum blockchain, post block 52911611. This was a landmark moment: a Swiss company creating a digital representation of one of the world's most stable currencies on a public blockchain.

### Why It Mattered

- **First of Its Kind**: No private entity had created a digital Swiss franc before
- **Swiss Precision**: Built with the same commitment to quality that defines Swiss finance
- **Foundation for Future Work**: Proved the concept of fiat-pegged stablecoins from Switzerland

## The Swiss DLT Act

In 2020, the Swiss Parliament ratified the DLT Act, establishing clear legal and regulatory guidelines for blockchain and fintech. This legislation solidified Switzerland's position as a global leader in the blockchain industry and created a favorable environment for projects like Swisscoast's.

## Market Research: Digital Swiss Currency Study

In March 2023, Swisscoast conducted a comprehensive market research study on a digital Swiss Currency together with the Hedera Hashgraph Association. This research explored demand, use cases, and technical requirements for a next-generation Swiss franc stablecoin.

### Key Findings

- Strong demand for a CHF-denominated stablecoin in DeFi
- The Swiss Franc is underrepresented in decentralised finance globally
- Hedera's infrastructure offers ideal properties for stablecoin deployment
- Regulatory clarity in Switzerland provides a competitive advantage

## HCHF: The Evolution on Hedera

Building on years of experience and research, Swisscoast deployed HCHF through the HLiquity protocol on Hedera in 2024. Unlike the original dCHF, HCHF is fully decentralised—generated through overcollateralised borrowing rather than centralised issuance.

### How HCHF Differs from dCHF

- **Decentralised Issuance**: Created through borrowing, not minting by an authority
- **Overcollateralised**: Backed by HBAR at a minimum 110% ratio
- **Self-Stabilising**: Redemption and arbitrage mechanisms maintain the peg
- **Non-Custodial**: No single entity controls the supply

## The Broader Vision

Swisscoast's work on digital Swiss franc solutions is about more than technology. It's about:

- **Diversifying DeFi**: Reducing dependence on USD-pegged stablecoins
- **Swiss Values in Web3**: Bringing stability, precision, and trust to decentralised finance
- **Financial Inclusion**: Making Swiss financial quality accessible globally
- **Sustainability**: Building on energy-efficient blockchain infrastructure

## What's Next

Swisscoast is actively researching how to leverage HLiquity for further innovations. The protocol serves as a foundation for future projects that will continue to bridge traditional Swiss finance with the decentralised digital world.

## Conclusion

From the pioneering dCHF on Ethereum to the fully decentralised HCHF on Hedera, Swisscoast has consistently pushed the boundaries of what's possible with digital currencies. Each step has been guided by the same principles: Swiss quality, financial stability, and a commitment to building a sustainable digital ecosystem.
    `,
    author: "Swisscoast Team",
    date: "2024-03-28",
    readTime: "7 min read",
    category: "STABLECOIN",
    image: projectDchf
  },
  {
    id: "sustainable-blockchain-future",
    title: "Building Sustainable DLT Solutions",
    excerpt: "How Swisscoast combines distributed ledger innovation with environmental responsibility to create zero-carbon blockchain solutions.",
    content: `
# Building Sustainable DLT Solutions

At Swisscoast, sustainability isn't an afterthought—it's a design principle. Every protocol we build, every smart contract we deploy, reflects our commitment to a future where innovation and environmental responsibility go hand in hand.

## The Environmental Challenge of Blockchain

Traditional proof-of-work blockchains consume enormous amounts of energy. Bitcoin alone uses more electricity than many countries. This has rightly drawn criticism and raised questions about the long-term viability of blockchain technology.

### The Shift to Sustainable Consensus

The industry is evolving. Proof-of-stake and other consensus mechanisms dramatically reduce energy consumption. Hedera's hashgraph consensus, for example, is carbon-negative—meaning the network actively offsets more carbon than it produces.

## Why Hedera for Sustainability

Swisscoast chose Hedera as the platform for HLiquity not just for its performance, but for its environmental credentials:

- **Carbon-Negative**: Hedera purchases carbon offsets exceeding its energy usage
- **Energy-Efficient**: Hashgraph consensus requires minimal computational resources
- **Enterprise Governance**: The Hedera Governing Council includes organisations committed to sustainability
- **Transparent Reporting**: Regular sustainability reports and third-party verification

## Swisscoast's Approach to Sustainable DLT

### Zero-Carbon Development

Our development practices minimise environmental impact:
- Choosing energy-efficient blockchain networks
- Optimising smart contracts for minimal gas consumption
- Using sustainable hosting and infrastructure
- Offsetting remaining emissions

### Economic Sustainability

Sustainability also means building systems that are economically viable long-term:
- Self-sustaining protocol economics through borrowing fees
- Decentralised operation reducing ongoing infrastructure costs
- Open-source development enabling community contribution
- Fee structures that align incentives across all participants

### Social Sustainability

Technology should serve people:
- Accessible DeFi tools that don't require technical expertise
- Financial inclusion through low-barrier entry
- Transparent, governance-free protocols that treat all users equally
- Knowledge sharing through open documentation and research

## The Swiss Connection

Switzerland's commitment to sustainability aligns perfectly with our mission:

- **Swiss Energy Mix**: High proportion of renewable energy
- **Environmental Regulations**: Strong legal framework for environmental protection
- **Innovation Culture**: Support for clean technology and sustainable innovation
- **Financial Stability**: Long-term thinking embedded in Swiss financial culture

## Beyond Carbon: Holistic Sustainability

True sustainability in blockchain goes beyond energy consumption:

### Protocol Longevity
- Immutable smart contracts that don't require ongoing maintenance
- Governance-free design that prevents centralised failure points
- Battle-tested economic models proven on Ethereum

### Ecosystem Health
- Supporting a diverse DeFi ecosystem on Hedera
- Enabling new projects to build on HLiquity's foundation
- Contributing to the overall resilience of decentralised finance

## The Road Ahead

Swisscoast is committed to proving that cutting-edge DLT innovation and environmental responsibility are not just compatible—they're complementary. As we continue to develop new solutions, sustainability will remain at the core of every decision we make.

## Conclusion

The future of finance must be sustainable. At Swisscoast, we don't just develop DLT solutions—we reinvent them for sustainability. Our projects are proof that blockchain technology can drive financial innovation while respecting our planet and its resources.
    `,
    author: "Swisscoast Team",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "SUSTAINABILITY",
    image: projectDefi
  }
];
