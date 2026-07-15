"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BedDouble, ShieldCheck, Users, Star } from "lucide-react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory dark:bg-navy-950 transition-colors duration-300">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-[-8%] h-[300px] w-[300px] rounded-full bg-navy/10 dark:bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4"
          >
            New building · Now taking residents · Lahore
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: easeOut },
              },
            }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-bold text-navy dark:text-ivory"
          >
            The room&apos;s{" "}
            <span className="relative inline-block">
              ready.
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: easeOut }}
                viewBox="0 0 120 12"
                className="absolute left-0 -bottom-2 w-full h-3"
                aria-hidden="true"
              >
                <motion.path
                  d="M2,8 Q30,2 60,7 T118,5"
                  fill="none"
                  stroke="#C9973D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br /> So is the city.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="mt-6 text-lg text-ink/80 dark:text-ivory/70 max-w-md"
          >
            A new hostel building in Lahore with a personal cupboard, a real
            mattress, an attached or shared bath, a working kitchen, and Wi-Fi
            that&apos;s already switched on. Pick a room type and move in
            without buying a thing.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#rooms"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-navy text-ivory px-7 py-3.5 font-semibold shadow-lg shadow-navy/20 hover:bg-gold hover:text-navy dark:bg-gold dark:text-navy dark:hover:bg-ivory transition-colors"
            >
              See Room Types
            </motion.a>
            <motion.a
              href="tel:+923188284671"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-navy/30 text-navy hover:border-navy dark:border-ivory/30 dark:text-ivory dark:hover:border-ivory px-7 py-3.5 font-semibold transition-colors"
            >
              Book a Visit
            </motion.a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="mt-10 flex items-center gap-8 text-navy/70 dark:text-ivory/70"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <BedDouble size={18} className="text-gold" /> Comfort
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck size={18} className="text-gold" /> Safety
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <Users size={18} className="text-gold" /> Community
            </span>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-gold/50 shadow-2xl shadow-navy/20"
            >
              <Image
                src="/hero.jpeg"
                alt="Lahore Group of Hostels building, evening exterior view"
                fill
                priority
                sizes="(min-width: 768px) 480px, 90vw"
                className="object-cover object-[65%_center]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: easeOut }}
            className="absolute -left-4 bottom-4 sm:-left-6 sm:bottom-6 flex items-center gap-2 rounded-2xl bg-white/90 dark:bg-navy-950/90 backdrop-blur border border-navy/10 dark:border-ivory/15 px-4 py-3 shadow-xl"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold shrink-0">
              <Star size={18} fill="currentColor" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-navy dark:text-ivory">
                4.8 · Google
              </p>
              <p className="text-xs text-ink/60 dark:text-ivory/50">
                36 reviews
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
