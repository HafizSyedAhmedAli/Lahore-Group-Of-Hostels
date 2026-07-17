"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeLogo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount, next-themes hasn't resolved yet — default to the light-mode
  // mark since that's Next.js's server-rendered first paint either way.
  const src =
    mounted && resolvedTheme === "dark" ? "/light.jpeg" : "/dark.jpeg";

  return (
    <Image
      src={src}
      alt="Lahore Group of Hostels"
      width={48}
      height={48}
      priority
      className={className}
    />
  );
}
