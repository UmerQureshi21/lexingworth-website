import { useEffect, useRef, useState } from 'react';

interface props {
  title: string;
  des: string;
  widthPercent: number;
  textSize: number;
}

export default function DescriptiveBox({ title, des, widthPercent, textSize }: props) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className={`mt-[100px] flex flex-col items-center w-full lg:w-[${widthPercent}%] transition-all duration-1000`}
    >
      <h1 className={`text-[${textSize}px] font-bold text-center mb-6 transition-all duration-700 ${
        isVisible ? 'scale-110 text-[#283618]' : 'scale-100'
      }`}>
        {title}
      </h1>
      <div className={`bg-[#FFFFFF] w-[80%] rounded-[20px] h-[250px] flex items-center justify-center text-center p-[30px] 
                      relative overflow-hidden
                      shadow-lg
                      transition-all duration-700 ease-out
                      border-2 border-transparent
                      ${isVisible ? 'scale-105 -translate-y-2 shadow-2xl border-[#FDBF57]' : ''}`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#FDBF57]/0 via-[#283618]/0 to-[#FDBF57]/0 
                        transition-all duration-1000 rounded-[20px]
                        ${isVisible ? 'from-[#FDBF57]/10 via-[#283618]/5 to-[#FDBF57]/10' : ''}`}></div>
        
        {/* Shine effect */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform transition-all duration-1000 ease-in-out
                          ${isVisible ? 'left-full' : '-left-full'}`}></div>
        </div>
        
        <p className={`relative z-10 transition-all duration-700 ${isVisible ? 'scale-105' : 'scale-100'}`}>{des}</p>
      </div>
    </div>
  );
}