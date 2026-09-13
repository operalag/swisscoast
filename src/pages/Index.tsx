import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Swisscoast AG — Swiss Blockchain Company in Pfäffikon SZ"
        description="Swisscoast AG is a Swiss blockchain and DeFi company in Pfäffikon SZ, Canton Schwyz. We build Hedera Hashgraph protocols, Swiss Franc stablecoins (HCHF, dCHF) and real-world token programmes such as ClimateActions and BIDI."
        path="/"
        keywords="Blockchain Firma Schweiz, Schweizer Blockchain Unternehmen, Blockchain Pfäffikon SZ, Kanton Schwyz, Blockchain Entwicklung Schweiz, Smart Contract Entwickler Schweiz, Hedera Hashgraph Schweiz, digitaler Schweizer Franken, Schweizer Stablecoin, Web3 Agentur Schweiz, DLT Beratung Schweiz, Swisscoast AG"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Swisscoast AG",
          url: "https://swisscoast.org",
          image: "https://swisscoast.org/media-kit/swisscoast-logo.jpeg",
          email: "office@swisscoast.ch",
          foundingDate: "2003",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Schindellegistrasse 73",
            addressLocality: "Pfäffikon",
            addressRegion: "SZ",
            postalCode: "8808",
            addressCountry: "CH",
          },
          geo: { "@type": "GeoCoordinates", latitude: 47.2033, longitude: 8.7797 },
          areaServed: [
            { "@type": "Country", name: "Switzerland" },
            { "@type": "AdministrativeArea", name: "Canton Schwyz" },
            { "@type": "AdministrativeArea", name: "Zurich" },
          ],
          knowsLanguage: ["de-CH", "en"],
          knowsAbout: [
            "Blockchain development Switzerland",
            "Hedera Hashgraph",
            "Swiss Franc stablecoins",
            "Smart contract development",
            "Tokenization",
            "Municipal token programmes",
          ],
          sameAs: [
            "https://www.linkedin.com/company/swisscoast/",
            "https://twitter.com/swisscoast",
            "https://github.com/SwisscoastAG",
          ],
        }}
      />
      <Navigation />
      <Hero />

      <section className="py-12 sm:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <p className="text-minimal text-muted-foreground mb-3">BASED IN SWITZERLAND</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A Swiss blockchain company in Pfäffikon SZ, Canton Schwyz — working with clients
                across Zurich, Bern and the wider Swiss market since 2003.
              </p>
            </div>
            <div>
              <p className="text-minimal text-muted-foreground mb-3">WHAT WE DO</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Smart contract development, DLT strategy, tokenisation and Swiss Franc stablecoins
                on Hedera Hashgraph — plus token programmes for municipalities and NGOs.
              </p>
            </div>
            <div>
              <p className="text-minimal text-muted-foreground mb-3">PROOF OF WORK</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                ClimateActions with MyBluePlanet, BIDI for Gemeinde Muri bei Bern, HLiquity and HCHF
                on Hedera, and the first smart contract for UNICEF.
              </p>
              <Link
                to="/case-studies"
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                READ THE CASE STUDIES →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;
