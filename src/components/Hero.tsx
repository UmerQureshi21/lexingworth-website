import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 400);
  }, []);

  return (
    <div className="h-[800px] sm:h-[600px] w-full relative bg-[url('/future-business-building-2.png')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />

      <div className="relative z-10 gap-[40px] flex flex-col items-center justify-center h-full">
        {/* Title slides up and fades in */}
        <h1
          className={`text-white text-[60px] sm:text-[100px] lg:text-[130px] text-center w-full font-bold
                       transition-all duration-1000 ease-out
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-20 opacity-0"
                       }`}
        >
          Lexingworth Capital
        </h1>

        {/* Subtitle slides up and fades in with delay */}
        {/* <p
          className={`text-center text-[30px] text-white w-[90%]
                      transition-all duration-1000 ease-out delay-300
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`}
        >
          Investment club at
          <span className="text-[var(--color-accent)]">McMaster University</span>
        </p> */}

        {/* Button scales in and fades in with longest delay */}
        {/* <button
          className={`bg-[var(--color-primary)] text-white text-[40px] w-[300px] rounded-[100px] h-[100px]
                           relative overflow-hidden group
                           transition-all duration-1000 ease-out delay-500
                           hover:scale-110 hover:shadow-2xl
                           ${
                             isVisible
                               ? "scale-100 opacity-100"
                               : "scale-75 opacity-0"
                           }`}
        >
         
          <span
            className="absolute inset-0 bg-[var(--color-accent)] translate-x-[-100%] 
                         group-hover:translate-x-0 transition-transform duration-500"
          ></span>
          <span className="relative z-10 group-hover:text-[var(--color-primary)] transition-colors duration-300">
            Join us Now!
          </span>
        </button> */}
      </div>
    </div>
  );
}
