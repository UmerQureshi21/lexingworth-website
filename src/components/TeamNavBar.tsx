import { NavLink, useLocation } from "react-router";

export default function TeamNavbar() {
  const location = useLocation();
  const isAnalysts =
    location.pathname === "/our-team" ||
    location.pathname === "/our-team/analysts";

  return (
    <div className="bg-white py-6">
      <div className="flex items-center justify-center gap-12">
        <NavLink
          to="/our-team/analysts"
          className={`text-2xl sm:text-3xl font-semibold tracking-wide transition-all duration-300 border-b-2 pb-1 ${
            isAnalysts
              ? "text-black border-black"
              : "text-black/50 border-transparent hover:text-black hover:border-black/30"
          }`}
        >
          Analysts
        </NavLink>
        <NavLink
          to="/our-team/execs"
          className={({ isActive }) =>
            `text-2xl sm:text-3xl font-semibold tracking-wide transition-all duration-300 border-b-2 pb-1 ${
              isActive
                ? "text-black border-black"
                : "text-black/50 border-transparent hover:text-black hover:border-black/30"
            }`
          }
        >
          Executives
        </NavLink>
      </div>
    </div>
  );
}
