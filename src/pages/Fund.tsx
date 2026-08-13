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

      <div className="w-full max-w-6xl px-6 py-[100px]">
        <h1 className="text-[50px] font-bold text-[var(--color-primary)] text-center mb-6">
          Fund
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-800 text-center mb-20">
          Our members are organized into coverage groups, each focused on a
          specific sector. Every group generally aims for six members,
          including a Portfolio Manager, Senior Analysts, and Analysts,
          working together to research, monitor, and pitch ideas within
          their sector.
        </p>

        <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-10 text-center">
          Coverage Groups
        </h2>
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
  );
}
