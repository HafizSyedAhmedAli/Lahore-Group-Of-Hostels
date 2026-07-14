import { UtensilsCrossed } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";

export default function Meals() {
  return (
    <section id="meals" className="bg-navy py-14 md:py-16 scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold shrink-0">
            <UtensilsCrossed size={24} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-ivory">
              Meals, whenever you want them
            </h2>
            <p className="text-ivory/70 text-sm mt-1 max-w-md">
              No forced meal plan — pay Rs 250 per meal when you want one, or
              use the shared kitchen and cook for yourself.
            </p>
          </div>
        </div>
        <div className="font-mono text-3xl font-bold text-gold shrink-0">
          Rs <CountUp value={250} />
          <span className="text-sm text-ivory/50 font-body"> / meal</span>
        </div>
      </Reveal>
    </section>
  );
}
