import { useState } from "react";

interface eventProps {
  isSelected: boolean;
  selectedEvent: number | null;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  spots: string;
  image: string;
}

export default function EventsList() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  let events = [
    {
      id: 1,
      title: "Investment Banking Workshop",
      date: "Nov 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "MDCL 1305",
      description:
        "Learn the fundamentals of investment banking, including M&A modeling, LBO analysis, and how to break into the industry. Guest speakers from Goldman Sachs and RBC Capital Markets.",
      spots: "25 spots left",
      emoji: "💼",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Stock Pitch Competition",
      date: "Nov 22, 2025",
      time: "5:30 PM - 9:00 PM",
      location: "DSB Atrium",
      description:
        "Compete against fellow students in our annual stock pitch competition. Prizes include $500 cash and internship interviews with our sponsor firms. Open to all skill levels.",
      spots: "Registration closes Nov 18",
      emoji: "📊",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Networking Night with Alumni",
      date: "Dec 1, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Hamilton Club",
      description:
        "Connect with McMaster alumni working at top firms including Morgan Stanley, TD Securities, and CIBC. Formal attire required. Dinner and drinks provided.",
      spots: "RSVP Required",
      emoji: "🤝",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Financial Modeling Bootcamp",
      date: "Dec 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "TSH 122",
      description:
        "Intensive full-day bootcamp covering Excel financial modeling, DCF valuation, and comparable company analysis. Bring your laptop. Lunch provided.",
      spots: "15 spots left",
      emoji: "💻",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Crypto & Blockchain Panel",
      date: "Dec 12, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "MDCL 1110",
      description:
        "Explore the future of finance with industry experts in cryptocurrency and blockchain technology. Learn about DeFi, NFTs, and career opportunities in Web3.",
      spots: "Open to all",
      emoji: "₿",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    },
  ];

  events = [];

  return (
    <section className="w-full  py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[60px] md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Upcoming Events
          </h1>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600">
            {events.length != 0
              ? "Click on any event to learn more"
              : "Events coming soon, stay tuned!"}
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event) => {
            const isSelected = selectedEvent === event.id;

            return (
              <div
                onClick={() => setSelectedEvent(isSelected ? null : event.id)}
              >
                <Event
                  key={event.id}
                  isSelected={isSelected}
                  selectedEvent={selectedEvent}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  spots={event.spots}
                  image={event.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Event({
  isSelected,
  selectedEvent,
  title,
  date,
  time,
  location,
  description,
  spots,
  image,
}: eventProps) {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-md cursor-pointer
      transition-all duration-500 ease-in-out
      hover:shadow-xl border-2 border-transparent
      ${
        isSelected
          ? "scale-105 border-[var(--color-primary)] shadow-2xl"
          : "hover:scale-[1.02] opacity-100"
      }
      ${selectedEvent && !isSelected ? "scale-95 opacity-60" : ""}
    `}
    >
      <div className="p-4 md:p-6 bg-[var(--color-cream)]">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="text-4xl md:text-5xl flex-shrink-0">
            {/* {emoji} */}
          </div>

          <div className="flex-1 w-full ">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)]">
                {title}
              </h3>
              <span className="text-xs md:text-sm bg-[var(--color-primary)] text-[var(--color-accent)] px-3 py-1 rounded-full font-semibold w-fit">
                {spots}
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
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {time}
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

            <div
              className={`
              overflow-hidden transition-all duration-500
              ${
                isSelected
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }
            `}
            >
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <img
                  src={image}
                  alt={title}
                  className="w-full sm:w-64 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-1">
                  {description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[var(--color-primary)] hover:text-[var(--color-accent)] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base">
                  Register Now
                </button>
                <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-6 py-2 rounded-lg font-semibold transition-all text-sm md:text-base">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
