import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import NavBarLink from "./NavBarLink";

export default function Navbar() {
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setClientWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed w-full border-b-[1px] border-b-black h-[75px] z-[500] bg-[#F4F1DE] flex items-center justify-between ">
        {/* Logo Section */}
        <div
          className={`flex items-center justify-around w-[250px] group
                        transition-all duration-700 delay-200
                        `}
        >
          <div className="relative">
            <img
              src="/apple-touch-icon.png"
              alt=""
              className="w-[45px] h-[45px] border-[0.5px] rounded-lg transition-all duration-300 
                         group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg"
            />
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-lg bg-[#FDBF57]/0 group-hover:bg-[#FDBF57]/20 
                            transition-all duration-300 blur-sm"
            ></div>
          </div>
          <h2 className="text-[30px] text-[#283618] font-bold relative overflow-hidden">
            Lexingworth
            {/* Animated underline */}
            <span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FDBF57] 
                           group-hover:w-full transition-all duration-500 ease-out"
            ></span>
          </h2>
        </div>
        {clientWidth < 900 ? (
          <PopUp />
        ) : (
          <div className="w-[40%]  relative right-[20px] flex items-center justify-between">
            <NavBarLink
              page="/"
              text="Home"
              widthPercent={20}
              fontSize={15}
              alignment="center"
              colour="black"
            />
            <NavBarLink
              page="/our-team"
              text="Our Team"
              widthPercent={20}
              fontSize={15}
              alignment="center"
              colour="black"
            />
            <NavBarLink
              page="/our-team"
              text="About"
              widthPercent={20}
              fontSize={15}
              alignment="center"
              colour="black"
            />
            {/* Contact Button with sick animations */}
            <button
              className="bg-[#283618] text-white h-[40px] w-[20%] rounded-[20px] 
                             hover:cursor-pointer relative overflow-hidden group/btn
                             transition-all duration-300 hover:scale-105 hover:shadow-xl
                             border-2 border-[#283618] hover:border-[#FDBF57]"
            >
              {/* Sliding background effect */}
              <span
                className="absolute inset-0 bg-[#FDBF57] translate-y-full 
                             group-hover/btn:translate-y-0 transition-transform duration-300"
              ></span>
              <span
                className="relative z-10 font-semibold group-hover/btn:text-[#283618] 
                             transition-colors duration-300"
              >
                Contact
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
