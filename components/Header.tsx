"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import WhatsAppIcon from "./WhatsAppIcon";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#video-tour", label: "Videos" },
  { href: "#meals", label: "Meals" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#location", label: "Location" },
];

const whatsappUrl =
  "https://wa.me/923008570956?text=" +
  encodeURIComponent("Hi, I'm interested in a room at Lahore Group of Hostels.");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/85 dark:bg-navy-950/85 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 dark:border-ivory/10 shadow-[0_4px_20px_-6px_rgba(15,27,46,0.15)]"
          : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Lahore Group of Hostels"
            width={48}
            height={48}
            className={`object-contain transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}
          />
          <span className="hidden sm:block font-display text-lg font-bold text-navy dark:text-ivory leading-none">
            Lahore Group
            <br /> of Hostels
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-navy/80 dark:text-ivory/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative py-1">
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Chat on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:brightness-105 transition-[filter]"
          >
            <WhatsAppIcon size={19} />
          </motion.a>
          <motion.a
            href="tel:+923188284671"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-navy text-ivory px-5 py-2.5 text-sm font-semibold shadow-md shadow-navy/20 hover:bg-gold hover:text-navy dark:bg-gold dark:text-navy dark:hover:bg-ivory transition-colors"
          >
            <Phone size={16} /> Book a Visit
          </motion.a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-navy dark:text-ivory"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-navy/10 dark:border-ivory/10 bg-ivory dark:bg-navy-950"
          >
            <nav className="flex flex-col gap-4 font-body text-navy/90 dark:text-ivory/80 px-5 pb-6 pt-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex gap-3">
                <a
                  href="tel:+923188284671"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-navy text-ivory px-5 py-3 text-sm font-semibold dark:bg-gold dark:text-navy"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-semibold"
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}