export const audiences = [
  {
    number: "01",
    title: "UNIVERSITIES",
    description: "Research partnerships, applied technology studies and teaching support — helping academic institutions explore emerging technologies with practical depth.",
  },
  {
    number: "02",
    title: "ENTERPRISES",
    description: "Strategy, architecture and software engineering for companies modernising their operations, products and digital infrastructure.",
  },
  {
    number: "03",
    title: "DLT ECONOMIES",
    description: "Advisory and engineering for distributed ledger ecosystems, networks and the organisations building on them.",
  },
  {
    number: "04",
    title: "FOUNDATIONS",
    description: "Discreet, long-term support for foundations and non-profits translating their mission into sound, sustainable technology.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-32 bg-sky" aria-label="Who Swisscoast serves">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-minimal text-primary mb-4">WHO WE SERVE</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural">
              Partners Around the World
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {audiences.map((a) => (
              <div
                key={a.number}
                className="group rounded-lg bg-card border border-border p-6 sm:p-10 shadow-elegant hover:-translate-y-1 hover:border-accent transition-all duration-500"
              >
                <span className="text-minimal text-accent">{a.number}</span>
                <h4 className="text-xl sm:text-2xl font-light mt-3 mb-3 sm:mb-4 text-architectural group-hover:text-primary transition-colors duration-500">
                  {a.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
