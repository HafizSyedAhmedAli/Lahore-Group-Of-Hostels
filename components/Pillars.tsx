import { BedDouble, ShieldCheck, Users } from "lucide-react";
import { RevealGroup, RevealItem } from "./motion/Reveal";

const pillars = [
  {
    icon: BedDouble,
    title: "Comfort",
    body: "A new building, a personal cupboard, a proper bed and mattress, and an attached or shared bath depending on your room — everything's already in place.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    body: "A managed, well-kept building where every resident is known — not just a room you rent, but a place that's looked after.",
  },
  {
    icon: Users,
    title: "Community",
    body: "A shared kitchen and washing area bring residents together — the kind of place where you actually get to know your building.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-ivory dark:bg-navy-950 py-16 md:py-20 transition-colors duration-300">
      <RevealGroup className="mx-auto max-w-6xl px-5 md:px-8 grid sm:grid-cols-3 gap-10">
        {pillars.map(({ icon: Icon, title, body }) => (
          <RevealItem
            key={title}
            className="text-center sm:text-left transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold dark:bg-gold/15 dark:border dark:border-gold/30 mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-3">
              <Icon size={22} />
            </span>
            <h3 className="font-display text-xl font-bold text-navy dark:text-ivory mb-2">
              {title}
            </h3>
            <p className="text-ink/75 dark:text-ivory/60 text-sm leading-relaxed">
              {body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
