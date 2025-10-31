import { NavLink } from "react-router";

interface props {
  text: string;
  widthPercent: number;
  fontSize: number;
  marginTop?: number;
  alignment?: string;
  colour: string;
  page: string;
}

export default function NavBarLink({
  text,
  widthPercent,
  fontSize,
  marginTop = 0,
  alignment = "left",
  colour,
  page,
}: props) {
  return (
    <NavLink
      to={page}
      className={`before:bg-[${colour}] navbar-link border-b-[0.5px] border-b-[${colour}] relative h-fit inline-block hover:cursor-pointer`}
      style={{
        width: `${widthPercent}%`,
        fontSize: `${fontSize}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      <p
        className={`text-${alignment}`}
        style={{
          color: colour,
        }}
      >
        {text}
      </p>
    </NavLink>
  );
}
