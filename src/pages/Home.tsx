import { useState } from "react";
import FaqSection from "../components/FaqSection";
import Hero from "../components/Hero";
import DescriptiveBox from "../components/DescriptiveBox";
import EventsList from "../components/EventsList";

const descriptiveBoxes = [
  {
    title: "Who We Are",
    des: "Lexingworth Capital is a student-run investment club founded in 2017 at McMaster University - DeGroote School of Business",
  },
  {
    title: "Our Vision",
    des: "Our vision is to provide our members exclusive and hands on experience through exposure to the finance industry, active daily financial management, and participation in stock pitch competitions.",
  },
];

const whatWeOffer = [
  {
    title: "Networking Events",
    points: [
      "Connect with alumni in investment banking, private equity, and more",
      "One-on-one mentorship opportunities with industry professionals",
      "Exclusive member-only networking nights each semester",
    ],
  },
  {
    title: "Career Guidance",
    points: [
      "Resume and cover letter workshops tailored for finance roles",
      "Mock interview sessions for analyst and advisory positions",
      "LinkedIn optimization for maximum recruiter visibility",
    ],
  },
  {
    title: "Workshops & Seminars",
    points: [
      "Guest talks from portfolio managers, analysts, and bankers",
      "Hands-on financial modeling and valuation training",
      "Deep dives into investment strategies and market analysis",
    ],
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full  relative top-[75px] flex flex-col justify-center items-center">
      <Hero />
      <div className="flex bg-[#F4F1DE] flex-col items-center  lg:flex-row lg:justify-center  pb-[100px]">
        {descriptiveBoxes.map((db, index) => (
          <DescriptiveBox
            key={index}
            title={db.title}
            des={db.des}
            textSize={60}
            widthPercent={90 / descriptiveBoxes.length}
          />
        ))}
      </div>
      <div className="w-full bg-[#F4F1DE] flex flex-col items-center pb-[100px] px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12">
          What do We Offer?
        </h1>

        <div className="w-full max-w-2xl flex flex-col gap-4">
          {whatWeOffer.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-lg overflow-hidden"
                style={isOpen ? { borderColor: "#FDBF57" } : {}}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-xl sm:text-2xl font-semibold text-[#283618]">
                    {item.title}
                  </span>
                  <span
                    className="text-2xl text-[#283618] transition-transform duration-300"
                    style={isOpen ? { transform: "rotate(45deg)" } : {}}
                  >
                    +
                  </span>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <ul className="px-6 pb-5 flex flex-col gap-3">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FDBF57] shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <EventsList />
      <FaqSection />
    </div>
  );
}
