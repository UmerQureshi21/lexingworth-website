export default function Join() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative h-[450px] overflow-hidden">
        <img
          src="/b5.png"
          alt="Downtown skyline"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>

      <div className="w-full max-w-4xl px-6 py-[100px] flex flex-col items-center text-center">
        <h1 className="text-[50px] font-bold text-[var(--color-primary)] mb-6">
          Join
        </h1>
        <p className="text-lg leading-relaxed text-gray-800 mb-12">
          Interested in joining Lexingworth Capital? We hire new members
          every fall and winter term. Explore our recruitment guide below to
          get a head start on the process.
        </p>

        <a
          href="/lexingworth-recruitment-package-2026-2027.pdf"
          download
          className="w-full max-w-sm border-2 border-[var(--color-primary)] p-8 flex flex-col items-center text-center gap-4 hover:bg-[var(--color-primary)] transition-colors duration-300 group"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-white/70">
            Recruitment Guide
          </span>
          <h3 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-white">
            2026–2027 Recruitment Package
          </h3>
          <span className="inline-block bg-black text-white group-hover:bg-white group-hover:text-[var(--color-primary)] px-6 py-2 text-sm font-medium transition-colors duration-300">
            Download PDF
          </span>
        </a>
      </div>
    </div>
  );
}
