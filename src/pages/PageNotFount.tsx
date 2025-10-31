import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function PageNotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative ">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Number */}
        <div
          className={`transition-all duration-1000 ease-out
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`}
        >
          <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-bold text-[#283618] leading-none mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-[#FDBF57] mx-auto mb-8"></div>
        </div>

        {/* Title */}
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#283618] mb-6 transition-all duration-1000 ease-out delay-200
                      ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-20 opacity-0"
                      }`}
        >
          Page Not Found
        </h2>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-600
                      ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-75 opacity-0"
                      }`}
        >
          <p
            className="bg-[#FDBF57] text-[#283618] px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl
                     relative overflow-hidden group"
          >
            <NavLink to={"/"} className="relative z-10">
              Return Home
            </NavLink>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </p>

          <p
            className="bg-transparent border-2 border-white text-[#283618] px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Contact Us
          </p>
        </div>

        {/* Animated chart going down (opposite of your rising chart) */}
        <svg
          className={`absolute bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none transition-all duration-2000 delay-1000
                      ${
                        isVisible
                          ? "translate-y-0 opacity-10"
                          : "translate-y-20 opacity-0"
                      }`}
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 0 L 200 50 L 400 30 L 600 100 L 800 80 L 1000 200"
            fill="none"
            stroke="#FDBF57"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            className="animate-draw-down"
          />
        </svg>
      </div>

      <style>{`
        @keyframes draw-down {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-down {
          animation: draw-down 3s ease-out 1.5s forwards;
        }
      `}</style>
    </div>
  );
}
