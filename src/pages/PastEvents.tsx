import { useState } from "react";

export default function PastEvents() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedPhotosId, setExpandedPhotosId] = useState<number | null>(null);

  const pastEventsList = [
    {
      id: 1,
      title: "First Educational",
      date: "September 15, 2025",
      attendance: 20,
      location: "Main Conference Hall",
      description:
        "A comprehensive workshop introducing students to the fundamentals of starting and running a business, covering the importance of networking, business planning, and pitch presentations.",
      highlights: [
        "Guest speaker from successful startup founders",
        "Interactive business model workshop",
        "Networking session with experienced entrepreneurs",
        "Free business plan templates provided",
      ],
      image: "past-events/first-educational/1.jpeg",
      photos: [
        "past-events/first-educational/2.jpeg",
        "past-events/first-educational/3.jpeg",
      ],
    },
    {
      id: 2,
      title: "Values Educational",
      date: "October 2, 2024",
      attendance: 23,
      location: "Tech Innovation Lab",
      description:
        "Deep dive into modern digital marketing strategies including social media, SEO, content marketing, and data analytics for aspiring marketing professionals.",
      highlights: [
        "Live campaign strategy demonstration",
        "Google Analytics hands-on training",
        "Social media growth hacking tips",
        "Certificate of completion for all attendees",
      ],
      image: "past-events/valuations-educational/1.jpeg",
      photos: [
        "past-events/valuations-educational/2.jpeg",
        "past-events/valuations-educational/3.jpeg",
      ],
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="pt-[75px] px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center py-12">
          <p className="text-4xl md:text-[50px] text-center">
            <span className="text-[var(--color-primary)] font-bold">Lexingworth</span> has
            been fortunate enough to have many great events with ambitious
            students coming to learn!
          </p>
        </div>

        <div className="w-full pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pastEventsList.map((event) => (
              <PastEvent
                key={event.id}
                id={event.id}
                isExpanded={expandedId === event.id}
                onToggle={() =>
                  setExpandedId(expandedId === event.id ? null : event.id)
                }
                title={event.title}
                date={event.date}
                attendance={event.attendance}
                location={event.location}
                description={event.description}
                highlights={event.highlights}
                image={event.image}
                photos={event.photos}
                isPhotosExpanded={expandedPhotosId === event.id}
                onPhotosToggle={() =>
                  setExpandedPhotosId(
                    expandedPhotosId === event.id ? null : event.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface pastEventProps {
  id: number;
  isExpanded: boolean;
  onToggle: () => void;
  title: string;
  date: string;
  attendance: number;
  location: string;
  description: string;
  highlights: string[];
  image: string;
  photos: string[] | undefined;
  isPhotosExpanded: boolean;
  onPhotosToggle: () => void;
}

export function PastEvent({
  isExpanded,
  onToggle,
  title,
  date,
  attendance,
  location,
  description,
  highlights,
  image,
  photos,
  isPhotosExpanded,
  onPhotosToggle,
}: pastEventProps) {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-md cursor-pointer
      transition-all duration-500 ease-in-out
      hover:shadow-xl border-2 border-transparent
      flex flex-col h-full
      ${isExpanded ? "border-[var(--color-primary)] shadow-2xl" : "hover:scale-[1.02]"}
    `}
      onClick={onToggle}
    >
      <div className="p-4 md:p-6 bg-[var(--color-cream)] flex flex-col h-full">
        <div className="flex flex-col gap-4 flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
                {title}
              </h3>
              <span className="text-xs md:text-sm bg-[var(--color-primary)] text-[var(--color-accent)] px-3 py-1 rounded-full font-semibold w-fit">
                {attendance} attended
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-sm md:text-base text-gray-700 mb-3">
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {date}
              </span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {location}
              </span>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
              {description}
            </p>

            <div
              className={`
              overflow-hidden transition-all duration-500
              ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              <div className="pt-4 border-t-2 border-[var(--color-primary)] border-opacity-20">
                <h4 className="font-bold text-[var(--color-primary)] mb-3">
                  Event Highlights
                </h4>
                <ul className="space-y-2 mb-4">
                  {highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-[var(--color-primary)] font-bold mt-1">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`
              overflow-hidden transition-all duration-500
              ${
                isPhotosExpanded
                  ? "max-h-[500px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }
            `}
            >
              <div className="border-t-2 border-[var(--color-primary)] border-opacity-20 pt-4">
                <h4 className="font-bold text-[var(--color-primary)] mb-4">Event Photos</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {photos?.map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`Event photo ${idx + 1}`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 border-t-2 border-[var(--color-primary)] border-opacity-20 pt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPhotosToggle();
            }}
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] font-semibold text-sm md:text-base transition-colors"
          >
            View Photos
          </button>
          <svg
            className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-500 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
