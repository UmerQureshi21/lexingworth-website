import Hero from "../components/Hero";
import RecruitmentPlacements from "../components/RecruitmentPlacements";
import JoinCommunity from "../components/JoinCommunity";
import InstagramFeed from "../components/InstagramFeed";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <div className="flex flex-col items-center pb-[60px] pt-[80px] px-6">
        <h1 className="text-[60px] font-bold text-center mb-6 text-[var(--color-primary)]">
          Our History
        </h1>
        <p className="max-w-3xl text-center text-lg leading-relaxed text-gray-800">
          Founded in 2017 at McMaster University's DeGroote School of
          Business, Lexingworth Capital grew from a small group of students
          into a full student-run investment club, building a track record of
          stock pitch competitions and hands-on portfolio management.
        </p>
      </div>
      <div className="w-full relative h-[400px] overflow-hidden">
        <img
          src="/landscape-1.png"
          alt="City financial district"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/70 via-[var(--color-primary)]/40 to-[var(--color-primary)]/70" />
      </div>
      <RecruitmentPlacements />
      <JoinCommunity />
      <InstagramFeed />
    </div>
  );
}
