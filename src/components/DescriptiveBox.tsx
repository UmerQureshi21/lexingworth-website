import { useEffect, useRef, useState } from 'react';

interface props {
  title: string;
  points: string[];
  widthPercent: number;
  textSize: number;
}

export default function DescriptiveBox({ title, points, widthPercent, textSize }: props) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
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
      className={`mt-[50px] flex flex-col items-center w-full lg:w-[${widthPercent}%] transition-all duration-1000`}
    >
      <h1 className={`text-[${textSize}px] font-bold text-center mb-6 transition-all duration-700 ${
        isVisible ? 'scale-110 text-[var(--color-primary)]' : 'scale-100'
      }`}>
        {title}
      </h1>
      <div className={`bg-[white] w-full rounded-[20px] flex items-start p-5 h-[200px]
                      relative overflow-hidden
                      shadow-lg
                      transition-all duration-700 ease-out
                      border-2 border-transparent
                      ${isVisible ? 'scale-105 -translate-y-2 shadow-2xl border-[var(--color-accent)]' : ''}`}>
        {/* Gold accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-[20px] bg-[var(--color-accent)] transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 via-[var(--color-primary)]/0 to-[var(--color-accent)]/0
                        transition-all duration-1000 rounded-[20px]
                        ${isVisible ? 'from-[var(--color-accent)]/10 via-[var(--color-primary)]/5 to-[var(--color-accent)]/10' : ''}`}></div>

        <ul className="relative z-10 flex flex-col gap-3 pl-4">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
              <span className={`text-gray-800 leading-relaxed transition-all duration-700 ${isVisible ? 'scale-105' : 'scale-100'}`}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
