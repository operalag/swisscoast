import projectDefi from "@/assets/project-defi.jpg";
import projectClimateactions from "@/assets/project-climateactions.jpg";

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
    id: "climateactions-climate-tokens-switzerland",
    title: "ClimateActions: Turning Everyday Climate Decisions Into On-Chain Rewards",
    excerpt: "Our newest product, built with MyBluePlanet: a mobile-first Swiss climate app where local actions earn ClimateTokens, confirmed on the blockchain and redeemable with local partners.",
    content: `
# ClimateActions: Turning Everyday Climate Decisions Into On-Chain Rewards

ClimateActions is our latest product—a mobile-first app created with the Swiss climate organisation MyBluePlanet. Its promise is simple: *smart für dich. Und fürs Klima.* Smart for you, and for the climate.

Instead of asking people to read another report about emissions, ClimateActions asks them to do something concrete in their own neighbourhood—and rewards them for it.

## How It Works

The app follows a three-step loop:

1. **Take action.** Join local actions: clean-ups, planting days, climate-protection projects, food-waste and mobility challenges.
2. **Earn ClimateTokens.** Every completed action credits ClimateTokens in the app, confirmed on the blockchain.
3. **Redeem locally.** Tokens are spent with participating partners and shops nearby—for example SBB travel benefits.

That loop is what makes climate action tangible: the effort is local, the record is verifiable, and the reward stays in the regional economy.

## Your ClimateScore

Each user builds a personal ClimateScore that grows with every action, large or small. The score is broken down into four everyday areas:

- **Ernährung** — nutrition
- **Konsum** — consumption
- **Mobilität** — mobility
- **Wohnen** — housing

Because progress is visible and comparable with the community, small habits become a measurable trajectory rather than a vague intention.

## Built for Community, Not Solo Heroics

Nobody saves the planet alone. ClimateActions puts teams, community actions and a shared impact view at the centre, so participants can see the aggregate contribution of the MyBluePlanet community and not just their own number.

There is also a playful entry point: the **CO₂ Duel**, a quick quiz game—what causes more CO₂, the chicken or the cheeseburger?—that anyone can play without an account and share with friends.

## Designed for the Phone, and for Zero Friction

ClimateActions is built for smartphones, usable straight from the browser or installed as an app. Sign-up is deliberately frictionless:

- Free, no subscription
- No password—an email address is enough
- Roughly one minute to get started
- Actions in your own region

## Why Blockchain Here

Token rewards only work if people trust them. Recording ClimateToken issuance on a public ledger means the record of who earned what, and what was redeemed, is transparent and tamper-resistant. It is the same principle behind our BIDI biodiversity vouchers for the municipality of Muri bei Bern: use distributed ledger technology where verifiability genuinely matters, and keep it invisible everywhere else.

## From Protocols to Real-World Impact

The same engineering discipline applies to civic and environmental programmes. Tokens do not have to be speculative instruments; they can be a receipt for real work done in a real place.

## Try It

ClimateActions is live at [climateactions.ch](https://climateactions.ch). Open it on your phone, register in a minute, and start your first action.
    `,
    author: "Swisscoast Team",
    date: "2026-09-15",
    readTime: "5 min read",
    category: "IMPACT",
    image: projectClimateactions
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

Hedera illustrates how distributed ledger networks can address environmental considerations alongside performance:

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
- Sharing knowledge across the distributed ledger ecosystem
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
