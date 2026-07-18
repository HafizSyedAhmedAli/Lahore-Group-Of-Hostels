import { MapPin, Star } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { BRANCHES, whatsappLink, formatPhone } from "@/lib/contact";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-ivory dark:bg-navy-950 py-16 md:py-20 scroll-mt-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Location
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy dark:text-ivory">
            Four branches in Lahore.
          </h2>
        </Reveal>

        <div className="space-y-14">
          {BRANCHES.map((branch, i) => {
            const encodedAddress = encodeURIComponent(branch.mapQuery);
            const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
            const directionsUrl =
              branch.directionsUrl ??
              `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

            return (
              <div
                key={branch.id}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <Reveal delay={i * 0.05}>
                  <h3 className="font-display text-xl font-bold text-navy dark:text-ivory mb-2">
                    {branch.label}
                  </h3>
                  <p className="text-ink/70 dark:text-ivory/60 max-w-md mb-2">
                    {branch.address}
                  </p>

                  {branch.id === "thokar-niaz-baig" && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-ink/70 dark:text-ivory/60 mb-4">
                      <Star
                        size={15}
                        className="text-gold"
                        fill="currentColor"
                      />{" "}
                      4.8 (36 reviews)
                    </span>
                  )}

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-ink/70 dark:text-ivory/60">
                    {branch.contacts.map((contact) => (
                      <a
                        key={contact.phone}
                        href={whatsappLink(contact.phone)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
                      >
                        <WhatsAppIcon size={15} className="text-[#25D366]" />
                        {contact.name} — {formatPhone(contact.phone)}
                      </a>
                    ))}
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

                <Reveal
                  delay={i * 0.05 + 0.1}
                  className="rounded-2xl overflow-hidden border border-navy/10 dark:border-ivory/10 h-72 md:h-80"
                >
                  <iframe
                    title={`Map – ${branch.label}`}
                    src={embedUrl}
                    className="w-full h-full"
                    loading="lazy"
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}