import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Swisscoast AG — Swiss Technology Partner in Pfäffikon SZ since 2003"
        description="Swisscoast AG, founded in 2003 as Scenic Swisscoast GmbH, is a Swiss technology company in Pfäffikon SZ serving universities, enterprises, DLT economies and foundations worldwide."
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
          alternateName: "Scenic Swisscoast GmbH",
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
          areaServed: "Worldwide",
          knowsLanguage: ["de-CH", "en"],
          knowsAbout: ["Software development", "Distributed ledger technology", "Technology advisory"],
          sameAs: [
            "https://www.linkedin.com/company/swisscoast/",
            "https://twitter.com/swisscoast",
            "https://github.com/SwisscoastAG",
          ],
        }}
      />
      <Navigation />
      <Hero />


      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
