const placements = [
  { name: "RBC", logo: "/logos/logo-rbc.png" },
  { name: "TD", logo: "/logos/logo-td.png" },
  { name: "CIBC", logo: "/logos/logo-cibc.png" },
  { name: "CIBC Mellon", logo: "/logos/logo-cibcmellon.png" },
  { name: "Scotiabank", logo: "/logos/logo-scotiabank.png" },
  { name: "Citi", logo: "/logos/logo-citi.png" },
  { name: "HSBC", logo: "/logos/logo-hsbc.png" },
  { name: "Bank of America", logo: "/logos/logo-bankofamerica.png" },
  { name: "Wells Fargo", logo: "/logos/logo-wellsfargo.png" },
  { name: "Raymond James", logo: "/logos/logo-raymondjames.png" },
  { name: "State Street", logo: "/logos/logo-statestreet.png" },
  { name: "Bloomberg", logo: "/logos/logo-bloomberg.png" },
  { name: "Fitch Ratings", logo: "/logos/logo-fitch.png" },
  { name: "Manulife", logo: "/logos/logo-manulife.png" },
  { name: "Sun Life", logo: "/logos/logo-sunlife.png" },
  { name: "PSP Investments", logo: "/logos/logo-psp.png" },
  { name: "CPP Investments", logo: "/logos/logo-cpp.png" },
  { name: "OMERS", logo: "/logos/logo-omers.png" },
  { name: "Albourne", logo: "/logos/logo-albourne.png" },
  { name: "HUB International", logo: "/logos/logo-hub.png" },
  { name: "Deloitte", logo: "/logos/logo-deloitte.png" },
  { name: "EY", logo: "/logos/logo-ey.png" },
  { name: "BMO", logo: "/logos/logo-bmo.svg" },
  { name: "KPMG Canada", logo: "/logos/logo-kpmg.svg" },
  { name: "PwC", logo: "/logos/logo-pwc.svg" },
  { name: "National Bank of Canada", logo: "/logos/logo-nationalbank.png" },
  { name: "Grant Thornton", logo: "/logos/logo-grantthornton.png" },
  { name: "CGI", logo: "/logos/logo-cgi.png" },
  { name: "CI Financial", logo: "/logos/logo-cifinancial.png" },
  { name: "Bench Capital", logo: "/logos/logo-benchcapital.png" },
  { name: "INFOR Financial Group", logo: "/logos/logo-inforfinancial.png" },
  { name: "Pender Ventures", logo: "/logos/logo-penderventures.png" },
];

export default function Placements() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/bc-2.png"
          alt="Downtown financial district skyline"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>

      <div className="w-full bg-white px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[42px] sm:text-[50px] font-bold text-[var(--color-primary)] mb-4 text-center uppercase tracking-wide">
            Member Placements
          </h1>
          <p className="text-xl text-gray-700 mb-16 text-center">
            Internship &amp; Full-Time Opportunities
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {placements.map((placement) => (
              <div
                key={placement.name}
                className="border-2 border-[var(--color-primary)]/20 p-8 flex items-center justify-center h-32"
              >
                <img
                  src={placement.logo}
                  alt={placement.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
