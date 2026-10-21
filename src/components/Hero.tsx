import heroImage from "@/assets/hero-swisscoast-blue.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Swisscoast AG — Swiss technology partner since 2003">
      <img
        src={heroImage}
        alt="Snow-covered Swiss Alps reflected in a deep blue mountain lake"
        width={1920}
        height={1088}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-minimal text-snow/70 mb-4 sm:mb-6 reveal">SWISS PRECISION · SINCE 2003</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-snow text-architectural mb-6 sm:mb-8 reveal">
          SWISSCOAST
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-snow/85 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          A Swiss technology partner for universities, enterprises, DLT economies and foundations around the world
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal-delayed hidden sm:block">
        <div className="w-px h-16 bg-snow/40 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
