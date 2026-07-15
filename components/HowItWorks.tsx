import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Visit & choose your room",
    body: "Tour the building and see the room type you're interested in before deciding on anything.",
  },
  {
    n: "02",
    title: "Pay the registration fee",
    body: "A small one-time registration fee confirms and holds your seat — ask us for the current amount.",
  },
  {
    n: "03",
    title: "Move in",
    body: "Settle your first month's rent and security deposit, get your keys, and move in.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sand dark:bg-navy-soft py-16 md:py-20 scroll-mt-24 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            How it works
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory mb-12">
            Three steps in.
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-3 gap-10" stagger={0.12}>
          {steps.map((s) => (
            <RevealItem key={s.n} className="group">
              <span className="font-display text-4xl font-bold text-gold/70 transition-colors duration-300 group-hover:text-gold">
                {s.n}
              </span>
              <h3 className="font-display text-lg font-bold text-navy dark:text-ivory mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-ink/70 dark:text-ivory/60 leading-relaxed">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}