import Navigation from "@/components/Navigation";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "DECENTRALIZED FINANCE",
      description: "Pioneering DeFi applications and protocols that transform the financial landscape. From borrowing protocols to liquidity solutions—we make decentralized finance accessible and seamlessly integrated into business operations."
    },
    {
      number: "02", 
      title: "STABLE CURRENCY SOLUTIONS",
      description: "Creating and deploying stable digital currencies pegged to reliable fiat assets like the Swiss Franc. Our track record includes the first private digital Swiss franc (dCHF) in 2018 and HCHF on Hedera in 2024."
    },
    {
      number: "03",
      title: "SMART CONTRACT ENGINEERING",
      description: "Designing, developing, and auditing smart contracts on leading blockchain networks including Ethereum and Hedera. Security-first approach with comprehensive third-party audits."
    },
    {
      number: "04",
      title: "DLT CONSULTING & RESEARCH",
      description: "Strategic advisory on distributed ledger technology adoption, tokenisation strategies, and regulatory compliance. Market research studies on digital currencies and DeFi ecosystems."
    },
    {
      number: "05",
      title: "PROTOCOL DEVELOPMENT",
      description: "End-to-end development of decentralized protocols—from architecture design and smart contract implementation to frontend SDKs and launch kits for ecosystem operators."
    },
    {
      number: "06",
      title: "SUSTAINABLE BLOCKCHAIN",
      description: "Zero-carbon DLT solutions that reflect our commitment to economic and environmental sustainability. Building responsible digital ecosystems for generations to come."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">EXPERTISE</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                What We Build
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mt-8">
                Swisscoast combines deep blockchain expertise with Swiss precision 
                to deliver innovative DLT solutions for the financial industry and beyond.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
