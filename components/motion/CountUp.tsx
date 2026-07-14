"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

export function CountUp({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (numRef.current) {
          numRef.current.textContent =
            Math.round(latest).toLocaleString("en-US");
        }
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={numRef}>0</span>
    </span>
  );
}
