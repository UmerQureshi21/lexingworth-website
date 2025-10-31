import ExecutiveBoardSection from "../components/ExecutiveBoardSection";
import TeamHero from "../components/TeamHero";

export default function OurTeam() {
  return (
    <div className="w-full  relative top-[75px] flex flex-col justify-center items-center">
      <TeamHero />
      <ExecutiveBoardSection />
    </div>
  );
}
