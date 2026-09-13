import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import projectClimateactions from "@/assets/project-climateactions.jpg";

const ClimateActions = () => {
  const goals = [
    {
      title: "From awareness to repeated action",
      text: "Most climate communication ends with information. ClimateActions ends with a completed action: a clean-up, a planting day, a food-waste challenge, a mobility decision.",
    },
    {
      title: "Make the effort countable",
      text: "Every action feeds a personal ClimateScore across four everyday areas — nutrition, consumption, mobility and housing — so progress is visible instead of vague.",
    },
    {
      title: "Reward locally, not abstractly",
      text: "ClimateTokens are earned for action and redeemed with participating partners and shops nearby, keeping the value of climate engagement in the region.",
    },
    {
      title: "Make the record verifiable",
      text: "Token issuance is confirmed on a public ledger, so what was earned and redeemed can be checked — without asking users to learn anything about blockchain.",
    },
    {
      title: "Remove every excuse not to start",
      text: "Free, no subscription, no password. An email address and roughly one minute on a phone is the whole onboarding.",
    },
  ];

  const impact = [
    {
      label: "Reach",
      value: "Live in Switzerland",
      text: "Available nationwide at climateactions.ch, built for smartphones and usable straight from the browser or installed as an app.",
    },
    {
      label: "Actions",
      value: "Local & national",
      text: "Clean-ups, planting, climate-protection projects, mobility and consumption challenges, plus national campaigns such as the week against food waste.",
    },
    {
      label: "Rewards",
      value: "ClimateTokens",
      text: "Credited in the app, confirmed on the blockchain, redeemable with local partners — including benefits such as SBB travel offers.",
    },
    {
      label: "Community",
      value: "Teams & shared impact",
      text: "A community impact view shows the combined contribution of the MyBluePlanet community, not just individual scores.",
    },
  ];

  const collaborate = [
    {
      title: "Local businesses & service providers",
      text: "Accept ClimateTokens and become a redemption partner. You gain visibility with a climate-motivated local audience and footfall from people who just did something for their community.",
      action: "Ask about partner onboarding",
    },
    {
      title: "Municipalities & cantons",
      text: "Run your own action programme — the same pattern we delivered for Gemeinde Muri bei Bern with BIDI biodiversity vouchers. Residents act, the municipality gets community-level impact data.",
      action: "Request a municipal briefing",
    },
    {
      title: "Companies & employers",
      text: "Give teams a measurable, voluntary climate programme with challenges and a shared score, instead of a one-off awareness campaign.",
      action: "Discuss a company challenge",
    },
    {
      title: "NGOs & campaign partners",
      text: "Bring your campaign into the app as an action or challenge and reach people at the moment they are ready to participate.",
      action: "Propose a campaign",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="ClimateActions — Swiss Climate App with On-Chain Rewards | Swisscoast"
        description="ClimateActions, built by Swisscoast AG with MyBluePlanet: join local climate actions in Switzerland, grow your ClimateScore, earn ClimateTokens confirmed on the blockchain and redeem them with local partners."
        path="/climateactions"
        keywords="ClimateActions, ClimateTokens, MyBluePlanet, Klima App Schweiz, climate app Switzerland, Klimaschutz App, blockchain rewards Switzerland, Swisscoast Pfäffikon"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ClimateActions",
          applicationCategory: "LifestyleApplication",
          operatingSystem: "Web, iOS, Android",
          url: "https://climateactions.ch",
          inLanguage: "de-CH",
          offers: { "@type": "Offer", price: "0", priceCurrency: "CHF" },
          author: {
            "@type": "Organization",
            name: "Swisscoast AG",
            url: "https://swisscoast.org",
          },
          publisher: { "@type": "Organization", name: "MyBluePlanet" },
          description:
            "Mobile-first Swiss climate app: complete local climate actions, grow a personal ClimateScore and earn ClimateTokens confirmed on the blockchain, redeemable with local partners.",
        }}
      />
      <Navigation />

      <section className="pt-24 sm:pt-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-minimal text-muted-foreground mb-4">
              LATEST PRODUCT · WITH MYBLUEPLANET
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-architectural mb-6">
              ClimateActions
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mb-8">
              Smart für dich. Und fürs Klima. A Swiss climate app where local action earns
              ClimateTokens — confirmed on the blockchain, redeemed in your neighbourhood.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <a
                href="https://climateactions.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group py-2"
              >
                OPEN CLIMATEACTIONS →
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
              </a>
              <Link
                to="/projects"
                className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                ← ALL PROJECTS
              </Link>
            </div>

            <div className="mt-10 sm:mt-16 overflow-hidden">
              <img
                src={projectClimateactions}
                alt="Swiss alpine landscape with hikers — ClimateActions by Swisscoast and MyBluePlanet"
                className="w-full h-[40vh] sm:h-[70vh] object-cover"
                width={1600}
                height={1072}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">HOW IT WORKS</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
              Three steps, one loop
            </h3>
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  step: "01",
                  title: "Take action",
                  text: "Join local actions: clean-ups, planting, climate-protection projects, food-waste and mobility challenges.",
                },
                {
                  step: "02",
                  title: "Earn ClimateTokens",
                  text: "Every completed action credits ClimateTokens in the app — confirmed on the blockchain.",
                },
                {
                  step: "03",
                  title: "Redeem locally",
                  text: "Spend your tokens with participating partners and shops near you, for example SBB travel benefits.",
                },
              ].map((item) => (
                <div key={item.step} className="border-t border-border pt-6">
                  <p className="text-minimal text-muted-foreground mb-4">{item.step}</p>
                  <h4 className="text-xl sm:text-2xl font-light text-architectural mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">GOALS</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
              What ClimateActions sets out to do
            </h3>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {goals.map((goal) => (
                <div key={goal.title} className="border-l-2 border-architectural pl-4 sm:pl-6">
                  <h4 className="text-lg sm:text-xl font-medium mb-3">{goal.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {goal.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">IMPACT</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
              Where the app stands today
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
              {impact.map((item) => (
                <div key={item.label} className="border-t border-border pt-6">
                  <p className="text-minimal text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-2xl sm:text-3xl font-light text-architectural mb-3">
                    {item.value}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-10 max-w-3xl">
              ClimateActions is built and operated together with MyBluePlanet. Participation
              figures are published inside the app's community impact view.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">COLLABORATE</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
              Ways to work with us
            </h3>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {collaborate.map((item) => (
                <div key={item.title} className="bg-background p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-medium mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                    {item.text}
                  </p>
                  <a
                    href={`mailto:office@swisscoast.ch?subject=ClimateActions — ${item.title}`}
                    className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    {item.action.toUpperCase()} →
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-20 text-center">
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Prefer to talk it through first?
              </p>
              <Link
                to="/contact"
                className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group py-2"
              >
                CONTACT SWISSCOAST
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateActions;
