interface Member {
  name: string;
  role: string;
  placement: string;
  photo?: string;
  linkedin?: string;
}

const executiveTeam: Member[] = [
  {
    name: "Noah Patel",
    role: "Chief Executive Officer",
    placement: "TD Asset Management, Toronto",
    photo: "/exec_team/noah-patel.png",
    linkedin: "https://www.linkedin.com/in/noah-patel/",
  },
  {
    name: "Ammar Malick",
    role: "Chief Investment Officer",
    placement: "Mackenzie Investments, Toronto",
    photo: "/exec_team/ammar-malick.png",
    linkedin: "https://www.linkedin.com/in/ammarmalick/",
  },
];

const portfolioManagers: Member[] = [
  {
    name: "Daniel Levy",
    role: "Portfolio Manager, Industrials",
    placement: "Greenshield, Toronto",
    photo: "/exec_team/daniel-levy.png",
    linkedin: "https://www.linkedin.com/in/levydaniel8/",
  },
  {
    name: "Mehakpreet Thind",
    role: "Portfolio Manager, Healthcare",
    placement: "Cypress Atlantic, Toronto",
    photo: "/exec_team/mehakpreet-thind.png",
    linkedin: "https://www.linkedin.com/in/mehakpreetthind/",
  },
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
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-4">
        {member.name}
      </h3>
      <p className="text-sm text-gray-700 mt-1">{member.role}</p>
      <p className="text-sm text-gray-500">{member.placement}</p>
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
      </div>

      <div className="w-full bg-white px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4">
            Executive Team
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16">
            Our executives are responsible for member recruitment and
            mentorship, running educationals, and progressing the club's
            strategic vision.
          </p>

          <div className="grid grid-cols-2 gap-10 max-w-2xl">
            {executiveTeam.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[var(--color-cream)] px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4">
            Portfolio Managers
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16">
            Our Portfolio Managers are responsible for leading their coverage
            group and team, providing guidance to analysts throughout the
            research process.
          </p>

          <div className="grid grid-cols-2 gap-10 max-w-2xl">
            {portfolioManagers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
