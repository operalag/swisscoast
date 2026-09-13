import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import projectClimateactions from "@/assets/project-climateactions.jpg";
import projectBidi from "@/assets/project-bidi.jpg";
import projectHliquity from "@/assets/project-hliquity.jpg";
import projectHorus from "@/assets/project-horus.jpg";
import projectDefi from "@/assets/project-defi.jpg";
import projectDchf from "@/assets/project-dchf.jpg";

interface CaseStudy {
  image: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  challenge: string;
  approach: string;
  results: string[];
  link: string | null;
  internalLink?: { label: string; to: string };
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      image: projectClimateactions,
      client: "MyBluePlanet",
      title: "ClimateActions — climate behaviour turned into local rewards",
      sector: "Climate NGO · Switzerland",
      year: "2026",
      challenge:
        "MyBluePlanet, a Swiss climate protection organisation, wanted to move people from climate awareness to repeated climate action — and to make that action countable, rewarding and local, without asking anyone to understand blockchain.",
      approach:
        "We built a mobile-first app in which people join local and national actions, grow a personal ClimateScore across nutrition, consumption, mobility and housing, and earn ClimateTokens confirmed on a public ledger. Onboarding is passwordless: an email address and about one minute. A partner network lets tokens be redeemed with local shops and services.",
      results: [
        "Live nationwide in Switzerland at climateactions.ch",
        "Every reward token is confirmed on-chain, so issuance and redemption are verifiable",
        "National campaigns run inside the app — for example the national week against food waste",
        "Redemption with local partners keeps the value of climate action in the regional economy",
        "A no-signup CO₂ quiz game gives newcomers a first, frictionless touchpoint",
      ],
      link: "https://climateactions.ch",
      internalLink: { label: "FULL PRODUCT PAGE", to: "/climateactions" },
    },
    {
      image: projectBidi,
      client: "Gemeinde Muri bei Bern",
      title: "BIDI — biodiversity vouchers for a Swiss municipality",
      sector: "Public sector · Municipality",
      year: "2025",
      challenge:
        "The municipality of Muri bei Bern wanted to increase volunteer participation in hands-on nature conservation and to reward it in a way residents could trust and local businesses could accept.",
      approach:
        "We designed and delivered BIDI (Biodiversitäts-Gutscheine): volunteers who join stewardship activities such as hedge maintenance, invasive neophyte removal and riparian or wetland restoration receive on-chain vouchers. A citizen wallet, a merchant onboarding portal and a guided onboarding tour keep the experience simple for both sides.",
      results: [
        "Live municipal programme at muri.swisscoast.org",
        "1 BIDI = 1 CHF, redeemable with participating local merchants and service providers",
        "Every voucher is transparent and verifiable on-chain",
        "Community-level impact tracking for the municipality",
        "A repeatable blueprint other Swiss municipalities can adopt",
      ],
      link: "https://muri.swisscoast.org",
    },
    {
      image: projectHliquity,
      client: "HLiquity Protocol",
      title: "HLiquity & HCHF — interest-free borrowing in Swiss Francs",
      sector: "Decentralised finance · Hedera",
      year: "2024",
      challenge:
        "Stablecoin lending is dominated by US Dollar assets. The goal was a Swiss Franc borrowing market on a low-cost, energy-efficient network, without interest payments or a governance body able to change the rules.",
      approach:
        "We adapted the proven Liquity model to Hedera Hashgraph: HBAR is deposited as collateral in a Trove, HCHF is borrowed against it at 0% interest with a 110% minimum collateral ratio, and a Stability Pool absorbs liquidations. The system is non-custodial, immutable and governance-free.",
      results: [
        "First decentralised borrowing protocol on Hedera, live at hliquity.org",
        "HCHF: the first privately issued digital Swiss Franc on Hedera",
        "Smart contracts audited by Omniscia",
        "HLQT staking distributes borrowing and redemption fees to participants",
      ],
      link: "https://hliquity.org",
    },
    {
      image: projectHorus,
      client: "HORUS",
      title: "HORUS — prediction markets with fast finality",
      sector: "Decentralised finance · Hedera",
      year: "2025",
      challenge:
        "Prediction markets need cheap transactions, quick settlement and a dispute process people can trust — a combination most networks make expensive.",
      approach:
        "We built HORUS on Hedera: markets settle with 3–5 second finality, a bond escalation mechanism pushes resolutions towards accuracy, DAO governance handles disputes, and HORUS staking shares protocol fees with participants.",
      results: [
        "Live at thehorus.xyz",
        "3–5 second finality and low fees on a carbon-negative network",
        "Bond escalation and DAO dispute resolution instead of a single trusted operator",
        "60% of protocol fees flow back to HORUS stakers",
      ],
      link: "https://thehorus.xyz",
    },
    {
      image: projectDefi,
      client: "Hedera Hashgraph Association",
      title: "Digital Swiss Currency market research",
      sector: "Research · Switzerland",
      year: "2023",
      challenge:
        "Before building a Swiss Franc stablecoin on Hedera, the market opportunity, user demand and regulatory context had to be understood.",
      approach:
        "Swisscoast conducted a market research study on a digital Swiss Currency together with the Hedera Hashgraph Association, covering demand, use cases and the Swiss regulatory environment following the DLT Act.",
      results: [
        "Published research groundwork at digitalswissfranc.ch",
        "Directly informed the design of HLiquity and HCHF",
        "Established Swisscoast as a research partner inside the Hedera ecosystem",
      ],
      link: "https://digitalswissfranc.ch",
    },
    {
      image: projectDchf,
      client: "UNICEF · and the first dCHF",
      title: "Early firsts: UNICEF smart contract and the digital Swiss Franc",
      sector: "International organisation · Ethereum",
      year: "2017–2018",
      challenge:
        "In 2017 almost no humanitarian organisation had used a smart contract, and no private company had issued a digital Swiss Franc.",
      approach:
        "Swisscoast programmed the first-ever smart contract for UNICEF, then launched dCHF — the first private digital Swiss Franc — on Ethereum on 20 March 2018, post block 52911611.",
      results: [
        "First smart contract for UNICEF, bringing DLT to an international humanitarian organisation",
        "First privately issued digital Swiss Franc on a public blockchain",
        "The dCHF contract remains verifiable on Etherscan",
      ],
      link: "https://etherscan.io/token/0xf412af62269a0b3b10ea727df81231cdc5bb6364#code",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Case Studies — Swiss Blockchain Projects | Swisscoast AG"
        description="Real Swisscoast client stories and results: ClimateActions with MyBluePlanet, BIDI biodiversity vouchers for Gemeinde Muri bei Bern, HLiquity and HCHF on Hedera, HORUS prediction markets, and the first UNICEF smart contract."
        path="/case-studies"
        keywords="blockchain case studies Switzerland, Swiss blockchain projects, Gemeinde Muri bei Bern BIDI, MyBluePlanet ClimateActions, HLiquity case study, Hedera Hashgraph Schweiz, Blockchain Referenzen Schweiz"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Swisscoast Case Studies",
          url: "https://swisscoast.org/case-studies",
          about: caseStudies.map((c) => ({
            "@type": "CreativeWork",
            name: c.title,
            about: c.client,
            dateCreated: c.year,
          })),
        }}
      />
      <Navigation />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-minimal text-muted-foreground mb-4">CASE STUDIES</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-architectural mb-6 sm:mb-8">
              Client Stories
              <br />
              And Results
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              Swiss municipalities, climate organisations, international institutions and DeFi
              protocols. Each story below describes the problem the client brought us, what we
              built, and what is live today.
            </p>
            <div className="mt-8">
              <Link
                to="/projects"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                ← ALL PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
            {caseStudies.map((study, index) => (
              <article key={index} className="group">
                <div className="relative overflow-hidden mb-6 sm:mb-10">
                  <img
                    src={study.image}
                    alt={`${study.client} — ${study.title}`}
                    className="w-full h-[35vh] sm:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-background/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-minimal text-foreground">{study.sector}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
                  <div>
                    <p className="text-minimal text-muted-foreground mb-2">CLIENT</p>
                    <h2 className="text-xl sm:text-2xl font-light text-architectural mb-4">
                      {study.client}
                    </h2>
                    <p className="text-minimal text-muted-foreground">{study.year}</p>
                  </div>

                  <div className="md:col-span-2 space-y-6 sm:space-y-8">
                    <h3 className="text-2xl sm:text-3xl font-light text-architectural">
                      {study.title}
                    </h3>

                    <div>
                      <p className="text-minimal text-muted-foreground mb-2">THE CHALLENGE</p>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-minimal text-muted-foreground mb-2">WHAT WE BUILT</p>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {study.approach}
                      </p>
                    </div>

                    <div>
                      <p className="text-minimal text-muted-foreground mb-3">RESULTS</p>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
                          >
                            <span className="text-foreground">—</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                      {study.link && (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                        >
                          VISIT →
                        </a>
                      )}
                      {study.internalLink && (
                        <Link
                          to={study.internalLink.to}
                          className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                        >
                          {study.internalLink.label} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural mb-6 sm:mb-8">
              Your Project
              <br />
              Could Be Next
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12">
              Municipality, NGO, bank or protocol — tell us what you want to make verifiable.
            </p>
            <Link
              to="/contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group py-2"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
