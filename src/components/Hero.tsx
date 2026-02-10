import heroImage from "@/assets/hero-swisscoast.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Swisscoast AG - DLT Innovation on Hedera Hashgraph">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-minimal text-white/60 mb-4 sm:mb-6 reveal">DLT IS OUR DNA</p>
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-white text-architectural mb-6 sm:mb-8 reveal">
          SWISSCOAST
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          Building decentralized finance on Hedera Hashgraph — from stablecoins to prediction markets
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed hidden sm:block">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
