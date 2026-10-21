import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";
import { audiences } from "@/components/Services";

const capabilities = [
  ["ADVISORY", "Independent guidance on technology strategy and digital transformation."],
  ["SOFTWARE ENGINEERING", "Design, development and delivery of reliable software products."],
  ["DISTRIBUTED LEDGERS", "Architecture and integration for DLT-based systems."],
  ["RESEARCH & EDUCATION", "Studies, workshops and learning programmes on emerging technology."],
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Expertise — Swisscoast AG"
        description="Advisory, software engineering, distributed ledger technology and research for universities, enterprises, DLT economies and foundations worldwide."
        path="/services"
      />
      <Navigation />
      <section className="pt-28 sm:pt-40 pb-16 sm:pb-32 bg-sky">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-minimal text-primary mb-4">EXPERTISE</h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural">How We Help</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mt-8">
              Swiss precision applied to technology — for the institutions shaping what comes next.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12 sm:mt-20">
              {capabilities.map(([t, d], i) => (
                <div key={t} className="rounded-lg bg-card border border-border p-6 sm:p-10 shadow-elegant">
                  <span className="text-minimal text-accent">0{i + 1}</span>
                  <h3 className="text-xl sm:text-2xl font-light mt-3 mb-3 text-architectural">{t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <h2 className="text-minimal text-primary mt-20 mb-6">WHO WE SERVE</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((a) => (
                <div key={a.number} className="rounded-lg bg-ocean text-snow p-6">
                  <h3 className="text-lg font-light mb-2">{a.title}</h3>
                  <p className="text-sm text-snow/80 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
