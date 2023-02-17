import Comiccon from "./_SVGs/Comiccon";
import Indonesia from "./_SVGs/Indonesia";
import Tiktok from "./_SVGs/Tiktok";

function Brand() {
  return (
    <div className="flex items-center flex-shrink-0 cursor-pointer">
      <div className="flex flex-col gap-y-1.5 lg:gap-y-2.5">
        <div className="flex flex-col items-start lg:items-center gap-y-1 lg:gap-y-2">
          <Indonesia />
          <Comiccon />
        </div>
        <div className="flex items-center gap-x-1">
          <span className="text-white text-[10px] opacity-80 !leading-none">
            Presented by
          </span>
          <Tiktok />
        </div>
      </div>
      <div className="hidden lg:flex items-center flex-shrink-0 relative h-20">
        <div className="absolute z-0 bottom-0 left-0 -translate-x-[10%] w-1/3 aspect-square bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full blur-md opacity-40 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute z-0 top-0 left-4 -translate-x-1/4 w-1/3 aspect-square bg-sky-300 rounded-full blur-md opacity-60 hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src="https://indonesiacomiccon.com/_nuxt/img/unleash-chibi.2a778f5.webp"
          className="h-full pointer-events-none select-none animate-[slow-bounce-chibi_12s_linear_infinite]"
        />
        <img
          src="https://indonesiacomiccon.com/_nuxt/img/unleash-text.3976f27.webp"
          className="h-full pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

export default Brand;
