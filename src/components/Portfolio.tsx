import projectHliquity from "@/assets/project-hliquity.jpg";
import projectDefi from "@/assets/project-defi.jpg";
import projectDchf from "@/assets/project-dchf.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: projectHliquity,
      title: "HLIQUITY PROTOCOL",
      location: "HEDERA NETWORK, 2024",
      description: "The first decentralized borrowing protocol on Hedera. Interest-free loans using HBAR as collateral, issuing HCHF—a stablecoin pegged to the Swiss Franc. Non-custodial, immutable, and governance-free."
    },
    {
      image: projectDchf,
      title: "PRIVATE DIGITAL SWISS FRANC (dCHF)",
      location: "ETHEREUM, 2018",
      description: "The first-ever private digital Swiss franc, launched on March 20, 2018, post block 52911611. A pioneering stablecoin setting a new standard in the crypto landscape."
    },
    {
      image: projectDefi,
      title: "UNICEF SMART CONTRACT",
      location: "ETHEREUM, 2017",
      description: "Programmed the first-ever smart contract for UNICEF, marking a historic milestone in bringing blockchain technology to international humanitarian organisations."
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">KEY PROJECTS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Our Milestones
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
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

export default Portfolio;
