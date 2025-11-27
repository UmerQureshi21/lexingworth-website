import { useEffect, useState } from "react";
import NavBarLink from "./NavBarLink";

export default function TeamNavbar() {
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
      <div className="h-[170px] bg-[#F4F1DE]">
        <div className="w-full  relative right-[20px] gap-[50px] flex flex-col sm:flex-row items-center justify-center">
          <NavBarLink
            page="/our-team/analysts"
            text="Analysts"
            widthPercent={40}
            fontSize={clientWidth >= 900 ? 100 : 30}
            alignment="center"
            colour="black"
          />
          <NavBarLink
            page="/our-team/execs"
            text="Executives"
            widthPercent={40}
            fontSize={clientWidth >= 900 ? 100 : 30}
            alignment="center"
            colour="black"
          />
        </div>
      </div>
    </>
  );
}
