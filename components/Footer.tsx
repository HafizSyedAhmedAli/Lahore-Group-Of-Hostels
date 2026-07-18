import { Mail, MapPin } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import ThemeLogo from "./ThemeLogo";
import { BRANCHES, whatsappLink, formatPhone } from "@/lib/contact";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-16 pb-8 scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <ThemeLogo className="h-14 w-14 rounded-full object-contain mb-4" />
            <p className="text-ivory/60 text-sm max-w-xs">
              Comfort, safety, and community — four hostel branches in the
              heart of Lahore.
            </p>
          </div>

          {BRANCHES.map((branch) => (
            <div key={branch.id}>
              <h3 className="font-display text-ivory font-bold mb-1">
                {branch.label}
              </h3>
              {/* {branch.id === "johar-town" && (
                <p className="text-ivory/50 text-xs mb-3">
                  For seats at this branch, please contact Muhammad Saleem
                  directly.
                </p>
              )} */}
              <ul className="space-y-3 text-ivory/70 text-sm mt-3">
                {branch.contacts.map((contact) => (
                  <li key={contact.phone} className="flex items-center gap-2">
                    <WhatsAppIcon size={16} className="text-[#25D366]" />
                    <a
                      href={whatsappLink(contact.phone)}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {contact.name} — {formatPhone(contact.phone)}
                    </a>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  {branch.address}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 pb-4 flex flex-wrap items-center justify-center gap-6 text-ivory/60 text-sm">
          <a
            href="mailto:stayatlahoregroupofhostels@gmail.com"
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail size={16} className="text-gold" />
            stayatlahoregroupofhostels@gmail.com
          </a>
        </div>

        <p className="text-ivory/40 text-xs pt-4 text-center">
          © {new Date().getFullYear()} Lahore Group of Hostels. All rights
          reserved.
        </p>
      </Reveal>
    </footer>
  );
}