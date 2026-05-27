import React, { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500; // 1.5 seconds duration
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= duration) {
              setCount(value);
              return;
            }

            // Ease-out expo curve for smooth deceleration
            const progress = 1 - Math.pow(2, -10 * (elapsedTime / duration));
            const currentCount = Math.floor(progress * value);
            setCount(currentCount);
            requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={elementRef} className="tabular-nums font-display font-extrabold tracking-tight bg-gradient-to-r from-[#FF67FF] via-[#00AEEF] to-[#2C48D4] bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
};
