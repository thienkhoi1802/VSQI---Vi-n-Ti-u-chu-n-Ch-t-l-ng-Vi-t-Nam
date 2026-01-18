import React, { useEffect, useState, useRef } from 'react';
import { STATS_DATA } from '../constants';

const CountUpAnimation = ({ target, duration = 2000 }: { target: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  
  // Parse numeric value from string (e.g. "14.400+" -> 14400)
  // Remove dots and non-digits to get the raw number
  const numericValue = parseInt(target.replace(/\./g, '').replace(/\D/g, ''), 10);
  
  // Extract suffix (e.g. "+" or any other non-digit/non-dot characters)
  const suffix = target.replace(/[0-9.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only run animation once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out quart function for smooth landing effect
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      const currentCount = Math.floor(easeOut * numericValue);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericValue); // Ensure final value is exact
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, numericValue, duration]);

  // Format with dots for thousands separator (Vietnamese style)
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <span ref={elementRef} className="tabular-nums">
      {formattedCount}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="pb-24 pt-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#EEEEEE] border border-[#141D3426] p-[40px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[25px]">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start flex-1 w-full md:w-auto">
              {/* Number: 64px Regular, Blue CTA */}
              <div className="text-[64px] font-normal text-[#0E5EE7] leading-[83.2px] -tracking-[0.64px] font-sans mb-0">
                <CountUpAnimation target={stat.value} />
              </div>
              {/* Label: 16px Regular, Dark 80% */}
              <div className="text-[16px] font-normal text-[#141D34CC] leading-[24px] font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;