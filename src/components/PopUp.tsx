import { useEffect, useState } from "react";
import NavBarLink from "./NavBarLink";

export default function PopUp() {
  const clientHeight = window.outerHeight;
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);
  let [isClicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setClientWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock/unlock scroll when popup opens/closes
  useEffect(() => {
    if (isClicked) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isClicked]);

  function handleClick() {
    setClicked((prev) => !prev);
  }

  return (
    <>
      <div
        className="fixed right-0 z-[60] transition-all duration-500 ease-in-out bg-[#283618] flex flex-col items-center overflow-y-auto"
        style={{
          height: `${clientHeight}px`,
          top: `${0}px`,
          width: `${clientWidth}px`,
          transform: isClicked ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Close button - positioned at top right */}
        <button
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 hover:rotate-90 transition-all duration-300 border border-white/20 z-20"
          onClick={() => {
            setClicked((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="fill-white w-4 h-4"
          >
            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
          </svg>
        </button>

        <div className="w-[90%] relative z-10 mt-20">
          <div className="mb-8">
            <div className="w-16 h-1 bg-[#FDBF57] mb-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Navigate Your
              <br />
              <span className="text-[#FDBF57]">Financial Future</span>
            </h2>
          </div>
        </div>

        <div className="w-[90%] flex flex-col relative space-y-6 z-10">
          <div
            onClick={() => {
              setClicked((prev) => !prev);
            }}
          >
            <NavBarLink
              page="/"
              text="Home"
              widthPercent={90}
              fontSize={40}
              colour="white"
            />
          </div>
          <div
            onClick={() => {
              setClicked((prev) => !prev);
            }}
          >
            <NavBarLink
              page="/our-team"
              text="Our Team"
              widthPercent={90}
              fontSize={40}
              colour="white"
            />
          </div>
          <div
            onClick={() => {
              setClicked((prev) => !prev);
            }}
          >
            <NavBarLink
              page="/our-team"
              text="About"
              widthPercent={90}
              fontSize={40}
              colour="white"
            />
          </div>
          <div
            onClick={() => {
              setClicked((prev) => !prev);
            }}
          >
            <NavBarLink
              page="/our-team"
              text="Contact"
              widthPercent={90}
              fontSize={40}
              colour="white"
            />
          </div>
        </div>

        {/* Footer accent */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
          <div className="text-white/40 text-sm font-medium tracking-wider">
            Lexingworth Capital
          </div>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="border-[0.5px] mr-[10px] flex items-center justify-center w-[40px] h-[40px] border-slate-800 bg-white hover:bg-slate-50 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl rounded-lg p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="45"
          width="45"
          viewBox="0 0 640 640"
          className="fill-slate-800"
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
      </button>
    </>
  );
}
