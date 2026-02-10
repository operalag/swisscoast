const Services = () => {
  const services = [
    {
      number: "01",
      title: "DECENTRALIZED FINANCE",
      description: "Pioneering DeFi applications and protocols that transform the financial landscape. We make decentralized finance accessible and integrate it seamlessly into business operations."
    },
    {
      number: "02", 
      title: "STABLE CURRENCY SOLUTIONS",
      description: "Creating and deploying stable digital currencies pegged to reliable fiat assets. From the first private digital Swiss franc (dCHF) to HCHF on Hedera—promoting financial stability and growth."
    },
    {
      number: "03",
      title: "SMART CONTRACT DEVELOPMENT",
      description: "Building secure, audited smart contracts on leading blockchain networks. From UNICEF's first smart contract in 2017 to production-grade DeFi protocols on Hedera."
    },
    {
      number: "04",
      title: "SUSTAINABLE DLT",
      description: "Developing zero-carbon blockchain solutions that reflect our commitment to a sustainable future. Innovation and environmental responsibility go hand in hand."
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">OUR EXPERTISE</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              What We Build
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
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
  );
};

export default Services;
