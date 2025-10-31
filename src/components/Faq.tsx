import { useRef, useState } from "react";

interface props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: props) {
  let h1Ref = useRef<HTMLHeadingElement | null>(null);
  let containerRef = useRef<HTMLDivElement | null>(null);
  let [clickCount, setClickCount] = useState<number>(0);
  let [flag, setFlag] = useState<boolean>(true);

  return (
    <div
      ref={containerRef}
      className="transition-all duration-250 ease w-full h-[75px] mt-[20px] border-t-[1px] border-t-[rgba(0,0,0,0.2)] flex flex-col"
    >
      <div


        ref={h1Ref}
        onClick={() => {
          setClickCount(clickCount + 1);
          setFlag(false);
          if (clickCount % 2 === 0) {
            h1Ref.current?.classList.remove("faq-mouse-up");
            h1Ref.current?.classList.add("faq-mouse-down");
            if (containerRef.current) {
              containerRef.current.style.height = "150px";
            }
          } else {
            h1Ref.current?.classList.remove("faq-mouse-down");
            h1Ref.current?.classList.add("faq-mouse-up");
            if (containerRef.current) {
              containerRef.current.style.height = "75px";
            }
          }
        }}
        className="relative transition duration-150 ease ml-[1%] sm:text-[30px] font-extralight mt-[20px] w-full  faq-question"
      >
        <h2 className="sm:w-full w-[60%]">{question}</h2>
      </div>
      <p
        className="transition duration-200 ease ml-[1%] mt-[20px] font-extralight overflow-scroll"
        style={{
          opacity:
            containerRef.current?.style.height === "75px" || flag ? "0" : "1",
        }}
      >
        {answer}
      </p>
    </div>
  );
}
