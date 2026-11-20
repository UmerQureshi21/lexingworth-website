interface Member {
  name: string;
  role: string;
  placement?: string;
  email: string;
  photo?: string;
  linkedin?: string;
}

const executiveTeam: Member[] = [
  {
    name: "Noah Patel",
    role: "Chief Executive Officer",
    placement: "TD Asset Management, Toronto",
    email: "paten148@mcmaster.ca",
    photo: "/exec_team/noah-patel.png",
    linkedin: "https://www.linkedin.com/in/noah-patel/",
  },
  {
    name: "Ammar Malick",
    role: "Chief Investment Officer",
    placement: "Mackenzie Investments, Toronto",
    email: "malica2@mcmaster.ca",
    photo: "/exec_team/ammar-malick.png",
    linkedin: "https://www.linkedin.com/in/ammarmalick/",
  },
];

const portfolioManagers: Member[] = [
  {
    name: "Daniel Levy",
    role: "Portfolio Manager, Industrials",
    placement: "Greenshield, Toronto",
    email: "levyd8@mcmaster.ca",
    photo: "/exec_team/daniel-levy.png",
    linkedin: "https://www.linkedin.com/in/levydaniel8/",
  },
  {
    name: "Mehakpreet Thind",
    role: "Portfolio Manager, Healthcare",
    placement: "Cypress Atlantic, Toronto",
    email: "thindm5@mcmaster.ca",
    photo: "/exec_team/mehakpreet-thind.png",
    linkedin: "https://www.linkedin.com/in/mehakpreetthind/",
  },
  {
    name: "Fawaz Tehami",
    role: "Portfolio Manager, Renewable Energy",
    placement: "Tehami Capital, Toronto",
    email: "tehamif@mcmaster.ca",
    photo: "/exec_team/fawaz-tehami.png",
    linkedin: "https://www.linkedin.com/in/fawaz-tehami/",
  },
];

interface PastExec {
  name: string;
  role: string;
  linkedin?: string;
}

// LinkedIn profiles for past executives, applied to every year they appear.
const pastExecLinkedin: Record<string, string> = {
  "Stephan Matrakchine": "https://www.linkedin.com/in/smatrakchine/",
  "Anthony Sebanc": "https://www.linkedin.com/in/sebanc/",
  "Alexander Kamenskiy": "https://www.linkedin.com/in/kamenska/",
  "Mark Jawornicki": "https://www.linkedin.com/in/markjawornicki/",
  "Nikita Gaind": "https://www.linkedin.com/in/nikitagaind/",
  "Robert Radovini": "https://www.linkedin.com/in/robert-radovini/",
  "Siddhant Kharbanda": "https://www.linkedin.com/in/siddhantkharbanda/",
  "Mathew Persadie": "https://www.linkedin.com/in/matthewpersadie/",
  "Vrushin Bhatt": "https://www.linkedin.com/in/vrushinbhatt/",
  "Gaurav Khanna": "https://www.linkedin.com/in/khannagaurav1/",
  "Farhaan Syed": "https://www.linkedin.com/in/farhaan-syed/",
  "Rohin Mahendra": "https://www.linkedin.com/in/rohin-mahendra/",
  "Allen Zhou": "https://www.linkedin.com/in/allen-zhou-/",
  "Paul Lapinski": "https://www.linkedin.com/in/paul-lapinski-05a05z/",
};

