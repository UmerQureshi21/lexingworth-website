import { useState } from "react";

const experiences = [
  {
    title: "Advanced Investment Tools",
    description:
      "Analysts get hands-on access to the same tools used on professional trading floors, including the Bloomberg Terminal, S&P Capital IQ Pro, Refinitiv LSEG, Wall Street Prep, The Wall Street Journal, and Financial Edge.",
  },
  {
    title: "Stock Pitch Competitions",
    description:
      "Members compete in stock pitch competitions both internally and externally, against other schools, sharpening the same skills used by professional investors.",
  },
  {
    title: "Training Program",
    description:
      "All analysts go through a structured training program covering financial modeling, valuation, and interview prep, with access to tier 1 material and templates.",
  },
  {
    title: "Exclusive Community and Recruiting Events",
    description:
      "An active alumni network and exclusive recruiting events connect members directly with professionals working in the industry.",
  },
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="experience"
      className="w-full bg-[var(--color-primary)] text-white py-[100px] px-6 scroll-mt-[90px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[45px] font-bold text-center mb-10">
          The "LEX" Experience
        </h2>
        <div className="border-t border-white/20">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={experience.title} className="border-b border-white/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-xl sm:text-2xl">{experience.title}</span>
                  <span className="text-2xl font-light shrink-0 transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "150px" : "0px" }}
                >
                  <p className="pb-6 text-white/80 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
