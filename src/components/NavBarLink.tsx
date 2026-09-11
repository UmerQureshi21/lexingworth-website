import { Link, NavLink } from "react-router";

interface SubLink {
  text: string;
  hash: string;
}

interface Props {
  text: string;
  widthPercent: number;
  fontSize: number;
  marginTop?: number;
  alignment?: string;
  colour: string;
  page: string;
  subLinks?: SubLink[];
}

export default function NavBarLink({
  text,
  widthPercent,
  fontSize,
  marginTop = 0,
  alignment = "left",
  colour,
  page,
  subLinks,
}: Props) {
  return (
    <div
      className="relative group h-fit inline-block"
      style={{
        width: `${widthPercent}%`,
        fontSize: `${fontSize}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      <NavLink
        to={page}
        className={({ isActive }) =>
          `relative h-fit block w-full transition-all duration-300 ${
            isActive ? "active" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            <p
              className={`text-${alignment} font-medium transition-all duration-300 group-hover:tracking-wide`}
              style={{ color: colour, textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
            >
              {text}
            </p>

            {/* Animated underline */}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ease-out ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
              style={{ backgroundColor: colour }}
            ></span>
          </>
        )}
      </NavLink>

      {subLinks && subLinks.length > 0 && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-[600]">
          <div className="min-w-[230px] rounded-lg bg-[var(--color-primary)] shadow-xl border border-white/10 py-2">
            {subLinks.map((sub) => (
              <Link
                key={sub.hash}
                to={`${page}#${sub.hash}`}
                className="block px-4 py-2.5 text-sm text-white/85 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {sub.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
