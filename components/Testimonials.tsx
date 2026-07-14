import { Star, Quote } from "lucide-react";
import { Reveal } from "./motion/Reveal";

const testimonials = [
  {
    quote:
      "Great hostel with clean facilities, supportive management, and a safe, comfortable environment. Highly recommended.",
    name: "Ayesha Shaukat",
  },
  {
    quote:
      "Good environment, well furnished and well managed rooms, friendly environment, good location and affordable charges.",
    name: "Muhammad Afzal",
  },
  {
    quote: "Living here for the past 6 months — neat and clean hostel.",
    name: "Ali Raza",
  },
  {
    quote:
      "The rooms were clean, spacious, and well-ventilated. Washrooms were very well-maintained, with regular cleaning.",
    name: "Awais Aslam",
  },
  {
    quote: "Clean rooms, filtered water, kitchen facility, and overall a very good environment.",
    name: "Waseem Dhool",
  },
  {
    quote: "Very clean, noise-free rooms. My best experience.",
    name: "Shahzad Rajpot",
  },
  {
    quote:
      "Close to the Orange Line stop at Thokar Niaz Baig, with good living rooms at reasonable rates.",
    name: "Muhammad Tariq",
  },
  {
    quote: "Best affordable hostel in Lahore.",
    name: "Wajid Ali",
  },
];

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  return (
    <div className="w-[300px] sm:w-[340px] shrink-0 rounded-2xl border border-navy/10 dark:border-ivory/10 bg-white/70 dark:bg-ivory/5 p-6">
      <Quote size={22} className="text-gold mb-3" />
      <p className="text-sm text-ink/80 dark:text-ivory/70 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm font-semibold text-navy dark:text-ivory">{name}</p>
      <p className="text-xs text-ink/50 dark:text-ivory/40">Google review</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory dark:bg-navy-950 py-16 md:py-20 overflow-hidden transition-colors duration-300">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            What residents say
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory">
            Real reviews, real residents.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-semibold text-navy dark:text-ivory">4.8</span>
          <span className="text-sm text-ink/60 dark:text-ivory/50">(36 Google reviews)</span>
        </div>
      </Reveal>

      <div className="group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex gap-6 pr-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`a-${i}`} {...t} />
            ))}
          </div>
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`b-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.15} className="mx-auto max-w-6xl px-5 md:px-8 mt-8">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Lahore+Group+Of+Hostels+Saif+Town+Thokar+Niaz+Baig"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-navy dark:text-ivory hover:text-gold transition-colors"
        >
          Read all 36 reviews on Google →
        </a>
      </Reveal>
    </section>
  );
}