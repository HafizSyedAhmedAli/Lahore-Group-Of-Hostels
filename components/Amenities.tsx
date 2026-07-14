import {
  Building2,
  Archive,
  ShowerHead,
  Wifi,
  UtensilsCrossed,
  BedDouble,
  WashingMachine,
  Receipt,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const amenities = [
  { icon: Building2, label: "New building" },
  { icon: Archive, label: "Personal cupboard" },
  { icon: ShowerHead, label: "Attached / shared bath" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: UtensilsCrossed, label: "Shared kitchen" },
  { icon: BedDouble, label: "Bed & mattress" },
  { icon: WashingMachine, label: "Washing area" },
  { icon: Receipt, label: "Utility bills included" },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-navy py-16 md:py-20 scroll-mt-24"
    >
      <div className="pointer-events-none absolute top-10 right-[-10%] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            What&apos;s already inside
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ivory">
            Nothing to buy, nothing to set up.
          </h2>
        </Reveal>

        <RevealGroup
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10"
          stagger={0.06}
        >
          {amenities.map(({ icon: Icon, label }) => (
            <RevealItem
              key={label}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
                <Icon size={22} />
              </span>
              <span className="text-ivory/80 text-sm">{label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
