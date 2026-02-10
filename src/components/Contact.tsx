const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Shape
                <br />
                The Future of Finance
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:office@swisscoast.ch" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    office@swisscoast.ch
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">HEADQUARTERS</h4>
                  <address className="text-xl not-italic">
                    Schindellegistrasse 73
                    <br />
                    8808 Pfäffikon SZ, Switzerland
                  </address>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">REGISTRATION</h4>
                  <p className="text-xl">CH 110.173.134</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">CONNECT</h4>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/company/swisscoast/" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/swisscoast" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    X (Twitter)
                  </a>
                  <a href="https://github.com/SwisscoastAG" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  With Swisscoast, you choose a partner at the forefront of DLT innovation, 
                  committed to building a sustainable digital ecosystem. We are shaping the 
                  future of finance and ensuring it is sustainable for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
