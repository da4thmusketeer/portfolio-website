"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 60,
  delay = 200,
  className = "",
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={`inline ${className}`}>
      <span>{displayedText}</span>
      <span
        className={`ml-1 inline-block h-[0.85em] w-[0.06em] min-w-[2px] bg-coral align-baseline ${
          isComplete ? "animate-cursor" : "opacity-100"
        }`}
      />
    </span>
  );
}
