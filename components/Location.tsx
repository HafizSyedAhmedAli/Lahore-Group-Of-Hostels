import { MapPin, Phone, Star } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

const address =
  "Lahore Group Of Hostels, Saif Town, Stree No.7, Thokar Niaz Baig, Lahore, 53700, Pakistan";
const encodedAddress = encodeURIComponent(address);
const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

export default function Location() {
  return (
    <section
      id="location"
      className="bg-ivory dark:bg-navy-950 py-16 md:py-20 scroll-mt-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Location
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory mb-4">
            Based in Lahore.
          </h2>
          <p className="text-ink/70 dark:text-ivory/60 max-w-md mb-2">{address}</p>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink/70 dark:text-ivory/60">
            <span className="inline-flex items-center gap-1.5">
              <Star size={15} className="text-gold" fill="currentColor" /> 4.8 (36 reviews)
            </span>
            <a href="tel:+923188284671" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={15} className="text-gold" /> 0318 8284671
            </a>
            <a
              href="https://wa.me/923008570956"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <WhatsAppIcon size={15} className="text-[#25D366]" /> 0300 8570956
            </a>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-navy dark:text-ivory font-semibold hover:text-gold transition-colors"
          >
            <MapPin size={18} /> Get directions
          </a>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl overflow-hidden border border-navy/10 dark:border-ivory/10 h-72 md:h-80">
          <iframe title="Map" src={embedUrl} className="w-full h-full" loading="lazy" />
        </Reveal>
      </div>
    </section>
  );
}