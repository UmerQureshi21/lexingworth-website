import { useEffect, useState } from "react";
import PopUp from "./PopUp";
import NavBarLink from "./NavBarLink";
import { NavLink } from "react-router";

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
      <div className="fixed w-full h-[75px] z-[500] flex items-center justify-between ">
        {/* Logo Section */}
        <NavLink to={"/home"} className="group ml-4">
          <img
            src="/lexingworth-logo.png"
            alt="Lexingworth Capital"
            className="h-[36px] w-auto object-contain brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>
        {clientWidth < 1100 ? (
          <PopUp />
        ) : (
          <div className="w-[400px] mr-6 flex items-center justify-between">
            <NavBarLink
              page="/home"
              text="Home"
              widthPercent={18}
              fontSize={14}
              alignment="center"
              colour="white"
            />
            <NavBarLink
              page="/about"
              text="About"
              widthPercent={18}
              fontSize={14}
              alignment="center"
              colour="white"
            />
            <NavBarLink
              page="/fund"
              text="Fund"
              widthPercent={18}
              fontSize={14}
              alignment="center"
              colour="white"
            />
            <NavBarLink
              page="/events"
              text="Events"
              widthPercent={18}
              fontSize={14}
              alignment="center"
              colour="white"
            />
            <NavBarLink
              page="/join"
              text="Join"
              widthPercent={18}
              fontSize={14}
              alignment="center"
              colour="white"
            />
          </div>
        )}
      </div>
    </>
  );
}
