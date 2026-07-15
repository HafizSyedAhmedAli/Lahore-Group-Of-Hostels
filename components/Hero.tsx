"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BedDouble, ShieldCheck, Users, Star } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden transition-colors duration-300">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpeg"
          alt="Lahore Group of Hostels building, evening exterior view"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-110"
        />
        {/* Overlay for text legibility, in both light and dark mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-[-8%] h-[300px] w-[300px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="max-w-2xl"
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
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-bold text-ivory"
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
            className="mt-6 text-lg text-ivory/80 max-w-md"
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
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#rooms"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gold text-navy px-7 py-3.5 font-semibold shadow-lg shadow-navy-950/30 hover:bg-ivory transition-colors"
            >
              See Room Types
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10 px-7 py-3.5 font-semibold transition-colors"
            >
              Book a Visit
            </motion.a>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: easeOut }}
              className="flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur border border-ivory/15 px-4 py-2.5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                <Star size={16} fill="currentColor" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ivory">4.8 · Google</p>
                <p className="text-xs text-ivory/60">36 reviews</p>
              </div>
            </motion.div>
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
            className="mt-10 flex items-center gap-8 text-ivory/80"
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
      </div>
    </section>
  );
}
