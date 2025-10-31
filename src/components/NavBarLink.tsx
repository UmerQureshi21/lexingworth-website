interface props {
  text: string;
  widthPercent: number;
  fontSize: number;
  marginTop?: number;
  alignment?: string;
  colour?: string;
}

export default function NavBarLink({
  text,
  widthPercent,
  fontSize,
  marginTop = 0,
  alignment = "left",
  colour = "black",
}: props) {
  return (
    <button
      className={`navbar-link text-[${colour}] text-${alignment} border-b-[0.5px] border-b-[black] relative h-fit inline-block hover:cursor-pointer`}
      style={{
        width: `${widthPercent}%`,
        fontSize: `${fontSize}px`,
        marginTop: `${marginTop}px`,
      }}
    >
      {text}
    </button>
  );
}
