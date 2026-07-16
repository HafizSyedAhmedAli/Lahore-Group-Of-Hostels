import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "./motion/Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-16 pb-8 scroll-mt-24">
      <Reveal className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-ivory/10">
          <div>
            <Image
              src="/logo.png"
              alt="Lahore Group of Hostels"
              width={56}
              height={56}
              className="h-14 w-14 object-contain mb-4"
            />
            <p className="text-ivory/60 text-sm max-w-xs">
              Comfort, safety, and community — a new hostel building in the
              heart of Lahore.
            </p>
          </div>

          <div>
            <h3 className="font-display text-ivory font-bold mb-4">Get in touch</h3>
            <ul className="space-y-3 text-ivory/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:+923188284671" className="hover:text-gold transition-colors">
                  0318 8284671
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon size={16} className="text-[#25D366]" />
                <a
                  href="https://wa.me/923008570956"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  0300 8570956 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:stay@lahoregroupofhostels.com" className="hover:text-gold transition-colors">
                  stay@lahoregroupofhostels.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                Saif Town, Street No. 7, Thokar Niaz Baig, Lahore, 53700
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-ivory font-bold mb-4">Quick links</h3>
            <ul className="space-y-3 text-ivory/70 text-sm">
              <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">How it works</a></li>
              <li><a href="#location" className="hover:text-gold transition-colors">Location</a></li>
            </ul>
          </div>
        </div>

        <p className="text-ivory/40 text-xs pt-6 text-center">
          © {new Date().getFullYear()} Lahore Group of Hostels. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
}