const Services = () => {
  const services = [
    {
      number: "01",
      title: "DECENTRALIZED FINANCE",
      description: "Pioneering DeFi applications and protocols on Hedera Hashgraph that transform the financial landscape. We make decentralized finance accessible and integrate it seamlessly into business operations."
    },
    {
      number: "02", 
      title: "STABLE CURRENCY SOLUTIONS",
      description: "Creating and deploying stable digital currencies pegged to reliable fiat assets. From the first private digital Swiss franc (dCHF) to HCHF on Hedera Hashgraph—promoting financial stability and growth."
    },
    {
      number: "03",
      title: "PREDICTION MARKETS",
      description: "Building decentralized prediction market protocols on Hedera. HORUS enables trustless outcome trading with bond escalation, DAO governance, and token staking rewards."
    },
    {
      number: "04",
      title: "SMART CONTRACT ENGINEERING",
      description: "Building secure, audited smart contracts on Hedera Hashgraph and Ethereum. From UNICEF's first smart contract in 2017 to production-grade DeFi protocols."
    },
    {
      number: "05",
      title: "SUSTAINABLE DLT",
      description: "Developing zero-carbon blockchain solutions on Hedera's carbon-negative network. Innovation and environmental responsibility go hand in hand."
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-32 bg-background" aria-label="Swisscoast expertise in Hedera Hashgraph DeFi">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">OUR EXPERTISE</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural">
              What We Build on Hedera
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-10 sm:gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
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
  );
};

export default Services;
