import projectHliquity from "@/assets/project-hliquity.jpg";
import projectDchf from "@/assets/project-dchf.jpg";
import projectHorus from "@/assets/project-horus.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: projectHorus,
      title: "HORUS",
      location: "HEDERA NETWORK, 2025",
      description: "Decentralized prediction markets on Hedera Hashgraph. Create and trade on outcomes with 3–5 second finality, bond escalation for accuracy, DAO governance, and HORUS token staking rewards.",
      link: "https://thehorus.xyz"
    },
    {
      image: projectHliquity,
      title: "HLIQUITY PROTOCOL",
      location: "HEDERA NETWORK, 2024",
      description: "The first decentralized borrowing protocol on Hedera. Interest-free loans using HBAR as collateral, issuing HCHF—a stablecoin pegged to the Swiss Franc. Non-custodial, immutable, and governance-free.",
      link: "https://hliquity.org"
    },
    {
      image: projectDchf,
      title: "PRIVATE DIGITAL SWISS FRANC (dCHF)",
      location: "ETHEREUM, 2018",
      description: "The first-ever private digital Swiss franc, launched on March 20, 2018, post block 52911611. A pioneering stablecoin setting a new standard in the crypto landscape.",
      link: null
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">KEY PROJECTS</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural">
              Our Milestones
            </h3>
          </div>
          
          <div className="space-y-16 sm:space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[50vh] sm:h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-6 sm:mt-8 grid md:grid-cols-3 gap-4 sm:gap-8">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-light text-architectural mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300"
                      >
                        LEARN MORE →
                      </a>
                    )}
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

export default Portfolio;
