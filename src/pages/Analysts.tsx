import { useState } from "react";
import { ExecutiveBoardCard } from "../components/ExecutiveBoardSection";

export default function Analysts() {
  const [openTeams, setOpenTeams] = useState<Set<number>>(new Set());

  const toggleTeam = (idx: number) => {
    setOpenTeams((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const coverageTeams = [
    {
      team: "Industrials / Infrastructure",
      people: [
        {
          name: "Alex",
          position: "",
          bio: "",
          image: "/analysts/alex.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Noah",
          position: "",
          bio: "",
          image: "/analysts/noah.jpeg",
          linkedinUrl:
            "https://urldefense.com/v3/__http:/www.linkedin.com/in/noah-patel-821849221__;!!PxNGlQK5RbneE5k!VaLwXv01POPwrPD6BJctWboLqpxZcAfbyqWJtSe3X_vPt4zpoGnQJYeMqWvAKlmvv4u86P0E9MZL1kk0rn4gIRk$",
        },
        {
          name: "Veer",
          position: "",
          bio: "",
          image: "/analysts/veer.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/veersarin/",
        },
        {
          name: "Nabeel",
          position: "",
          bio: "",
          image: "/analysts/nabeel.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/nabeelbaigmirza/",
        },
        {
          name: "James",
          position: "",
          bio: "",
          image: "/analysts/james.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/jaabraham/",
        },
      ],
    },
    {
      team: "TMT (Tech, Media & Telecom)",
      people: [
        {
          name: "Louise",
          position: "",
          bio: "",
          image: "/analysts/louise.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Alina",
          position: "",
          bio: "",
          image: "/analysts/alina.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Angelo",
          position: "",
          bio: "",
          image: "/analysts/angelo.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/angelovalentini/",
        },
        {
          name: "Gayathri",
          position: "",
          bio: "",
          image: "/analysts/gayathri.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/gayathri-nunna/",
        },
      ],
    },
    {
      team: "Healthcare",
      people: [
        {
          name: "Viyashan",
          position: "",
          bio: "",
          image: "/analysts/viyashan.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Ammar",
          position: "",
          bio: "",
          image: "/analysts/ammar.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Viraj",
          position: "",
          bio: "",
          image: "/analysts/viraj.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/virajgulati06/",
        },
        {
          name: "Ayden",
          position: "",
          bio: "",
          image: "/analysts/ayden.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/aydenbhanwadia/",
        },
        {
          name: "Evan",
          position: "",
          bio: "",
          image: "/analysts/evan.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/evan-kwan05/",
        },
      ],
    },
    {
      team: "Energy / Oil & Gas",
      people: [
        {
          name: "Joshua",
          position: "",
          bio: "",
          image: "/analysts/joshua.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/joshua-rebello/",
        },
        {
          name: "Jelani",
          position: "",
          bio: "",
          image: "/analysts/jelani.jpeg",
          linkedinUrl: "www.linkedin.com/in/jelani-mossanda",
        },
        {
          name: "Arpit",
          position: "",
          bio: "",
          image: "/analysts/arpit.jpeg",
          linkedinUrl: "",
        },
        {
          name: "Rienell",
          position: "",
          bio: "",
          image: "/analysts/rienell.jpeg",
          linkedinUrl: "",
        },
      ],
    },
    {
      team: "Diversified",
      people: [
        {
          name: "Laraib",
          position: "",
          bio: "",
          image: "/analysts/laraib.jpeg",
          linkedinUrl: "www.linkedin.com/in/laraib-saleem/",
        },
        {
          name: "Shrey",
          position: "",
          bio: "",
          image: "/analysts/shrey.jpeg",
          linkedinUrl: "http://linkedin.com/in/goelshrey",
        },
        {
          name: "Tylor",
          position: "",
          bio: "",
          image: "/analysts/tylor.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/tylor-lu/",
        },
        {
          name: "Yaiyin",
          position: "",
          bio: "",
          image: "/analysts/yaiyin.jpeg",
          linkedinUrl: "",
        },
      ],
    },
  ];

  return (
    <div className="w-full pb-[100px] relative top-[75px] flex flex-col items-center px-4 md:px-8">
      <div className="w-full max-w-5xl flex flex-col gap-4">
        {coverageTeams.map((coverage, idx) => {
          const isOpen = openTeams.has(idx);
          return (
            <div
              key={idx}
              className="w-full rounded-2xl border-2 border-[var(--color-primary)]/20 bg-[var(--color-cream)] shadow-md overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleTeam(idx)}
                className="w-full flex items-center justify-between px-6 py-5 md:px-8 md:py-6 cursor-pointer
                           hover:bg-[var(--color-primary)]/5 transition-colors duration-200"
              >
                <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
                  {coverage.team}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {coverage.people.length} members
                  </span>
                  <svg
                    className={`w-6 h-6 text-[var(--color-primary)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-6 md:px-8 md:pb-8 pt-2">
                    <div className="w-full h-px bg-[var(--color-primary)]/10 mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                      {coverage.people.map((person, personIdx) => (
                        <div key={personIdx} className="w-full max-w-[280px]">
                          <ExecutiveBoardCard
                            name={person.name}
                            position={person.position}
                            bio={person.bio}
                            image={person.image}
                            linkedinUrl={person.linkedinUrl}
                            bg="[white]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
