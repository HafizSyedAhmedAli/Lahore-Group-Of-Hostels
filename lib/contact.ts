// Single source of truth for contact links.
// Change the number or default message here and every button/link updates.

export const PHONE_DISPLAY = "0318 8284671";

// wa.me needs the number in international format, digits only, no "+" or leading 0.
const WHATSAPP_NUMBER = "923188284671";

const DEFAULT_MESSAGE =
  "Hi! I'm interested in booking a visit to Lahore Group of Hostels. Could you share more details?";

export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = getWhatsAppUrl();
