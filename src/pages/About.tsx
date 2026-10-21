import Navigation from "@/components/Navigation";
import Seo from "@/components/Seo";

const About = () => {
  const values = [
    ["Discretion", "We work quietly and confidentially, in the Swiss tradition."],
    ["Precision", "Careful engineering and clear thinking in everything we deliver."],
    ["Longevity", "Partnerships built for years, not for single projects."],
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="About Swisscoast AG — Swiss Technology Company since 2003"
        description="Swisscoast AG was founded in 2003 as Scenic Swisscoast GmbH and is headquartered in Pfäffikon SZ, Switzerland. We serve universities, enterprises, DLT economies and foundations worldwide."
        path="/about"
      />
      <Navigation />
      <section className="pt-28 sm:pt-40 pb-16 sm:pb-32 bg-sky">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h1 className="text-minimal text-primary mb-4">ABOUT</h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural mb-8 sm:mb-12">
                Swiss Roots,
                <br />
                Global Partners
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Swisscoast AG was founded in 2003 as Scenic Swisscoast GmbH. In 2024 the company
                  became a stock corporation and moved its headquarters to Pfäffikon SZ.
                </p>
                <p>
                  Today we create, deliver and advise on software and digital technology for
                  universities, enterprises, DLT economies and foundations all over the world.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {values.map(([title, text]) => (
                <div key={title} className="rounded-lg bg-card border border-border p-6 shadow-elegant">
                  <h3 className="text-lg font-medium text-primary mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="text-minimal text-primary mb-2">FOUNDED</p>
                  <p className="text-xl">2003</p>
                </div>
                <div>
                  <p className="text-minimal text-primary mb-2">LOCATION</p>
                  <p className="text-xl">Pfäffikon SZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
