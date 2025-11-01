import { useEffect, useState } from "react";

export default function TeamHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 400);
  }, []);

  return (
    <div className="h-[500px] w-full relative bg-[url('/future-business-building.jpg')] bg-cover bg-center overflow-hidden">
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FDBF57] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-6">
        {/* Small accent line */}
        <div
          className={`w-20 h-1 bg-[#FDBF57] transition-all duration-1000 ease-out
                        ${
                          isVisible
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        }`}
        ></div>

        {/* Main title */}
        <h1
          className={`text-white text-5xl sm:text-6xl lg:text-7xl text-center font-bold leading-tight
                       transition-all duration-1000 ease-out delay-200
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-20 opacity-0"
                       }`}
        >
          Meet the <span className="text-[#FDBF57]">Team</span> Behind
          <br />
          Lexingworth
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/90 text-xl sm:text-2xl text-center max-w-3xl leading-relaxed
                      transition-all duration-1000 ease-out delay-400
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`}
        >
          Driven students building the future of finance at McMaster University
        </p>




      </div>
    </div>
  );
}