import { Outlet } from "react-router";
import TeamHero from "../components/TeamHero";
import TeamNavbar from "../components/TeamNavBar";

export default function OurTeamLayout() {
  return (
    <div className="w-full">
      <TeamHero />
      <TeamNavbar />
      <Outlet />
    </div>
  );
}
