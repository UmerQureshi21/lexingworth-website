import ExperienceSection from "../components/ExperienceSection";

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

      <div
        id="about-us"
        className="w-full bg-[var(--color-cream)] px-6 py-[120px] scroll-mt-[90px]"
      >
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

      <ExperienceSection />

      <div
        id="partnerships"
        className="w-full bg-white px-6 py-[120px] scroll-mt-[90px]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold text-[var(--color-primary)] mb-4">
            Partnerships &amp; Affiliates
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mb-16">
            We partner and affiliate with industry-leading organizations to bring
            our members resources, training, and connections beyond what the
            classroom offers.
          </p>

          <div className="space-y-8">
            <div className="border-2 border-[var(--color-primary)] p-10 flex flex-col sm:flex-row items-center gap-10">
              <img
                src="/logos/logo-wso.png"
                alt="Wall Street Oasis"
                className="h-28 w-40 object-contain shrink-0"
              />
              <div className="text-center sm:text-left">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  2026–2027 PARTNER
                </span>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mt-2 mb-3">
                  Wall Street Oasis
                </h3>
                <p className="text-base leading-relaxed text-gray-600 max-w-2xl">
                  This year, Lexingworth Capital is partnering with Wall Street
                  Oasis (WSO), the largest online community focused on careers in
                  finance. The partnership gives our members access to WSO's
                  courses, interview prep, and industry network as they prepare
                  to break into the industry.
                </p>
              </div>
            </div>

            <div className="border-2 border-[var(--color-primary)] p-10 flex flex-col sm:flex-row items-center gap-10">
              <img
                src="/logos/logo-cfi.png"
                alt="Corporate Finance Institute"
                className="h-20 w-40 object-contain shrink-0"
              />
              <div className="text-center sm:text-left">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  2026–2027 AFFILIATE
                </span>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mt-2 mb-3">
                  Corporate Finance Institute
                </h3>
                <p className="text-base leading-relaxed text-gray-600 max-w-2xl">
                  Lexingworth Capital is affiliated with the Corporate Finance
                  Institute (CFI), one of the most widely recognized names in
                  finance certification. Members get an exclusive discount code
                  for CFI's courses in financial modeling, valuation, and Excel,
                  the same technical training used across the industry.
                </p>
              </div>
            </div>

            <div className="border-2 border-[var(--color-primary)] p-10 flex flex-col sm:flex-row items-center gap-10">
              <img
                src="/logos/logo-cfa-society-toronto.png"
                alt="CFA Society Toronto"
                className="h-20 w-40 object-contain shrink-0"
              />
              <div className="text-center sm:text-left">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  2026–2027 AFFILIATE · NEXT GEN PROGRAM
                </span>
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] mt-2 mb-3">
                  CFA Society Toronto
                </h3>
                <p className="text-base leading-relaxed text-gray-600 max-w-2xl">
                  Lexingworth Capital is affiliated with CFA Society Toronto
                  through its University Outreach and Next Gen Program, which
                  connects student groups with the local CFA charterholder
                  community. The affiliation gives our members access to CFA
                  Society Toronto events, speaker sessions, and networking with
                  practitioners across Toronto's investment industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
