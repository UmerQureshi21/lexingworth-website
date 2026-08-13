import { NavLink } from "react-router";

export default function JoinCommunity() {
  return (
    <div className="w-full bg-[var(--color-primary)] text-white py-[100px] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
            Gain valuable industry exposure and network with peers who have
            experience working in the world of finance. Our general
            meetings, workshops, and speaker events are all great ways to
            get involved.
          </p>
          <NavLink
            to="/events"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 font-medium hover:opacity-90 transition-opacity duration-300"
          >
            Our Events
          </NavLink>
        </div>

        <div>
          <img
            src="/lc-photo-1.png"
            alt="Lexingworth Capital members at a networking event"
            className="w-full h-[380px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
