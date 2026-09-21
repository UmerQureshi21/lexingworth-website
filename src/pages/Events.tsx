const events = [
  {
    image: "/fall-hiring-post.png",
    title: "Fall Hiring — Investment Team",
    description:
      "Applications for our Investment Team closed September 20th, with interviews running September 26th–29th and offers going out September 30th. Thank you to everyone who applied.",
  },
  {
    image: "/ig-2.png",
    title: "Summer Recruitment Info Session",
    description:
      "Join us Tuesday, July 7th at 7:30 PM EST over Zoom to learn more about our summer recruitment process. Register through the link in our bio.",
  },
  {
    image: "/ig-3.png",
    title: "2026–2027 Recruitment Package Released",
    description:
      "Our full recruitment package for the 2026–2027 cycle is now live, covering everything you need to know about applying. View the full package via the link in our bio.",
  },
];

const educationals = [
  {
    image: "/educationals/dcf-cover.png",
    title: "Valuation 101: Discounted Cash Flow",
    description:
      "A first-principles walkthrough of intrinsic valuation on the Lexingworth Model, from projecting free cash flow to calibrating the discount rate and deriving fair value the way our analysts do on live coverage names.",
  },
  {
    image: "/educationals/comps-precedent-cover.png",
    title: "Valuation 101: Comps & Precedent Transactions",
    description:
      "A disciplined approach to relative valuation on the Lexingworth Model, from screening the right peer set and precedent deals to benchmarking multiples the way top desks do.",
  },
];

export default function Events() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/b3.png"
          alt="Financial district street"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>

      <div className="w-full max-w-5xl px-6 py-[80px] flex flex-col">
        <h1 className="text-[50px] font-bold text-[var(--color-primary)] text-center mb-20">
          Events
        </h1>

        <div className="flex flex-col gap-24">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center gap-10"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full sm:w-[320px] h-auto object-contain shrink-0"
              />
              <div>
                <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">
                  {event.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-[36px] font-bold text-[var(--color-primary)] text-center mt-32 mb-4">
          Educationals
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Institutional-grade technical training built around the Lexingworth
          Model, giving our members the same rigor and toolkit used on
          trading floors and in investment committees across the industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {educationals.map((session, i) => (
            <div key={i} className="border-2 border-[var(--color-primary)]">
              <img
                src={session.image}
                alt={session.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
