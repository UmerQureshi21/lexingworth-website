import { useEffect, useRef, useState } from "react";

interface ExecutiveBoardCardProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedinUrl: string;
}

interface CEOCardProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedinUrl: string;
  achievements?: string[];
}

export function ExecutiveBoardCard({
  name,
  position,
  bio,
  image,
  linkedinUrl,
}: ExecutiveBoardCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-[var(--color-cream)] rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-700 ease-out
                  border-2 border-transparent hover:border-[var(--color-accent)]
                  group cursor-pointer
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
    >
      {/* Photo Section */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {/* Image container */}
          <div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--color-primary)] 
                          transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--color-accent)]
                          shadow-xl"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 rounded-full bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/20 
                          transition-all duration-500 blur-xl"
          ></div>

          {/* LinkedIn badge - appears on hover */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 w-12 h-12 bg-[var(--color-primary)] rounded-full 
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
                       transition-all duration-300 hover:bg-[var(--color-accent)] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center">
        {/* Name */}
        <h3
          className="text-3xl font-bold text-[var(--color-primary)] mb-2 
                       group-hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          {name}
        </h3>

        {/* Position */}
        <div className="mb-4">
          <span
            className="inline-block bg-[var(--color-primary)] text-[var(--color-accent)] px-4 py-1 rounded-full 
                         text-sm font-semibold uppercase tracking-wider
                         group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)]
                         transition-all duration-300"
          >
            {position}
          </span>
        </div>

        {/* Bio */}
        <p className="text-gray-700 leading-relaxed text-base">{bio}</p>
      </div>

      {/* Decorative element at bottom */}
      <div className="mt-6 flex justify-center">
        <div className="w-0 h-1 bg-[var(--color-accent)] group-hover:w-24 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export function CEOCard({
  name,
  position,
  bio,
  image,
  linkedinUrl,
  achievements = [],
}: CEOCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-[var(--color-cream)] rounded-3xl p-8 md:p-12 shadow-2xl 
                  transition-all duration-700 ease-out w-full
                  border-2 border-transparent hover:border-[var(--color-accent)]
                  group cursor-pointer relative overflow-hidden
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 relative z-10">
        {/* Photo Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Image container */}
            <div
              className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-[var(--color-primary)] 
                          transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--color-accent)]
                          shadow-2xl group-hover:shadow-[0_20px_60px_color-mix(in srgb, var(--color-accent) 30%, transparent)]"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-2xl bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/20 
                          transition-all duration-500 blur-2xl"
            ></div>

            {/* LinkedIn badge */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 w-14 h-14 bg-[var(--color-primary)] rounded-full 
                         flex items-center justify-center
                         opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
                         transition-all duration-300 hover:bg-[var(--color-accent)] z-10
                         shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Text Content - Takes remaining space */}
        <div className="flex-1 text-center lg:text-left">
          {/* Position badge */}
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-accent)] px-5 py-2 rounded-full 
                         text-sm font-bold uppercase tracking-widest
                         group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)]
                         transition-all duration-300 shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {position}
            </span>
          </div>

          {/* Name */}
          <h3
            className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4
                       group-hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            {name}
          </h3>

          {/* Decorative line */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="w-24 h-1 bg-[var(--color-primary)] group-hover:w-40 group-hover:bg-[var(--color-accent)] transition-all duration-500"></div>
          </div>

          {/* Bio */}
          <p className="text-gray-700 leading-relaxed text-lg mb-6 max-w-3xl">
            {bio}
          </p>

          {/* Achievements/Highlights (if provided) */}
          {achievements.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[var(--color-primary)] mb-3 uppercase tracking-wider">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2 text-left">
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-base">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Example usage component with sample data
export default function ExecutiveBoardSection() {
  const executives = [
    {
      name: "Rohin Mahendra",
      position: "Co-CEO",
      bio: "4th year Honours Bachelor of Commerce @ McMaster, Finance with minors in Innovation and Economics.",
      image: "/exec_team/rohin.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/rohin-mahendra/",
    },
    {
      name: "Farhaan Syed",
      position: "Co-CEO",
      bio: "5th year Honours Bachelor of Commerce @ McMaster. Specialization in Finance @ DeGroote School of Business.",
      image: "/exec_team/farhaan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/farhaan-syed/",
    },
    {
      name: "Paul Lapinski",
      position: "COO",
      bio: "3rd year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/paul.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/paul-lapinski-05a05z/",
    },
    {
      name: "Umer Qureshi",
      position: "CTO",
      bio: "2nd year Computer Science @ McMaster",
      image: "/exec_team/umer.jpg",
      linkedinUrl: "https://www.linkedin.com/in/umer-qureshi06/",
    },
    {
      name: "Allen Zhou",
      position: "CIO",
      bio: "5th year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/allen.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/allen-zhou-/",
    },
    {
      name: "Yajvin Bhutani",
      position: "Director of Events",
      bio: "4th year Computer Science @ McMaster",
      image: "/exec_team/yajvin.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/yajvin-bhutani-696329237/",
    },
    {
      name: "Avani Sharma",
      position: "Director of Relations",
      bio: "4th year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/avani.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/avanisharma01/",
    },
    {
      name: "Yoshua Chettiar",
      position: "Director of Marketing",
      bio: "4th year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/yoshua.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/yoshchettiar/",
    },
    {
      name: "Jaina Rama",
      position: "Director of Events",
      bio: "5th year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/jaina.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/jaina-rama/",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[var(--color-primary)] mb-4">
            Executive Board
          </h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the leaders driving Lexingworth Capital forward
          </p>
        </div> */}

        <div className="grid grid-cols-1  gap-10">
          {executives.slice(0, 2).map((exec, index) => (
            <CEOCard
              key={index}
              name={exec.name}
              position={exec.position}
              bio={exec.bio}
              image={exec.image}
              linkedinUrl={exec.linkedinUrl}
            />
          ))}
        </div>

        {/* <div className="mt-[40px] w-full h-[1px] bg-black"></div> */}

        {/* Cards Grid */}
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.slice(2).map((exec, index) => (
            <ExecutiveBoardCard
              key={index}
              name={exec.name}
              position={exec.position}
              bio={exec.bio}
              image={exec.image}
              linkedinUrl={exec.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
