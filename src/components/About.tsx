const About = () => {
  return (
    <section id="about" className="py-16 sm:py-32 bg-ocean text-snow" aria-label="About Swisscoast AG">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-minimal text-sky mb-4">ABOUT</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-light text-architectural mb-8 sm:mb-12">
              Rooted in Switzerland,
              <br />
              Working Worldwide
            </h3>
            <div className="space-y-6 text-base sm:text-lg text-snow/80 leading-relaxed">
              <p>
                Swisscoast AG began in 2003 as Scenic Swisscoast GmbH and has grown into a Swiss
                technology company headquartered in Pfäffikon SZ.
              </p>
              <p>
                We create, deliver and advise on software and digital technology — with the calm,
                precise and reliable approach Switzerland is known for.
              </p>
              <p>
                We closely follow the DogeOS launch through{" "}
                <a href="https://dogecompass.swisscoast.net/" target="_blank" rel="noopener noreferrer" className="text-snow underline underline-offset-4 hover:text-sky transition-colors">
                  DogeCompass
                </a>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["SINCE", "2003"],
              ["HOME", "Pfäffikon SZ"],
              ["REACH", "Worldwide"],
              ["FOCUS", "Software & DLT"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-snow/20 bg-snow/5 backdrop-blur p-6">
                <p className="text-minimal text-sky mb-2">{label}</p>
                <p className="text-xl sm:text-2xl font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
