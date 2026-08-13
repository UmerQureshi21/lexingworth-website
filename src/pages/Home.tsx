import Hero from "../components/Hero";
import DescriptiveBox from "../components/DescriptiveBox";

const descriptiveBoxes = [
  {
    title: "Our History",
    points: [
      "Founded in 2017 at McMaster University's DeGroote School of Business",
      "Grew from a small group of students into a full student-run investment club",
      "Built a track record of stock pitch competitions and hands-on portfolio management",
    ],
  },
];

export default function Home() {
  return (
    <div className="w-full  relative top-[75px] flex flex-col justify-center items-center">
      <Hero />
      <div className=" gap-[150px] flex  flex-col items-center lg:flex-row lg:justify-center pb-[100px]">
        {descriptiveBoxes.map((db, index) => (
          <DescriptiveBox
            key={index}
            title={db.title}
            points={db.points}
            textSize={60}
            widthPercent={50}
          />
        ))}
      </div>
    </div>
  );
}
