import { UtensilsCrossed } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import { WHATSAPP_URL } from "@/lib/contact";

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
              No forced meal plan — pay per meal only when you want one, or use
              the shared kitchen and cook for yourself.
            </p>
          </div>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-gold px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-navy transition-colors shrink-0"
        >
          Ask about meal rates
        </a>
      </Reveal>
    </section>
  );
}
