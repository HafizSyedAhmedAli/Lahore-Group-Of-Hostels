import { User, Users2, ShowerHead, Droplets } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { CountUp } from "./motion/CountUp";
import { getWhatsAppUrl } from "@/lib/contact";

const rooms = [
  {
    title: "Single Seater",
    occupancy: "1 person · whole room",
    icon: User,
    rent: 18000,
    rentNote: "per month",
    security: 8000,
    securityNote: "one-time",
    bath: "Attached bath",
  },
  {
    title: "2-Seater Room",
    occupancy: "2 people · priced per seat",
    icon: Users2,
    rent: 12000,
    rentNote: "per seat / month",
    security: 5000,
    securityNote: "per seat, one-time",
    bath: "Attached bath",
  },
  {
    title: "3-Seater — Attached Bath",
    occupancy: "3 people · priced per seat",
    icon: ShowerHead,
    rent: 9000,
    rentNote: "per seat / month",
    security: 5000,
    securityNote: "per seat, one-time",
    bath: "Attached bath",
  },
  {
    title: "3-Seater — Common Washroom",
    occupancy: "3 people · priced per seat",
    icon: Droplets,
    rent: 8000,
    rentNote: "per seat / month",
    security: 5000,
    securityNote: "per seat, one-time",
    bath: "Shared washroom on the floor",
  },
];

export default function RoomPricing() {
  return (
    <section
      id="rooms"
      className="relative overflow-hidden bg-ivory dark:bg-navy-950 py-16 md:py-24 scroll-mt-24 transition-colors duration-300"
    >
      <div className="pointer-events-none absolute top-1/3 left-[-8%] h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Rooms & rates
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory">
            Four ways to live here.
          </h2>
          <p className="mt-4 text-ink/70 dark:text-ivory/60">
            Pick a room by how much space — and how much company — you want. A
            one-time Rs 500 registration fee applies when you confirm a seat.
          </p>
        </Reveal>

        <RevealGroup
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          stagger={0.1}
        >
          {rooms.map((room) => (
            <RevealItem
              key={room.title}
              className="flex flex-col items-center group"
            >
              <div className="w-[88px] rounded-t-[44px] bg-navy border-4 border-b-0 border-gold/50 h-16 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <room.icon size={26} className="text-gold" />
              </div>
              <div className="w-full border border-navy/15 dark:border-ivory/15 border-t-0 rounded-b-2xl bg-white/60 dark:bg-ivory/5 px-6 pt-8 pb-7 -mt-px text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold/60 group-hover:shadow-xl group-hover:shadow-navy/10">
                <h3 className="font-display text-lg font-bold text-navy dark:text-ivory leading-snug">
                  {room.title}
                </h3>
                <p className="text-xs text-ink/60 dark:text-ivory/50 mt-1 mb-5">
                  {room.occupancy}
                </p>

                <div className="font-mono">
                  <p className="text-2xl font-semibold text-navy dark:text-ivory">
                    Rs <CountUp value={room.rent} />
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-ink/50 dark:text-ivory/40 mb-3">
                    {room.rentNote}
                  </p>
                  <p className="text-base font-semibold text-gold">
                    Rs <CountUp value={room.security} />
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-ink/50 dark:text-ivory/40">
                    security · {room.securityNote}
                  </p>
                </div>

                <p className="mt-5 text-xs text-ink/70 dark:text-ivory/60 border-t border-navy/10 dark:border-ivory/10 pt-4">
                  {room.bath}
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Hi! I'm interested in the ${room.title} (Rs ${room.rent.toLocaleString()} ${room.rentNote}). Is a seat available?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-navy text-ivory px-4 py-2.5 text-sm font-semibold hover:bg-gold hover:text-navy dark:bg-gold dark:text-navy dark:hover:bg-ivory transition-colors"
                >
                  Book this room
                </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
