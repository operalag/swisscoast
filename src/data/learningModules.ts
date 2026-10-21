export interface FlashCard {
  front: string;
  back: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  content: string; // markdown-like content rendered as JSX
  flashCards: FlashCard[];
  quiz: QuizQuestion[];
}

export interface LearningModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  chapters: Chapter[];
}

export const learningModules: LearningModule[] = [
  // ============================================================
  // MODULE 1: HEDERA HASHGRAPH
  // ============================================================
  {
    id: "hedera",
    title: "Hedera Hashgraph",
    subtitle: "The Trust Layer of the Internet",
    description:
      "Master the fundamentals of Hedera's hashgraph consensus, HBAR tokenomics, network services, and the enterprise-grade public ledger powering Web3.",
    icon: "🌐",
    chapters: [
      // ---------- Chapter 1 ----------
      {
        id: "hedera-1",
        title: "What is Hedera & Why It Matters",
        duration: "12 min",
        content: `Hedera is a public, open-source, proof-of-stake network designed for the decentralized economy. Unlike traditional blockchains that bundle transactions into sequential blocks, Hedera uses a Directed Acyclic Graph (DAG) structure called the **hashgraph**.

**Key characteristics:**
• **Speed** – 10,000+ transactions per second with 3-5 second finality.
• **Security** – Asynchronous Byzantine Fault Tolerant (aBFT), the gold standard of distributed consensus.
• **Fairness** – Consensus timestamps prevent front-running; transaction order is mathematically fair.
• **Sustainability** – Carbon-negative network; each transaction uses minimal energy (~0.00017 kWh).

**Governance:** Hedera is governed by the Hedera Council, a body of up to 39 term-limited, diversified organizations (Google, IBM, Boeing, Deutsche Telekom, and others). This council-based model avoids the concentration of power seen in miner- or validator-dominated networks.

**Why it matters for enterprises:** Hedera combines the openness of a public ledger with the performance and governance guarantees enterprises need. It supports native tokenization, smart contracts (Solidity on the EVM), and a consensus service that lets any application anchor trust to the network.`,
        flashCards: [
          { front: "What data structure does Hedera use instead of a blockchain?", back: "A Directed Acyclic Graph (DAG) called a hashgraph." },
          { front: "What does aBFT stand for?", back: "Asynchronous Byzantine Fault Tolerant – the highest grade of security for distributed consensus." },
          { front: "How many transactions per second can Hedera process?", back: "Over 10,000 TPS with 3-5 second finality." },
          { front: "How many organizations can sit on the Hedera Council?", back: "Up to 39 term-limited, diversified organizations." },
          { front: "Is Hedera carbon-positive or carbon-negative?", back: "Carbon-negative – each transaction uses ~0.00017 kWh of energy." },
        ],
        quiz: [
          {
            question: "What consensus algorithm does Hedera use?",
            options: ["Proof of Work", "Delegated Proof of Stake", "Hashgraph (aBFT)", "Practical Byzantine Fault Tolerance"],
            correctIndex: 2,
            explanation: "Hedera uses the hashgraph consensus algorithm which achieves asynchronous Byzantine Fault Tolerance (aBFT).",
          },
          {
            question: "Approximately how many TPS can the Hedera network handle?",
            options: ["15 TPS", "500 TPS", "10,000+ TPS", "1,000,000 TPS"],
            correctIndex: 2,
            explanation: "Hedera processes over 10,000 transactions per second with 3-5 second finality.",
          },
          {
            question: "What type of entity governs the Hedera network?",
            options: ["A single foundation", "A council of up to 39 organizations", "Miners", "A DAO of token holders"],
            correctIndex: 1,
            explanation: "The Hedera Council consists of up to 39 term-limited, diversified organizations providing decentralized governance.",
          },
          {
            question: "Why is Hedera considered 'fair'?",
            options: ["Low fees", "Consensus timestamps prevent front-running", "Open-source code", "Council governance"],
            correctIndex: 1,
            explanation: "Hashgraph provides fair ordering through consensus timestamps, making front-running mathematically impossible.",
          },
          {
            question: "What smart contract language does Hedera support?",
            options: ["Rust", "Move", "Solidity (EVM)", "Haskell"],
            correctIndex: 2,
            explanation: "Hedera supports Solidity smart contracts via an EVM-compatible execution environment.",
          },
        ],
      },
      // ---------- Chapter 2 ----------
      {
        id: "hedera-2",
        title: "Gossip About Gossip & Virtual Voting",
        duration: "15 min",
        content: `At the heart of Hedera lies two breakthrough concepts: **Gossip about Gossip** and **Virtual Voting**.

**Gossip Protocol:**
Every node randomly selects another node and shares all the transactions it knows about. The recipient then gossips to another random node, and so on. Information spreads exponentially – like how rumours spread – reaching every node in seconds.

**Gossip about Gossip:**
When a node shares information, it attaches a small piece of metadata: *who* told it *what* and *when*. This metadata is the "gossip about gossip." Together, these events form the hashgraph data structure, a DAG of events where each event has two parent hashes (self-parent and other-parent).

**Virtual Voting:**
Because every node has the full hashgraph, each node can independently calculate what every other node *would* vote without actually sending vote messages. This eliminates the costly message overhead of traditional BFT protocols. The result: consensus is reached with minimal bandwidth, achieving aBFT security with high throughput.

**Finality:**
Once consensus is reached (3-5 seconds), transactions are final and cannot be reversed. There is no concept of "confirmations" as in Bitcoin or Ethereum.

**Practical impact:** Gossip about Gossip + Virtual Voting = a consensus algorithm that uses almost no extra bandwidth beyond the transactions themselves, while achieving the strongest possible security guarantee.`,
        flashCards: [
          { front: "What is 'Gossip about Gossip'?", back: "Metadata attached to gossip messages recording who told whom what and when, forming the hashgraph DAG." },
          { front: "What is Virtual Voting?", back: "Nodes independently calculate how other nodes would vote based on the shared hashgraph, eliminating actual vote messages." },
          { front: "How many parent hashes does each event in the hashgraph have?", back: "Two – a self-parent (previous event by the same node) and an other-parent (the event received from another node)." },
          { front: "How long does finality take on Hedera?", back: "3-5 seconds, after which transactions are irreversible." },
          { front: "Why does Hashgraph use less bandwidth than traditional BFT?", back: "Virtual voting eliminates the need to send actual vote messages; nodes derive votes from the shared hashgraph." },
        ],
        quiz: [
          {
            question: "In the gossip protocol, how does information spread?",
            options: ["Broadcast to all nodes simultaneously", "Sequentially from node to node", "Random node-to-node gossip spreading exponentially", "Through a central coordinator"],
            correctIndex: 2,
            explanation: "Each node randomly selects another and shares transactions; the recipient repeats, causing exponential spread.",
          },
          {
            question: "What does 'Gossip about Gossip' add to standard gossip?",
            options: ["Encryption", "Metadata about who told whom what and when", "Transaction fees", "Block headers"],
            correctIndex: 1,
            explanation: "It attaches metadata to gossip messages, creating the hashgraph data structure.",
          },
          {
            question: "Why is Virtual Voting efficient?",
            options: ["It uses AI", "Votes are sent in compressed format", "No actual vote messages are sent", "Only council members vote"],
            correctIndex: 2,
            explanation: "Each node independently derives how others would vote from the shared hashgraph, requiring zero extra messages.",
          },
          {
            question: "What does aBFT guarantee?",
            options: ["Fastest possible speed", "Consensus even if <1/3 of nodes are malicious, with no timing assumptions", "Zero transaction fees", "Unlimited scalability"],
            correctIndex: 1,
            explanation: "aBFT ensures consensus as long as fewer than 1/3 of the network's stake is compromised, without relying on timing assumptions.",
          },
          {
            question: "How is transaction finality on Hedera different from Bitcoin?",
            options: ["Both require 6 confirmations", "Hedera has instant, absolute finality in 3-5 seconds", "Bitcoin is faster", "Both use probabilistic finality"],
            correctIndex: 1,
            explanation: "Hedera achieves deterministic finality in 3-5 seconds; Bitcoin relies on probabilistic finality requiring multiple confirmations.",
          },
        ],
      },
      // ---------- Chapter 3 ----------
      {
        id: "hedera-3",
        title: "HBAR Tokenomics & Staking",
        duration: "12 min",
        content: `**HBAR** is the native cryptocurrency of the Hedera network, serving multiple critical functions.

**Utility functions:**
• **Transaction fees** – Every operation on Hedera (transfers, smart contract calls, file storage, consensus messages) requires a small HBAR fee. Fees are denominated in USD but paid in HBAR, keeping costs predictable (~$0.0001 per transaction).
• **Network security (staking)** – HBAR holders can stake their tokens to network nodes, contributing to consensus security. Staking on Hedera is native (no slashing risk) and earns rewards.
• **Governance weight** – While the Council governs protocol changes, HBAR staking weight influences consensus.

**Supply:**
• Fixed maximum supply: **50 billion HBAR**.
• Tokens were minted at network launch (no mining). Distribution follows a public schedule managed by the Hedera Treasury.
• The release schedule is designed to avoid sudden supply shocks.

**Staking on Hedera:**
Hedera offers **native staking** without slashing. Token holders can proxy-stake to any node. Staking rewards come from a dedicated reward pool and are distributed proportionally. Unlike many PoS networks, staked HBAR is never locked or at risk of being slashed.

**Economic design:** Low, predictable fees make Hedera ideal for high-volume enterprise use cases (supply chain, payments, tokenization), while staking incentivises decentralization and security.`,
        flashCards: [
          { front: "What is the maximum supply of HBAR?", back: "50 billion HBAR – all minted at network launch." },
          { front: "How are Hedera's transaction fees denominated?", back: "In USD but paid in HBAR, keeping costs predictable at ~$0.0001 per transaction." },
          { front: "Is there slashing risk when staking HBAR?", back: "No. Hedera offers native staking without slashing risk." },
          { front: "What three functions does HBAR serve?", back: "1) Transaction fees, 2) Network security via staking, 3) Governance weight for consensus." },
          { front: "Who manages the HBAR release schedule?", back: "The Hedera Treasury, following a publicly disclosed distribution schedule." },
        ],
        quiz: [
          {
            question: "What is the total maximum supply of HBAR?",
            options: ["21 million", "1 billion", "50 billion", "Unlimited"],
            correctIndex: 2,
            explanation: "HBAR has a fixed maximum supply of 50 billion tokens, all minted at launch.",
          },
          {
            question: "How much does a typical Hedera transaction cost?",
            options: ["$1.00", "$0.10", "$0.01", "~$0.0001"],
            correctIndex: 3,
            explanation: "Hedera transactions cost approximately $0.0001, making it one of the most affordable networks.",
          },
          {
            question: "What happens to staked HBAR if a validator misbehaves?",
            options: ["It is slashed", "It is burned", "Nothing – no slashing on Hedera", "It is redistributed"],
            correctIndex: 2,
            explanation: "Hedera's native staking has no slashing mechanism, so staked HBAR is never at risk.",
          },
          {
            question: "How are transaction fees kept predictable on Hedera?",
            options: ["Fees are fixed in HBAR", "Fees are denominated in USD and paid in HBAR", "Fees are zero", "Fees adjust based on gas auctions"],
            correctIndex: 1,
            explanation: "Fees are set in USD terms and paid in the equivalent HBAR amount, protecting users from crypto volatility.",
          },
          {
            question: "Why is HBAR's tokenomics suited for enterprise use?",
            options: ["High fees deter spam", "Inflationary supply boosts staking", "Low predictable fees enable high-volume applications", "Mining rewards attract enterprises"],
            correctIndex: 2,
            explanation: "Low, USD-denominated fees make it economically viable for enterprises to run high-volume applications.",
          },
        ],
      },
      // ---------- Chapter 4 ----------
      {
        id: "hedera-4",
        title: "Hedera Network Services",
        duration: "14 min",
        content: `Hedera offers four core network services, each designed for different enterprise and developer use cases.

**1. Hedera Token Service (HTS):**
Create, manage, and transfer fungible and non-fungible tokens natively – no smart contract needed. HTS tokens benefit from the same speed, security, and low cost as HBAR transfers. Configuration options include KYC flags, freeze capabilities, and custom fee schedules.

**2. Hedera Consensus Service (HCS):**
Any application can submit a message to HCS and receive a trusted, verifiable timestamp and ordering. This is ideal for audit trails, supply chain tracking, and decentralized logging. Messages are anchored to the hashgraph, providing tamper-proof ordering without storing data on-ledger.

**3. Smart Contract Service:**
Hedera runs a Solidity-compatible EVM, allowing developers to deploy Ethereum smart contracts directly. The EVM on Hedera benefits from higher throughput and lower gas costs compared to Ethereum mainnet. Contracts can interact with HTS tokens natively.

**4. File Service:**
Store files on the Hedera network with content addressability and immutability. Suitable for storing credentials, configuration files, or any data that needs a verifiable, tamper-proof record.

**Interoperability:** These services work together. A smart contract can mint an HTS token, log an event to HCS, and reference a file – all in a single transaction flow.`,
        flashCards: [
          { front: "What is the Hedera Token Service (HTS)?", back: "A native service to create, manage, and transfer fungible and non-fungible tokens without smart contracts." },
          { front: "What is the Hedera Consensus Service (HCS)?", back: "A service that provides trusted, verifiable timestamps and ordering for any application message." },
          { front: "What smart contract language does Hedera's EVM support?", back: "Solidity – developers can deploy Ethereum smart contracts directly." },
          { front: "Can Hedera services interact with each other?", back: "Yes – a smart contract can mint HTS tokens, log to HCS, and reference files in a single transaction flow." },
          { front: "What is the File Service used for?", back: "Storing files on-network with content addressability and immutability for verifiable, tamper-proof records." },
        ],
        quiz: [
          {
            question: "Which Hedera service lets you create tokens without writing a smart contract?",
            options: ["Smart Contract Service", "File Service", "Hedera Token Service (HTS)", "Hedera Consensus Service (HCS)"],
            correctIndex: 2,
            explanation: "HTS allows native token creation and management without deploying smart contracts.",
          },
          {
            question: "What does the Hedera Consensus Service (HCS) provide?",
            options: ["Token minting", "Smart contract execution", "Trusted timestamps and message ordering", "File storage"],
            correctIndex: 2,
            explanation: "HCS gives any application a verifiable, tamper-proof timestamp and ordering for messages.",
          },
          {
            question: "Which Ethereum feature is available on Hedera's Smart Contract Service?",
            options: ["Proof of Work mining", "EVM-compatible Solidity execution", "Layer 2 rollups", "Sharding"],
            correctIndex: 1,
            explanation: "Hedera runs an EVM-compatible environment where developers can deploy Solidity contracts directly.",
          },
          {
            question: "Can a single Hedera transaction interact with multiple services?",
            options: ["No, each service is isolated", "Yes, services are interoperable", "Only HTS and HCS", "Only with special permission"],
            correctIndex: 1,
            explanation: "Hedera's services are designed to work together in a single transaction flow.",
          },
          {
            question: "What advantage does Hedera's EVM have over Ethereum mainnet?",
            options: ["More programming languages", "Higher throughput and lower gas costs", "More validators", "Larger block size"],
            correctIndex: 1,
            explanation: "Hedera's EVM benefits from the hashgraph's higher throughput and significantly lower gas costs.",
          },
        ],
      },
      // ---------- Chapter 5 ----------
      {
        id: "hedera-5",
        title: "Real-World Use Cases & Ecosystem",
        duration: "10 min",
        content: `Hedera powers a diverse ecosystem of real-world applications across industries.

**Supply Chain & Sustainability:**
• **Atma.io** by Avery Dennison – tracks billions of items through global supply chains using HCS for tamper-proof provenance.
• **DOVU** – carbon credit marketplace enabling transparent offsetting verified on Hedera.

**Payments & Finance:**
• **Dropp** – micropayment solution enabling pay-per-use models with near-zero fees.
• **DeFi ecosystem** – Protocols like SaucerSwap (DEX), HeliSwap, and Stader (liquid staking) form a growing DeFi layer.

**Identity & Credentials:**
• **Meeco/Indicio** – decentralized identity solutions anchored to Hedera for verifiable credentials.

**NFTs & Gaming:**
• **HashPack, Kabila, SentX** – NFT marketplaces and wallets serving the Hedera creator economy.

**Enterprise adoption:**
• **The HBAR Foundation** provides grants and support for builders.
• **Hashgraph Association** and **Hashgraph Ventures** invest in ecosystem growth, particularly in Switzerland and MENA regions.
• Council members like **Google, IBM, Dell, Boeing, Tata, Standard Bank** validate enterprise trust.

**Why the ecosystem is growing:** Predictable costs, regulatory-friendly design, and the Council governance model attract both startups and Fortune 500 companies.`,
        flashCards: [
          { front: "What is Atma.io?", back: "Avery Dennison's platform that tracks billions of supply chain items using Hedera Consensus Service." },
          { front: "Name three DeFi protocols on Hedera.", back: "SaucerSwap (DEX), HeliSwap (DEX), and Stader (liquid staking)." },
          { front: "What is the HBAR Foundation?", back: "An organization providing grants and support to builders developing on the Hedera ecosystem." },
          { front: "What role does Hashgraph Ventures play?", back: "It invests in ecosystem growth, particularly in Switzerland and MENA regions." },
          { front: "Why do enterprises choose Hedera?", back: "Predictable costs, regulatory-friendly design, council governance, and high performance." },
        ],
        quiz: [
          {
            question: "Which company uses Hedera to track billions of items in supply chains?",
            options: ["Google", "Avery Dennison (Atma.io)", "Boeing", "Dell"],
            correctIndex: 1,
            explanation: "Avery Dennison's Atma.io platform uses HCS to provide tamper-proof provenance for billions of items.",
          },
          {
            question: "What is SaucerSwap?",
            options: ["A stablecoin", "A decentralized exchange (DEX) on Hedera", "A wallet", "A consensus service"],
            correctIndex: 1,
            explanation: "SaucerSwap is the leading decentralized exchange in the Hedera DeFi ecosystem.",
          },
          {
            question: "Which organization invests in Hedera ecosystem growth in Switzerland?",
            options: ["HBAR Foundation", "Hashgraph Ventures", "Google Ventures", "Hedera Council"],
            correctIndex: 1,
            explanation: "Hashgraph Ventures focuses on ecosystem investment, particularly in Switzerland and MENA regions.",
          },
          {
            question: "Why are micropayments viable on Hedera?",
            options: ["No fees at all", "Near-zero transaction fees (~$0.0001)", "Fees paid by the recipient", "Government subsidies"],
            correctIndex: 1,
            explanation: "Hedera's near-zero fees make micropayment use cases like Dropp's pay-per-use model economically viable.",
          },
          {
            question: "Which of these is NOT a Hedera Council member?",
            options: ["Google", "Boeing", "Apple", "Deutsche Telekom"],
            correctIndex: 2,
            explanation: "Apple is not a Hedera Council member. Google, Boeing, and Deutsche Telekom are all council members.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // MODULE 2: HORUS
  // ============================================================
  {
    id: "horus",
    title: "HORUS Protocol",
    subtitle: "Decentralized Prediction Markets",
    description:
      "Discover how HORUS brings prediction markets to Hedera with bond escalation, DAO governance, and a unique fee-sharing model.",
    icon: "🔮",
    chapters: [
      {
        id: "horus-1",
        title: "What Are Prediction Markets?",
        duration: "10 min",
        content: `**Prediction markets** are platforms where participants trade on the outcomes of future events. They harness the "wisdom of the crowd" to produce probability estimates that are often more accurate than expert forecasts.

**How they work:**
• A question is posed: "Will Bitcoin exceed $100k by December 2026?"
• Participants buy YES or NO shares. Prices reflect the crowd's estimated probability.
• When the event resolves, correct shares pay out; incorrect shares become worthless.

**Why prediction markets matter:**
• **Information aggregation** – Market prices synthesize diverse information and opinions.
• **Accuracy** – Studies show prediction markets outperform polls and expert panels.
• **Applications** – Elections, sports, crypto prices, business decisions, scientific outcomes.

**The problem with centralized prediction markets:**
Traditional platforms (like old-style betting exchanges) suffer from:
• Counterparty risk – the platform holds your funds.
• Censorship – platforms can delist markets.
• Lack of transparency – opaque resolution mechanisms.

**The decentralized solution:**
HORUS solves these problems by running entirely on Hedera smart contracts:
• No custodial risk – funds are held in smart contracts.
• Censorship-resistant – anyone can create markets.
• Transparent resolution – bond escalation and DAO voting ensure fair outcomes.

**HORUS on Hedera:** By building on Hedera, HORUS benefits from 3-5s finality, ~$0.0001 fees, and carbon-negative infrastructure.`,
        flashCards: [
          { front: "What is a prediction market?", back: "A platform where participants trade on the outcomes of future events, with prices reflecting crowd-estimated probabilities." },
          { front: "Why are prediction markets considered accurate?", back: "They aggregate diverse information and opinions into prices, often outperforming polls and expert panels." },
          { front: "What is the main risk of centralized prediction markets?", back: "Counterparty risk – the platform holds your funds and can censor or manipulate markets." },
          { front: "How does HORUS solve custodial risk?", back: "Funds are held in smart contracts on Hedera, not by a central party." },
          { front: "What are Hedera's advantages for prediction markets?", back: "3-5 second finality, ~$0.0001 fees, and carbon-negative infrastructure." },
        ],
        quiz: [
          {
            question: "What do prediction market prices represent?",
            options: ["Historical data", "Expert opinions", "Crowd-estimated probabilities of future events", "Government statistics"],
            correctIndex: 2,
            explanation: "Prices in prediction markets reflect the crowd's aggregated estimate of an event's probability.",
          },
          {
            question: "What advantage do prediction markets have over polls?",
            options: ["They're cheaper", "They aggregate more diverse information and are often more accurate", "They're regulated", "They use AI"],
            correctIndex: 1,
            explanation: "Prediction markets synthesize diverse information through financial incentives, producing more accurate forecasts.",
          },
          {
            question: "What problem does HORUS solve compared to centralized platforms?",
            options: ["Faster trading", "Eliminates counterparty risk with smart contracts", "Lower taxes", "Better customer support"],
            correctIndex: 1,
            explanation: "HORUS uses Hedera smart contracts to hold funds, eliminating the need to trust a central party.",
          },
          {
            question: "Why is Hedera a good fit for prediction markets?",
            options: ["It has the highest market cap", "Fast finality, low fees, and carbon-negative operation", "It's the oldest blockchain", "It supports the most languages"],
            correctIndex: 1,
            explanation: "Hedera's 3-5s finality, ~$0.0001 fees, and sustainability make it ideal for frequent market transactions.",
          },
          {
            question: "Who can create markets on HORUS?",
            options: ["Only the HORUS team", "Only licensed operators", "Anyone", "Only Hedera Council members"],
            correctIndex: 2,
            explanation: "HORUS is permissionless – anyone can create a prediction market by paying the creation fee.",
          },
        ],
      },
      {
        id: "horus-2",
        title: "Creating & Participating in Markets",
        duration: "12 min",
        content: `**Creating a market on HORUS:**

**Step 1: Define the market**
Specify the question, possible outcomes (YES/NO), resolution rules, and a deadline. Example: "Will HBAR reach $1 by March 2027?"

**Step 2: Pay the creation fee**
Creating a market costs 10,000 HORUS tokens. This fee prevents spam markets and funds the ecosystem.

**Step 3: Market goes live**
Once created, anyone can participate by buying YES or NO shares.

**Participating in a market:**

**Buying shares:**
• If you believe the event will happen, buy YES shares.
• If you believe it won't, buy NO shares.
• Share prices move based on supply and demand, reflecting the crowd's probability estimate.

**Market resolution:**
After the deadline passes, the market enters the resolution phase:
1. Anyone can propose an answer (YES or NO) by posting a bond.
2. Others have a 4-hour challenge window to counter-propose by doubling the bond.
3. If unchallenged, the proposal becomes final.
4. If challenged repeatedly, the dispute escalates to DAO voting.

**Claiming winnings:**
• If you hold the correct outcome's shares, you can claim your proportional payout.
• If you hold incorrect shares, they become worthless.

**Strategy tips:**
• Research thoroughly before buying shares.
• Consider the implied probability from current prices.
• Diversify across multiple markets.
• Participate in resolution for additional rewards.`,
        flashCards: [
          { front: "How much does it cost to create a HORUS market?", back: "10,000 HORUS tokens." },
          { front: "How long is the challenge window for a proposed answer?", back: "4 hours." },
          { front: "What happens to incorrect shares after resolution?", back: "They become worthless." },
          { front: "How does bond escalation work?", back: "A challenger must double the previous bond to counter-propose, escalating the stakes." },
          { front: "What happens if a proposal is unchallenged for 4 hours?", back: "The proposal becomes the final, accepted answer." },
        ],
        quiz: [
          {
            question: "How much does it cost to create a market on HORUS?",
            options: ["Free", "100 HORUS", "10,000 HORUS", "1 HBAR"],
            correctIndex: 2,
            explanation: "Creating a market requires a 10,000 HORUS token fee to prevent spam.",
          },
          {
            question: "How do share prices in a prediction market move?",
            options: ["They're fixed by the protocol", "Based on supply and demand", "Set by the market creator", "Determined by oracle"],
            correctIndex: 1,
            explanation: "Share prices are determined by supply and demand, reflecting the crowd's probability estimate.",
          },
          {
            question: "What happens during the resolution phase?",
            options: ["An oracle provides the answer", "Anyone proposes an answer with a bond; others can challenge", "The market creator decides", "Token holders vote immediately"],
            correctIndex: 1,
            explanation: "Anyone can propose an answer by posting a bond, and others have 4 hours to challenge by doubling it.",
          },
          {
            question: "How long do challengers have to counter a proposed answer?",
            options: ["1 hour", "4 hours", "24 hours", "7 days"],
            correctIndex: 1,
            explanation: "The challenge window is 4 hours. If no one challenges, the proposal is finalized.",
          },
          {
            question: "What happens to winning shares after resolution?",
            options: ["They expire", "Holders claim proportional payouts", "They convert to HORUS", "Nothing – automatic distribution"],
            correctIndex: 1,
            explanation: "Holders of the correct outcome's shares can claim their proportional payout from the market.",
          },
        ],
      },
      {
        id: "horus-3",
        title: "Bond Escalation Mechanism",
        duration: "14 min",
        content: `The **bond escalation mechanism** is HORUS's innovative approach to dispute resolution, ensuring market outcomes are accurate without relying on centralized oracles.

**How it works:**

**Round 1 – Initial Proposal:**
After a market's deadline, anyone can propose an answer (e.g., YES) by posting an initial bond (e.g., 100 HORUS).

**Round 2 – Challenge:**
If someone disagrees, they post a counter-proposal (NO) with double the bond (200 HORUS). The original proposer now has 4 hours to respond.

**Round 3+ – Escalation:**
Each subsequent challenge requires doubling the previous bond: 400, 800, 1,600... This exponential increase means:
• Frivolous challenges become prohibitively expensive.
• Honest actors are confident they'll recover their bonds (plus earn the opponent's).
• The cost of lying grows exponentially.

**Final resolution:**
• If no counter-challenge is posted within 4 hours, the last proposal wins.
• The winner gets back their bond PLUS the loser's bond.
• If escalation reaches a predefined threshold, the dispute is forwarded to DAO governance for a final vote.

**Game theory insight:**
Bond escalation is based on the Schelling point concept: rational actors converge on the truthful answer because lying is expensive and truth-telling is rewarded. The mechanism is designed so that the expected value of telling the truth always exceeds the expected value of lying.

**Why not oracles?**
Traditional oracle-based systems rely on external data feeds that can be manipulated or fail. Bond escalation uses economic incentives to crowdsource truth, making it more robust and decentralized.`,
        flashCards: [
          { front: "How does bond escalation escalate?", back: "Each challenge requires doubling the previous bond (100 → 200 → 400 → 800...), making false challenges exponentially expensive." },
          { front: "What happens when the bond escalation threshold is reached?", back: "The dispute is forwarded to DAO governance for a final vote." },
          { front: "What does the winner of a bond escalation receive?", back: "Their own bond back PLUS the loser's bond." },
          { front: "What is a Schelling point?", back: "A natural focal point where rational actors converge – in this case, the truthful answer." },
          { front: "Why does HORUS use bond escalation instead of oracles?", back: "Oracles can be manipulated or fail; bond escalation uses economic incentives to crowdsource truth more robustly." },
        ],
        quiz: [
          {
            question: "In bond escalation, how much must each subsequent challenger post?",
            options: ["The same amount", "50% more", "Double the previous bond", "Triple the previous bond"],
            correctIndex: 2,
            explanation: "Each challenge requires doubling the previous bond, creating exponentially increasing costs for dishonest actors.",
          },
          {
            question: "What makes frivolous challenges unprofitable?",
            options: ["They're banned by the protocol", "The exponential bond increase", "DAO members reject them", "They require KYC"],
            correctIndex: 1,
            explanation: "The doubling bond requirement means frivolous challenges become prohibitively expensive very quickly.",
          },
          {
            question: "What happens if no one challenges a proposal within 4 hours?",
            options: ["The market is cancelled", "The proposal becomes the final answer", "A DAO vote is triggered", "A new proposal period starts"],
            correctIndex: 1,
            explanation: "An unchallenged proposal is accepted as the final, correct answer after the 4-hour window.",
          },
          {
            question: "Why is bond escalation preferred over oracle-based resolution?",
            options: ["It's faster", "It's cheaper", "It uses economic incentives and can't be manipulated like oracle feeds", "It requires fewer smart contracts"],
            correctIndex: 2,
            explanation: "Bond escalation crowdsources truth through economic incentives, avoiding single points of failure like oracle feeds.",
          },
          {
            question: "What is the Schelling point concept in bond escalation?",
            options: ["The maximum bond amount", "The point where rational actors converge on the truthful answer", "The market creation fee", "The DAO voting threshold"],
            correctIndex: 1,
            explanation: "Schelling point theory predicts rational actors will converge on the obvious, truthful answer because lying is costly.",
          },
        ],
      },
      {
        id: "horus-4",
        title: "HORUS Token & DAO Governance",
        duration: "12 min",
        content: `The **HORUS token** is the native utility and governance token of the HORUS protocol.

**Token utility:**

**1. Market creation:**
Creating a prediction market requires 10,000 HORUS tokens. This creates demand for the token and prevents low-quality markets.

**2. Fee sharing (60% to stakers):**
The HORUS protocol charges fees on market participation. **60% of all protocol fees** are distributed to HORUS token stakers. This is one of the most generous fee-sharing models in DeFi.

**3. DAO governance:**
HORUS holders vote on protocol parameters, disputed market outcomes, and treasury allocation. One token = one vote.

**4. Bond escalation:**
HORUS tokens are used as bonds in the dispute resolution process.

**DAO governance structure:**

**Dispute resolution:**
When bond escalation reaches its threshold, the DAO votes on the market outcome. Voters who vote with the majority receive rewards; those who vote against lose their stake. This incentivises honest voting.

**Protocol governance:**
• Fee parameters
• Treasury management
• Protocol upgrades (if applicable)
• Partnership decisions

**Tokenomics highlights:**
• Fee-sharing creates sustainable demand.
• Market creation burns tokens from circulation (deflationary pressure).
• Staking locks supply, reducing selling pressure.
• DAO participation is incentivised with rewards.

**The virtuous cycle:** More markets → more fees → more staking rewards → more demand for HORUS → higher token value → more attractive market creation.`,
        flashCards: [
          { front: "What percentage of protocol fees goes to HORUS stakers?", back: "60% of all protocol fees are distributed to stakers." },
          { front: "How much HORUS is needed to create a market?", back: "10,000 HORUS tokens." },
          { front: "What happens to DAO voters who vote with the minority?", back: "They lose their stake, incentivising honest voting." },
          { front: "What creates deflationary pressure on HORUS?", back: "Market creation fees remove tokens from circulation." },
          { front: "What is the 'virtuous cycle' of the HORUS ecosystem?", back: "More markets → more fees → more staking rewards → more demand → higher value → more market creation." },
        ],
        quiz: [
          {
            question: "What percentage of HORUS protocol fees go to token stakers?",
            options: ["10%", "30%", "60%", "100%"],
            correctIndex: 2,
            explanation: "60% of all protocol fees are distributed to HORUS token stakers.",
          },
          {
            question: "What is the HORUS token used for in dispute resolution?",
            options: ["Paying oracles", "Posting bonds in the escalation process", "Bribing validators", "Gas fees"],
            correctIndex: 1,
            explanation: "HORUS tokens are used as bonds during the bond escalation dispute resolution process.",
          },
          {
            question: "What happens to DAO voters who vote with the majority?",
            options: ["Nothing", "They receive rewards", "They lose tokens", "They get governance power"],
            correctIndex: 1,
            explanation: "Voters who vote with the majority are rewarded, incentivising honest and accurate voting.",
          },
          {
            question: "How does market creation affect HORUS token supply?",
            options: ["Increases supply", "No effect", "Creates deflationary pressure by removing tokens", "Doubles supply"],
            correctIndex: 2,
            explanation: "Market creation requires 10,000 HORUS, removing tokens from circulation and creating deflationary pressure.",
          },
          {
            question: "What governance decisions can HORUS DAO voters make?",
            options: ["Only market disputes", "Fee parameters, treasury, upgrades, partnerships, and disputes", "Only fee changes", "Only treasury management"],
            correctIndex: 1,
            explanation: "The DAO governs fee parameters, treasury management, protocol upgrades, partnerships, and disputed market outcomes.",
          },
        ],
      },
      {
        id: "horus-5",
        title: "Use Cases & Future of Prediction Markets",
        duration: "10 min",
        content: `Prediction markets have applications far beyond simple betting – they are **information tools** that can improve decision-making across industries.

**Current HORUS use cases:**

**1. Crypto & DeFi predictions:**
• "Will HBAR reach $1 by end of 2027?"
• "Will Hedera process 1 billion transactions in Q3 2026?"
• Markets for token prices, protocol TVL milestones, and ecosystem events.

**2. Technology & innovation:**
• "Will a specific company launch a product by date X?"
• Hardware release dates, AI benchmarks, scientific breakthroughs.

**3. Governance & policy:**
• Election outcomes, regulatory decisions, central bank rate changes.
• "Will Switzerland adopt MiCA-equivalent regulation by 2027?"

**4. Business intelligence:**
• Companies can create internal prediction markets to forecast sales, project timelines, and strategic outcomes.
• Research shows corporate prediction markets outperform traditional forecasting by 15-20%.

**Future developments for HORUS:**

• **Conditional markets** – "If X happens, what's the probability of Y?"
• **Scalar markets** – Predict a range (e.g., "What will Bitcoin's price be?") instead of binary YES/NO.
• **Integration with DeFi** – Use prediction market shares as collateral in lending protocols.
• **Cross-chain markets** – Leverage Hedera's interoperability for multi-chain prediction markets.
• **Real-world event resolution** – Partnerships with data providers for automated resolution of sports, weather, and financial events.

**The bigger picture:** As Web3 matures, prediction markets become essential infrastructure for information markets, hedging, and decentralized decision-making. HORUS aims to be the leading prediction market protocol on Hedera.`,
        flashCards: [
          { front: "How do corporate prediction markets compare to traditional forecasting?", back: "Research shows they outperform traditional methods by 15-20%." },
          { front: "What are conditional markets?", back: "Markets that predict 'If X happens, what's the probability of Y?' – linking outcomes together." },
          { front: "What are scalar markets?", back: "Markets predicting a value in a range (e.g., a price) instead of binary YES/NO outcomes." },
          { front: "How could prediction market shares be used in DeFi?", back: "As collateral in lending protocols, adding utility to position tokens." },
          { front: "What is HORUS's long-term vision?", back: "To be the leading prediction market protocol on Hedera, serving as essential Web3 information infrastructure." },
        ],
        quiz: [
          {
            question: "By how much do corporate prediction markets outperform traditional forecasting?",
            options: ["1-2%", "5-10%", "15-20%", "50%+"],
            correctIndex: 2,
            explanation: "Research shows corporate prediction markets outperform traditional forecasting methods by 15-20%.",
          },
          {
            question: "What is a 'scalar market'?",
            options: ["A market with unlimited participants", "A market predicting a value range instead of YES/NO", "A market that scales with usage", "A market for large bets only"],
            correctIndex: 1,
            explanation: "Scalar markets predict a value within a range, providing more nuanced predictions than binary outcomes.",
          },
          {
            question: "How could prediction market shares integrate with DeFi?",
            options: ["As governance tokens", "As collateral in lending protocols", "As gas tokens", "As stablecoins"],
            correctIndex: 1,
            explanation: "Prediction market position tokens could serve as collateral in lending protocols, adding utility.",
          },
          {
            question: "What type of prediction market would forecast election outcomes?",
            options: ["Crypto markets", "Governance & policy markets", "DeFi markets", "Technology markets"],
            correctIndex: 1,
            explanation: "Elections, regulatory decisions, and policy outcomes fall under governance & policy prediction markets.",
          },
          {
            question: "Why are prediction markets considered 'information tools'?",
            options: ["They store data on-chain", "They aggregate diverse information into probability estimates", "They publish reports", "They use AI for predictions"],
            correctIndex: 1,
            explanation: "Prediction markets aggregate diverse information and opinions through financial incentives into accurate probability estimates.",
          },
        ],
      },
    ],
  },
];
