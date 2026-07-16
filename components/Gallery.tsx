"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

type Photo = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "big";
};

const photos: Photo[] = [
  {
    src: "/gallery/facade-night.jpg",
    alt: "Building exterior, evening",
    span: "big",
  },
  { src: "/gallery/single-room.jpg", alt: "Single seater room" },
  { src: "/gallery/two-seater-room.jpg", alt: "2-seater room" },
  { src: "/gallery/kitchen.jpg", alt: "Shared kitchen", span: "wide" },
  { src: "/gallery/entrance.jpg", alt: "Main entrance", span: "tall" },
  { src: "/gallery/common-area.jpg", alt: "Common area" },
  { src: "/gallery/three-seater-room.jpg", alt: "3-seater room" },
  { src: "/gallery/bathroom.jpg", alt: "Attached bathroom" },
  {
    src: "/gallery/building-portrait.jpg",
    alt: "Lahore Group of Hostels building",
    span: "wide",
  },
];

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  big: "sm:col-span-2 sm:row-span-2",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <section
      id="gallery"
      className="bg-ivory dark:bg-navy-950 py-16 md:py-20 scroll-mt-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Take a look inside
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory">
            The building, in photos.
          </h2>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] gap-4"
          stagger={0.06}
        >
          {photos.map((photo, i) => (
            <RevealItem
              key={photo.src}
              className={`relative group overflow-hidden rounded-2xl bg-navy/5 dark:bg-ivory/5 ${spanClass[photo.span ?? ""] ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="absolute inset-0 w-full h-full"
                aria-label={`View photo: ${photo.alt}`}
              >
                {/* Plain <img> here — bypasses the Next/Netlify image optimizer,
                    which was silently failing on this tile's small requested width */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                  <Expand
                    size={22}
                    className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 text-ivory/80 hover:text-gold transition-colors"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-8 text-ivory/70 hover:text-gold transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-8 text-ivory/70 hover:text-gold transition-colors"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
