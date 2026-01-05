function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Beach background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://travali.netlify.app/Images/hero.png")',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Text overlay - centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
        <div className="text-center max-w-3xl">
          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Explore the World with us
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          
          {/* Get Started button */}
          <button className="px-8 py-4 bg-transparent border-2 border-amber-800 text-white text-lg font-semibold rounded-lg hover:bg-amber-800/20 transition-all duration-300 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
