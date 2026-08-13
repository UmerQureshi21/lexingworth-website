const events = [
  {
    image: "/ig-1.png",
    title: "Summer Hiring — Investment Team",
    description:
      "Applications for our Investment Team close July 24th, with interviews running August 3rd–5th and offers going out August 10th. Apply through the link in our bio.",
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
      </div>
    </div>
  );
}
