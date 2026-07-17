// Single source of truth for contact links.
// Change a number or default message here and every button/link updates.

export type BranchContact = {
  name: string;
  /** International format, digits only, e.g. "923188284671" */
  phone: string;
};

export type Branch = {
  id: string;
  label: string;
  address: string;
  mapQuery: string;
  /** Optional explicit Google Maps link (overrides the computed one) */
  directionsUrl?: string;
  contacts: BranchContact[];
};

export const BRANCHES: Branch[] = [
  {
    id: "thokar-niaz-baig",
    label: "Thokar Niaz Baig (Main Branch)",
    address: "Saif Town, Street No. 7, Thokar Niaz Baig, Lahore, 53700",
    mapQuery:
      "Lahore Group Of Hostels, Saif Town, Street No.7, Thokar Niaz Baig, Lahore, 53700, Pakistan",
    contacts: [
      { name: "Asad Ullah", phone: "923188284671" },
      { name: "Abdul Hafeez", phone: "923008570956" },
    ],
  },
  {
    id: "johar-town",
    label: "Johar Town Branch",
    address:
      "House No. 309, Opposite Expo Center Road, Near Shell Petrol Pump, Johar Town, Lahore, 54782",
    mapQuery: "Lahore Boys Hostel, 309 Expo Center Rd, Johar Town, Lahore",
    directionsUrl: "https://maps.app.goo.gl/hCKin48JxT7g9f4b7",
    contacts: [{ name: "Muhammad Saleem", phone: "923127272700" }],
  },
];

export const MAIN_BRANCH = BRANCHES[0];
export const JOHAR_TOWN_BRANCH = BRANCHES[1];

export function whatsappLink(phone: string, message?: string) {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// --- Original exports, unchanged in value — Hero/Meals/RoomPricing keep working as-is ---

export const PHONE_DISPLAY = "0318 8284671";

// wa.me needs the number in international format, digits only, no "+" or leading 0.
const WHATSAPP_NUMBER = MAIN_BRANCH.contacts[0].phone; // Asad Ullah — 923188284671

const DEFAULT_MESSAGE =
  "Hi! I'm interested in booking a visit to Lahore Group of Hostels. Could you share more details?";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return whatsappLink(WHATSAPP_NUMBER, message);
}

export const WHATSAPP_URL = getWhatsAppUrl();
