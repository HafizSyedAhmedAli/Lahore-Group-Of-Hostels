"use client";

import { motion } from "motion/react";

export default function ArchDivider() {
  const arches = 20;
  const r = 20;
  let d = `M0,${r}`;
  for (let i = 0; i < arches; i++) {
    const x = (i + 1) * r * 2;
    d += ` A${r},${r} 0 0 1 ${x},${r}`;
  }

  return (
    <svg
      viewBox={`0 0 ${arches * r * 2} ${r * 2}`}
      preserveAspectRatio="none"
      className="w-full h-8 md:h-10 text-navy/30 dark:text-ivory/20"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      />
    </svg>
  );
}
