// No imports on purpose: used by client components (chat widget) too.

export const WHATSAPP_NUMBER = "201095664239";

/** wa.me link that opens WhatsApp with a prefilled message. */
export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
