import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";

const MediaKit = () => {
  const teamAssets = [
    { name: "Toni Caradonna", role: "President of the Board", file: "/media-kit/team-toni.jpg" },
    { name: "Roman Eyholzer", role: "CFO & Board", file: "/media-kit/team-roman.png" },
    { name: "Silas Stulz", role: "CTO", file: "/media-kit/team-silas.jpg" },
    { name: "Stefan Deiss", role: "Board", file: "/media-kit/team-stefan.jpg" },
    { name: "Fredy Camacho", role: "CMO & PM", file: "/media-kit/team-fredy.png" },
    { name: "Dr. iur. Andreas Gmünder", role: "CLO", file: "/media-kit/team-andreas.png" },
  ];

  const projectAssets = [
    { name: "ClimateActions", file: "/media-kit/project-climateactions.jpg" },
    { name: "BIDI — Muri bei Bern", file: "/media-kit/project-bidi.jpg" },
    { name: "HLiquity Protocol", file: "/media-kit/project-hliquity.jpg" },
    { name: "HORUS", file: "/media-kit/project-horus.jpg" },
    { name: "HCHF / dCHF", file: "/media-kit/project-dchf.jpg" },
    { name: "Swisscoast key visual", file: "/media-kit/hero-swisscoast.jpg" },
  ];

  const facts = [
    ["Legal name", "Swisscoast AG"],
    ["Founded", "2003"],
    ["Headquarters", "Schindellegistrasse 73, 8808 Pfäffikon SZ, Switzerland"],
    ["UID", "CHE-110.173.134"],
    ["Press contact", "office@swisscoast.ch"],
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Media Kit — Logo, Team Photos & Press PDF | Swisscoast AG"
        description="Download the Swisscoast AG media kit: logo files, team portraits, project imagery, company facts and a press PDF. Swiss blockchain company based in Pfäffikon SZ."
        path="/media-kit"
        keywords="Swisscoast media kit, Swisscoast logo download, press kit Swiss blockchain, Medienmappe, Pressebilder, Swisscoast AG Pfäffikon"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Swisscoast AG Media Kit",
          url: "https://swisscoast.org/media-kit",
          description:
            "Logo files, team portraits, project imagery and a downloadable press PDF for Swisscoast AG.",
        }}
      />
      <Navigation />

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-minimal text-muted-foreground mb-4">PRESS &amp; MEDIA</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-architectural mb-6 sm:mb-8">
              Media Kit
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8">
              Everything you need to write about Swisscoast AG: logo, team portraits, project
              imagery, company facts and a two-page press PDF.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <a
                href="/swisscoast-media-kit.pdf"
                download
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group py-2"
              >
                DOWNLOAD MEDIA KIT (PDF) ↓
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
              </a>
              <Link
                to="/contact"
                className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              >
                ← CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-6">LOGO</h2>
              <div className="bg-muted p-8 sm:p-12 flex items-center justify-center mb-6">
                <img
                  src="/media-kit/swisscoast-logo.jpeg"
                  alt="Swisscoast AG logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <a
                href="/media-kit/swisscoast-logo.jpeg"
                download
                className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                DOWNLOAD LOGO ↓
              </a>
            </div>

            <div>
              <h2 className="text-minimal text-muted-foreground mb-6">COMPANY FACTS</h2>
              <dl className="space-y-4">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-b border-border pb-4">
                    <dt className="text-minimal text-muted-foreground mb-1">{k.toUpperCase()}</dt>
                    <dd className="text-base sm:text-lg">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <h3 className="text-minimal text-muted-foreground mb-3">BOILERPLATE</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Swisscoast AG is a Swiss blockchain innovation company from Pfäffikon SZ. It
                  builds DeFi protocols on Hedera Hashgraph — including HLiquity and the HCHF Swiss
                  Franc stablecoin — and real-world token programmes such as ClimateActions with
                  MyBluePlanet and BIDI biodiversity vouchers for Gemeinde Muri bei Bern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">TEAM PHOTOS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              {teamAssets.map((member) => (
                <div key={member.name} className="group">
                  <div className="w-full aspect-square bg-muted mb-3 overflow-hidden">
                    <img
                      src={member.file}
                      alt={`${member.name}, ${member.role}, Swisscoast AG`}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium">{member.name}</h3>
                  <p className="text-minimal text-muted-foreground mb-2">{member.role}</p>
                  <a
                    href={member.file}
                    download
                    className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    DOWNLOAD ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">PROJECT IMAGES</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {projectAssets.map((asset) => (
                <div key={asset.name} className="group">
                  <div className="w-full aspect-[3/2] bg-muted mb-3 overflow-hidden">
                    <img
                      src={asset.file}
                      alt={`${asset.name} — Swisscoast project image`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium mb-2">{asset.name}</h3>
                  <a
                    href={asset.file}
                    download
                    className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    DOWNLOAD ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-6">USAGE GUIDELINES</h2>
            <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
              <li>— Use the logo without distortion, recolouring or added effects.</li>
              <li>— Keep clear space around the logo equal to at least half its height.</li>
              <li>— Credit images as “Swisscoast AG”.</li>
              <li>— Do not imply partnership or endorsement without written agreement.</li>
            </ul>
            <p className="text-muted-foreground text-sm sm:text-base mt-8">
              Need high-resolution originals, an interview or a specific format? Write to{" "}
              <a
                href="mailto:office@swisscoast.ch"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                office@swisscoast.ch
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaKit;
