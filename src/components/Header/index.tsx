import clsx from "clsx";
import Brand from "./_Brand";
import Navigation from "./_Navigation";
function Header() {
  return (
    <div className="fixed z-[998] flex flex-col w-full">
      <div
        className={clsx(
          "w-full h-1",
          "bg-gradient-to-r from-gradient-green via-gradient-sky to-primary-pink"
        )}
      ></div>
      <header
        className={clsx(
          "w-full h-[4.5rem] lg:h=20 xl:h-24",
          "border-b border-white/10",
          "flex items-center",
          "transition-all duration-300 ease-in-out",
          "text-sm",
          "backdrop-blur-xl bg-black/100 [@support(backdrop-filter:blur(0px))]"
        )}
      >
        <div className="container h-full flex items-center justify-between">
          <Brand />
          <Navigation />
          <button className="p-2 lg:p-4 bg-primary-pink text-white font-semibold text-base lg:text-lg rounded-lg hover:scale-95">
            Get Your Ticket
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