// Past executive teams by year. Add names to each year's list.
const pastExecutives: { year: string; members: PastExec[] }[] = [
  {
    year: "2026–2027",
    members: [
      {
        name: "Noah Patel",
        role: "CEO",
        linkedin: "https://www.linkedin.com/in/noah-patel/",
      },
      {
        name: "Ammar Malick",
        role: "CIO",
        linkedin: "https://www.linkedin.com/in/ammarmalick/",
      },
    ],
  },
  {
    year: "2025–2026",
    members: [
      { name: "Rohin Mahendra", role: "Co-CEO" },
      { name: "Farhaan Syed", role: "Co-CEO" },
      { name: "Allen Zhou", role: "CIO" },
      { name: "Paul Lapinski", role: "COO" },
    ],
  },
  {
    year: "2024–2025",
    members: [
      { name: "Gaurav Khanna", role: "CEO" },
      { name: "Farhaan Syed", role: "CIO" },
      { name: "Rohin Mahendra", role: "COO" },
    ],
  },
  {
    year: "2023–2024",
    members: [
      { name: "Siddhant Kharbanda", role: "CEO" },
      { name: "Mathew Persadie", role: "COO" },
      { name: "Vrushin Bhatt", role: "CIO" },
    ],
  },
  {
    year: "2022–2023",
    members: [
      { name: "Nikita Gaind", role: "CEO" },
      { name: "Robert Radovini", role: "COO" },
      { name: "Mathew Persadie", role: "COO" },
    ],
  },
  {
    year: "2021–2022",
    members: [
      { name: "Mark Jawornicki", role: "CEO" },
      { name: "Nikita Gaind", role: "COO" },
      { name: "Robert Radovini", role: "CIO" },
    ],
  },
  {
    year: "2020–2021",
    members: [
      { name: "Anthony Sebanc", role: "CEO" },
      { name: "Mark Jawornicki", role: "COO" },
      { name: "Alexander Kamenskiy", role: "CIO" },
    ],
  },
  {
    year: "2019–2020",
    members: [
      { name: "Stephan Matrakchine", role: "CEO" },
      { name: "Anthony Sebanc", role: "COO" },
    ],
  },
  {
    year: "2018–2019",
    members: [
      { name: "Stephan Matrakchine", role: "CEO" },
      { name: "Anthony Sebanc", role: "COO" },
    ],
  },
  {
    year: "2017–2018",
    members: [
      { name: "Stephan Matrakchine", role: "Co-Founder" },
      { name: "Anthony Sebanc", role: "Co-Founder" },
    ],
  },
];

const teamStats = [
  { value: "100+", label: "Alumni" },
  { value: "33", label: "Current Members" },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts.length > 1
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0][0];
}

function MemberCard({ member }: { member: Member }) {
  const photo = member.photo ? (
    <img
      src={member.photo}
      alt={member.name}
      className="w-full aspect-[4/5] object-cover border border-[var(--color-primary)]/20"
    />
  ) : (
    <div className="w-full aspect-[4/5] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center">
      <span className="text-5xl font-bold text-[var(--color-primary)]/30">
        {initials(member.name)}
      </span>
    </div>
  );

  return (
    <div>
      {member.linkedin ? (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-80"
        >
          {photo}
        </a>
      ) : (
        photo
      )}
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-4 text-center">
        {member.name}
      </h3>
      <p className="text-sm text-gray-700 mt-1 text-center">{member.role}</p>
      {member.placement && (
        <p className="text-sm text-gray-500 text-center">
          {member.placement}
        </p>
      )}
      <p className="text-sm text-gray-500 italic text-center">
        {member.email}
      </p>
    </div>
  );
}

export default function Team() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/night-skyline.png"
          alt="Downtown skyline at night"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
        <div className="absolute inset-0 pt-[75px] flex items-center justify-center px-6">
          <div className="flex items-center justify-center gap-8 sm:gap-24 text-white text-center">
            {teamStats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-24">
                {i > 0 && <div className="w-px h-28 sm:h-40 bg-white/40" />}
                <div className="min-w-[140px] sm:min-w-[300px]">
                  <p className="text-[64px] sm:text-[120px] font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-base sm:text-2xl uppercase tracking-[0.2em] text-white/85">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4 text-center">
            Executive Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16 mx-auto text-center">
            Our executives are responsible for member recruitment and
            mentorship, running educationals, and progressing the club's
            strategic vision.
          </p>

          <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto">
            {executiveTeam.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--color-cream)] px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4 text-center">
            Portfolio Managers
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16 mx-auto text-center">
            Our Portfolio Managers are responsible for leading their coverage
            group and team, providing guidance to analysts throughout the
            research process.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {portfolioManagers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4 text-center">
            Past Executives
          </h2>
          <div className="max-w-5xl mx-auto mt-12 border-t border-gray-200">
            {pastExecutives.map((term) => (
              <div
                key={term.year}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-b border-gray-200"
              >
                <p className="sm:w-32 shrink-0 font-semibold text-[var(--color-primary)]">
                  {term.year}
                </p>
                <p className="text-gray-700">
                  {term.members.length > 0
                    ? term.members.map((m, i) => {
                        const linkedin =
                          m.linkedin ?? pastExecLinkedin[m.name];
                        return (
                        <span key={m.name}>
                          {i > 0 && (
                            <span className="mx-2 text-gray-400">·</span>
                          )}
                          <span className="whitespace-nowrap">
                          {linkedin ? (
                            <a
                              href={linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[var(--color-primary)] hover:underline underline-offset-4"
                            >
                              {m.name}
                            </a>
                          ) : (
                            m.name
                          )}{" "}
                          ({m.role})
                          </span>
                        </span>
                        );
                      })
                    : "—"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
