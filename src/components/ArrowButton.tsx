import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

type props = {
  text: string;
};

export default function ArrowButton({ text }: props) {
  const spanElm = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  function handleMouseEnter() {
    if (spanElm.current) {
      spanElm.current.style.left = "20px";
    }
  }

  function handleMouseLeave() {
    if (spanElm.current) {
      spanElm.current.style.left = "0px";
    }
  }

  return (
    <button
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
      onClick={() => {
        window.scrollTo(0, 0);
        navigate("/co-found");
      }}
      className="relative mr-[60px] px-[25px] py-[10px]  rounded-[40px] border-[1px] border-[rgba(0,0,0,0.3)] flex self-end mb-[140px] mr-[70px] text-[20px] transition duration-200 ease hover:bg-[#EBE7E2] hover:border-[#EBE7E2]"
    >
      {text}{" "}
      <span
        ref={spanElm}
        className="relative transition-all duration-300 ease-in-out ml-[10px] pr-[10px]"
        style={{ left: "0px" }}
      >
        <FontAwesomeIcon icon={faArrowRightLong} />
      </span>
    </button>
  );
}
