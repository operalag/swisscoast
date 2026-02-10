import Navigation from "@/components/Navigation";
import teamToni from "@/assets/team-toni.jpg";
import teamRoman from "@/assets/team-roman.png";
import teamFredy from "@/assets/team-fredy.png";
import teamStefan from "@/assets/team-stefan.jpg";
import teamSilas from "@/assets/team-silas.jpg";
import teamAndreas from "@/assets/team-andreas.png";

const About = () => {
  const team = [
    { name: "Toni Caradonna", role: "President of the Board", linkedin: "https://www.linkedin.com/in/caradonna/", image: teamToni },
    { name: "Roman Eyholzer", role: "CFO & Board", linkedin: "https://www.linkedin.com/in/roman-eyholzer-3053a1114/", image: teamRoman },
    { name: "Silas Stulz", role: "CTO", linkedin: "https://www.linkedin.com/in/silas-stulz-96576214b/", image: teamSilas },
    { name: "Stefan Deiss", role: "Board", linkedin: "https://www.linkedin.com/in/stefandeiss/", image: teamStefan },
    { name: "Fredy Camacho", role: "CMO & PM", linkedin: null, image: teamFredy },
    { name: "Dr. iur. Andreas Gmünder", role: "CLO", linkedin: "https://www.linkedin.com/in/andreasgmuender/", image: teamAndreas },
  ];

  const milestones = [
    { year: "2003", event: "Swisscoast AG founded in Pfäffikon SZ" },
    { year: "2017", event: "First-ever smart contract for UNICEF" },
    { year: "2018", event: "Launch of the first private digital Swiss franc (dCHF) on Ethereum" },
    { year: "2020", event: "Swiss DLT Act ratified by Parliament" },
    { year: "2023", event: "Digital Swiss Currency market research with Hedera Hashgraph Association" },
    { year: "2024", event: "HLiquity goes live on Hedera—HCHF stablecoin launched" },
    { year: "2025", event: "HORUS decentralized prediction markets launched on Hedera" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Intro */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 sm:mb-32">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">ABOUT</h1>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural mb-8 sm:mb-12">
                  Swiss Innovation,
                  <br />
                  Global Impact
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Swisscoast AG is a Swiss innovation technology company specialised in 
                    blockchain applications, decentralised finance, and distributed ledger 
                    technology. Rooted in the heart of Switzerland, we pioneer transformative 
                    DLT solutions for leading international organisations and global communities.
                  </p>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our commitment goes beyond technology and innovation. We are passionate 
                    about shaping a sustainable future—ensuring that our developments not only 
                    lead the way in innovation but also foster a responsible digital ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4 sm:mb-6">OUR VALUES</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                      <h4 className="text-lg font-medium mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Pushing the boundaries of what's possible with distributed ledger technology</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                      <h4 className="text-lg font-medium mb-2">Sustainability</h4>
                      <p className="text-muted-foreground">Zero-carbon solutions committed to economic and environmental responsibility</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-4 sm:pl-6">
                      <h4 className="text-lg font-medium mb-2">Integrity</h4>
                      <p className="text-muted-foreground">Swiss precision and transparency in everything we build</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 sm:pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">FOUNDED</h3>
                      <p className="text-xl">2003</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">LOCATION</h3>
                      <p className="text-xl">Pfäffikon SZ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16 sm:mb-32">
              <h3 className="text-minimal text-muted-foreground mb-4">MILESTONES</h3>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
                Our Journey
              </h4>
              <div className="space-y-6 sm:space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4 sm:space-x-8 group">
                    <span className="text-xl sm:text-2xl font-light text-architectural min-w-[60px] sm:min-w-[80px]">
                      {milestone.year}
                    </span>
                    <div className="border-l-2 border-border group-hover:border-foreground transition-colors duration-300 pl-4 sm:pl-8 py-2">
                      <p className="text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-minimal text-muted-foreground mb-4">TEAM</h3>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-light text-architectural mb-10 sm:mb-16">
                Meet the Minds Behind Swisscoast
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
                {team.map((member, index) => (
                  <div key={index} className="group">
                    <div className="w-full aspect-square bg-muted mb-4 sm:mb-6 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                    <h5 className="text-sm sm:text-lg font-medium mb-1">{member.name}</h5>
                    <p className="text-minimal text-muted-foreground mb-2 sm:mb-3">{member.role}</p>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
                      >
                        LINKEDIN →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
