const pillars = [
  {
    number: "01",
    title: "Research-Driven",
    description:
      "Every investment decision is grounded in rigorous fundamental research, disciplined analysis, and peer review before it's added to our portfolio.",
  },
  {
    number: "02",
    title: "Hands-On Experience",
    description:
      "Members manage a simulated portfolio and pitch ideas at general meetings, gaining practical, real-world experience in a low-stakes setting.",
  },
  {
    number: "03",
    title: "Mentorship & Alumni",
    description:
      "An active alumni network across leading firms works directly with current members to help them break into the industry.",
  },
  {
    number: "04",
    title: "Competitive Excellence",
    description:
      "Our teams regularly compete in stock pitch competitions, sharpening the same skills used by professional investors.",
  },
];

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/a1.png"
          alt="City skyline"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>

      <div className="w-full bg-[var(--color-cream)] px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[45px] font-bold text-[var(--color-primary)] mb-8">
            About Us
          </h1>

          <img
            src="/b1.png"
            alt="Lexingworth Capital members"
            className="w-full sm:w-[45%] h-auto object-contain sm:float-right sm:ml-10 mb-8"
          />

          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            Lexingworth Capital is a student-run investment club founded in
            2017 at McMaster University's DeGroote School of Business. We
            give our members exclusive, hands-on experience through exposure
            to the finance industry, active daily financial management, and
            participation in stock pitch competitions.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            What began as a small group of students has grown into one of the
            university's most respected finance organizations, built on the
            same rigor, discipline, and professionalism expected on any
            trading floor or investment committee.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 clear-none">
            Beyond the classroom, our members gain real experience managing a
            simulated portfolio, competing in stock pitch competitions, and
            collaborating with peers who share a passion for markets and
            investing. Lexingworth Capital is built on the belief that the
            best way to learn finance is by doing it.
          </p>
          <div className="clear-both" />
        </div>
      </div>

      <div className="w-full bg-white px-6 py-[120px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4">
            Our Approach
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16">
            Four principles guide how we operate, from the way we research
            ideas to the way we support our members long after they graduate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border-t-2 border-[var(--color-primary)] pt-6"
              >
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mt-2 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
