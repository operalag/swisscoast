import { useState } from "react";
import Navigation from "@/components/Navigation";
import projectHliquity from "@/assets/project-hliquity.jpg";
import projectDefi from "@/assets/project-defi.jpg";
import projectDchf from "@/assets/project-dchf.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects = [
    {
      image: projectHliquity,
      title: "HLIQUITY PROTOCOL",
      location: "HEDERA NETWORK, 2024",
      category: "DEFI",
      description: "The first decentralized borrowing protocol on Hedera. Allows interest-free loans using HBAR as collateral. Issues HCHF, a stablecoin pegged to the Swiss Franc. Non-custodial, immutable, governance-free. Audited by Omniscia.",
      tech: "HEDERA / SOLIDITY",
      year: "2024"
    },
    {
      image: projectDchf,
      title: "HCHF STABLECOIN",
      location: "HEDERA NETWORK, 2024",
      category: "STABLECOIN",
      description: "A decentralized stablecoin pegged to the Swiss Franc, issued through the HLiquity borrowing protocol. Backed by HBAR collateral with a minimum ratio of 110%. Features a Stability Pool and redemption mechanism for price stability.",
      tech: "HEDERA / HTS",
      year: "2024"
    },
    {
      image: projectDefi,
      title: "DIGITAL SWISS FRANC (dCHF)",
      location: "ETHEREUM, 2018",
      category: "STABLECOIN",
      description: "The first-ever private digital Swiss franc. Launched on March 20, 2018 on Ethereum, post block 52911611. Set a new standard for stable digital currencies.",
      tech: "ETHEREUM / ERC-20",
      year: "2018"
    },
    {
      image: projectHliquity,
      title: "UNICEF SMART CONTRACT",
      location: "ETHEREUM, 2017",
      category: "SMART CONTRACT",
      description: "Programmed the first-ever smart contract for UNICEF—a historic milestone bringing blockchain technology to international humanitarian organisations.",
      tech: "ETHEREUM / SOLIDITY",
      year: "2017"
    },
    {
      image: projectDefi,
      title: "DIGITAL SWISS CURRENCY RESEARCH",
      location: "SWITZERLAND, 2023",
      category: "RESEARCH",
      description: "Market research study on a digital Swiss Currency conducted with the Hedera Hashgraph Association. This research laid the groundwork for HLiquity and future innovations.",
      tech: "RESEARCH / HEDERA",
      year: "2023"
    },
    {
      image: projectDchf,
      title: "HLQT GOVERNANCE TOKEN",
      location: "HEDERA NETWORK, 2024",
      category: "DEFI",
      description: "The HLQT token rewards ecosystem participants. Stakers earn fees from borrowing and redemptions, creating a decentralised incentive system that enhances protocol liquidity.",
      tech: "HEDERA / HTS",
      year: "2024"
    }
  ];

  const categories = ["ALL", "DEFI", "STABLECOIN", "SMART CONTRACT", "RESEARCH"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                OUR PROJECTS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                From pioneering stablecoins to groundbreaking DeFi protocols—each project 
                represents a milestone in our mission to shape the sustainable future of finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">TECH</p>
                        <p className="text-foreground">{project.tech}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">YEAR</p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Build
              <br />
              The Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how DLT can transform your business
            </p>
            <a 
              href="/contact" 
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
