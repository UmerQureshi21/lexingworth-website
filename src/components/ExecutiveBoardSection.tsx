import { useEffect, useRef, useState } from "react";

interface ExecutiveBoardCardProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedinUrl: string;
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
      className={`bg-[#F4F1DE] rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-700 ease-out
                  border-2 border-transparent hover:border-[#FDBF57]
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
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#283618] 
                          transition-all duration-500 group-hover:scale-110 group-hover:border-[#FDBF57]
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
            className="absolute inset-0 rounded-full bg-[#FDBF57]/0 group-hover:bg-[#FDBF57]/20 
                          transition-all duration-500 blur-xl"
          ></div>

          {/* LinkedIn badge - appears on hover */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 w-12 h-12 bg-[#283618] rounded-full 
                       flex items-center justify-center
                       opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100
                       transition-all duration-300 hover:bg-[#FDBF57] z-10"
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
          className="text-3xl font-bold text-[#283618] mb-2 
                       group-hover:text-[#FDBF57] transition-colors duration-300"
        >
          {name}
        </h3>

        {/* Position */}
        <div className="mb-4">
          <span
            className="inline-block bg-[#283618] text-[#FDBF57] px-4 py-1 rounded-full 
                         text-sm font-semibold uppercase tracking-wider
                         group-hover:bg-[#FDBF57] group-hover:text-[#283618]
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
        <div className="w-0 h-1 bg-[#FDBF57] group-hover:w-24 transition-all duration-500"></div>
      </div>
    </div>
  );
}

// Example usage component with sample data
export default function ExecutiveBoardSection() {
  const executives = [
    {
      name: "Rohin Mahendra",
      position: "Chief Executive Officer",
      bio: "4th year Honours Bachelor of Commerce @ McMaster, Finance with minors in Innovation and Economics.",
      image: "/exec_team/rohin.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/rohin-mahendra/",
    },
    {
      name: "Farhaan Syed",
      position: "Chief Executive Officer",
      bio: "5th year Honours Bachelor of Commerce @ McMaster. Specialization in Finance @ DeGroote School of Business.",
      image: "/exec_team/farhaan.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/farhaan-syed/",
    },
    {
      name: "Paul Lapinski",
      position: "Chief Operating Officer",
      bio: "3rd year Honours Bachelor of Commerce @ McMaster",
      image: "/exec_team/paul.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/paul-lapinski-05a05z/",
    },
    {
      name: "Umer Qureshi",
      position: "Chief Technology Officer",
      bio: "2nd year Computer Science @ McMaster",
      image: "/exec_team/umer.jpg",
      linkedinUrl: "https://www.linkedin.com/in/umer-qureshi06/",
    },
    {
      name: "Allen Zhou",
      position: "Chief Investment Officer",
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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#283618] mb-4">
            Executive Board
          </h2>
          <div className="w-24 h-1 bg-[#FDBF57] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the leaders driving Lexingworth Capital forward
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((exec, index) => (
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
