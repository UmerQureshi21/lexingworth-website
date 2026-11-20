const coverageGroups = [
  {
    name: "Consumer & Retail",
    description:
      "Covering consumer goods, e-commerce, and retail businesses across the value chain.",
  },
  {
    name: "Financial Institutions (FIG)",
    description:
      "Covering banks, insurers, and asset managers, with a focus on capital markets activity.",
  },
  {
    name: "Healthcare",
    description:
      "Covering pharmaceuticals, medical devices, and healthcare services companies.",
  },
  {
    name: "Industrials",
    description:
      "Covering manufacturing, transportation, and diversified industrial businesses.",
  },
  {
    name: "Metals & Mining",
    description:
      "Covering commodity producers and the companies that support extraction and processing.",
  },
  {
    name: "Renewable Energy",
    description:
      "Covering solar, wind, and other companies driving the energy transition.",
  },
  {
    name: "Technology, Media & Telecom (TMT)",
    description:
      "Covering software, hardware, media, and telecommunications companies.",
  },
];

// Past stock pitches, newest first. Cover images live in public/pitches/.
const pastPitches = [
  {
    company: "Aritzia Inc.",
    ticker: "TSX: ATX",
    date: "November 16, 2026",
    cover: "/pitches/aritzia.png",
    team: [
      "Vidhi Desai",
      "Christian Mena Garcia",
      "Hamza Yasin",
      "Arshia Kaura",
      "Matan Shikhman",
      "Matthew Mitchell",
    ],
  },
  {
    company: "TransMedics Group",
    ticker: "NASDAQ: TMDX",
    date: "November 16, 2026",
    cover: "/pitches/transmedics.png",
    team: [
      "Asher Ali Khan",
      "Jed Rasiah",
      "Mehakpreet Thind",
      "Muhammad Khan",
      "Omar Khan",
      "Omer Yormazoglu",
      "Yusuf Khan",
    ],
  },
  {
    company: "Aecon Group Ltd.",
    ticker: "TSX: ARE",
    date: "November 16, 2026",
    cover: "/pitches/aecon.png",
    team: [
      "Daniel Levy",
      "Fawaz Tehami",
      "Isaiah Knox",
      "Daniel Payne",
      "Ian Sheppard",
    ],
  },
  {
    company: "Rambus Inc.",
    ticker: "NASDAQ: RMBS",
    date: "November 16, 2026",
    cover: "/pitches/rambus.png",
    team: [
      "Adriano Bertolo",
      "Aidan Suri",
      "Nathan Brooks",
      "Seth O'Brien",
      "Daniel Franchi",
      "Owen Alexander",
      "Hamza Khokhawala",
    ],
  },
  {
    company: "Bird Construction",
    ticker: "TSX: BDT",
    date: "January 5, 2025",
    cover: "/pitches/bird-construction.png",
    team: [
      "Alexandre Noolandi",
      "Nabeel Mirza",
      "Noah Patel",
      "Veer Sarin",
      "James Abraham",
    ],
  },
];

export default function Fund() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/b4.png"
          alt="Downtown skyline"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>

      <div
        id="coverage-groups"
        className="w-full bg-white px-6 py-[120px] scroll-mt-[75px]"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[50px] font-bold text-[var(--color-primary)] text-center mb-6">
            Fund
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-16">
            Our members are organized into coverage groups, each focused on a
            specific sector. Every group generally aims for six members,
            including a Portfolio Manager, Senior Analysts, and Analysts,
            working together to research, monitor, and pitch ideas within
            their sector.
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coverageGroups.map((group, i) => (
            <div
              key={group.name}
              className="border-t-2 border-[var(--color-primary)] pt-6"
            >
              <span className="text-sm font-semibold tracking-widest text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-2 mb-2">
                {group.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {group.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div
        id="past-pitches"
        className="w-full bg-[var(--color-cream)] px-6 py-[120px] scroll-mt-[90px]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4 text-center">
            Past Pitches
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16 mx-auto text-center">
            A selection of the stock pitches our teams have researched and
            presented.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {pastPitches.map((pitch) => (
              <div key={`${pitch.company}-${pitch.date}`}>
                <img
                  src={pitch.cover}
                  alt={`${pitch.company} stock pitch cover`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover border border-[var(--color-primary)]/20 shadow-sm"
                />
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-4">
                  {pitch.company}{" "}
                  <span className="text-gray-500 font-normal">
                    ({pitch.ticker})
                  </span>
                </h3>
                <p className="text-sm text-gray-500 mt-1">{pitch.date}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {pitch.team.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
