import { NavLink } from "react-router";

const companies = [
  { name: "RBC", logo: "/logos/logo-rbc.png" },
  { name: "TD AM", logo: "/logos/logo-td.png" },
  { name: "Citi Bank", logo: "/logos/logo-citi.png" },
  { name: "HSBC", logo: "/logos/logo-hsbc.png" },
  { name: "CIBC", logo: "/logos/logo-cibc.png" },
  { name: "Scotiabank", logo: "/logos/logo-scotiabank.png" },
  { name: "PSP", logo: "/logos/logo-psp.png" },
  { name: "CPP", logo: "/logos/logo-cpp.png" },
  { name: "Bloomberg", logo: "/logos/logo-bloomberg.png" },
  { name: "Raymond James", logo: "/logos/logo-raymondjames.png" },
  { name: "State Street", logo: "/logos/logo-statestreet.png" },
  { name: "Wells Fargo", logo: "/logos/logo-wellsfargo.png" },
  { name: "Albourne", logo: "/logos/logo-albourne.png" },
  { name: "Manulife", logo: "/logos/logo-manulife.png" },
  { name: "Bank of America", logo: "/logos/logo-bankofamerica.png" },
];

export default function RecruitmentPlacements() {
  return (
    <div className="w-full flex flex-col items-center py-[80px]">
      <div className="w-full max-w-6xl flex flex-col items-center text-center px-6 mb-16">
        <h1 className="text-[45px] font-bold mb-6 text-[var(--color-primary)]">
          Recruitment Placements
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-700 mb-8">
          Lexingworth has demonstrated a consistent ability to help prepare
          its members ahead of recruiting. Our members have gone on to start
          their careers at leading institutions across investment banking,
          asset management, and corporate finance. The club prides itself on
          the active
          involvement of its alumni, who continue to help current members
          break into the industry.
        </p>
        <NavLink
          to="/join"
          className="bg-black text-white px-6 py-3 font-medium hover:bg-[var(--color-primary)] transition-colors duration-300"
        >
          Join
        </NavLink>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-20 items-center">
          {[...companies, ...companies].map((company, i) => (
            <img
              key={i}
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
