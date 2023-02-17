function Hero() {
  return (
    <div id="Hero" className="w-full h-full min-h-screen flex flex-col">
      <div className="absolute inset-0 z-0 rounded-br-[200px] overflow-hidden">
        <video
          src="https://indonesiacomiccon.com/media/bg-hero.mp4"
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-10 -translate-y-20 sm:translate-y-0 rotate-[-45deg]">
        <img
          src="https://indonesiacomiccon.com/_nuxt/img/chibi-4.ab835d9.svg"
          alt="mascot"
          className="pointer-event-none w-32 sm:w-40 lg:w-48 xl:w-64 2xl:w-80 animate-slow-bounce-1"
        />
      </div>
    </div>
  );
}

export default Hero;
