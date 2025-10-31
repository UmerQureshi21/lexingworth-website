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
    des: "Facilitate networking oppurtunities with alumni working in finance (investment banking, private equity, etc), giving members the chance to connect and seek mentorship",
  },
  {
    title: "Career Guidance",
    des: "Provide resume building workshops, interview prep, and Linkedin optimization sessions specifically for finance roles like analysts, auditors, or financial planners.",
  },
  {
    title: "Workshops & Seminars",
    des: "Bring in industry proffessionals like analysts, portfolio managers, or bankers to give talks on investment strategies, and financial modeling.",
  },
];

export default function Home() {
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
      <div className="flex bg-[#F4F1DE] flex-col items-center   pb-[100px]">
        <h1 className="text-[80px] text-center">What do We Offer?</h1>

        <div className="flex flex-col md:flex-row items-center md:justify-center">
          {whatWeOffer.map((wwo, index) => (
            <DescriptiveBox
              key={index}
              title={wwo.title}
              des={wwo.des}
              textSize={30}
              widthPercent={90 / whatWeOffer.length}
            />
          ))}
        </div>
      </div>
      <EventsList />
      <FaqSection />
    </div>
  );
}
