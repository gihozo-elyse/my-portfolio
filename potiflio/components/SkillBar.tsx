"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold uppercase tracking-wider text-white">
          {name}
        </span>
        <span className="text-sm font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={cn("skill-bar-fill transition-all", visible ? "opacity-100" : "opacity-0")}
          style={{
            width: visible ? `${percentage}%` : "0%",
            transitionDuration: "1.5s",
            transitionTimingFunction: "ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

