const About = () => {
  return (
    <section id="about" className="py-16 sm:py-32 bg-muted/20" aria-label="About Swisscoast AG - Hedera Hashgraph blockchain company">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural mb-8 sm:mb-12">
                Swiss Innovation,
                <br />
                Global Impact
              </h3>
              
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Swisscoast AG, headquartered in Pfäffikon SZ, is a Swiss innovation 
                  technology company specialised in blockchain applications and distributed 
                  ledger technology on Hedera Hashgraph. We bridge the gap between traditional 
                  finance and the digital realm.
                </p>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Founded in 2003, we have been at the forefront of DLT innovation—from 
                  programming UNICEF's first-ever smart contract in 2017 to launching 
                  the first private digital Swiss franc in 2018, deploying HLiquity on 
                  Hedera in 2024, and building HORUS prediction markets in 2025.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 sm:space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-4 sm:mb-6">OUR APPROACH</h4>
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                    <h5 className="text-lg font-medium mb-2">Research-Driven</h5>
                    <p className="text-muted-foreground text-sm sm:text-base">Market studies on digital currencies with the Hedera Hashgraph Association</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                    <h5 className="text-lg font-medium mb-2">Security-First</h5>
                    <p className="text-muted-foreground text-sm sm:text-base">Comprehensive audits by firms like Omniscia ensure protocol-level security</p>
                  </div>
                  <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                    <h5 className="text-lg font-medium mb-2">Sustainability</h5>
                    <p className="text-muted-foreground text-sm sm:text-base">Zero-carbon DLT solutions on Hedera's carbon-negative network</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 sm:pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">FOUNDED</h4>
                    <p className="text-xl">2003</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                    <p className="text-xl">Pfäffikon SZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
