/**
 * Central contact configuration.
 *
 * Keep phone calling separate from chat/messaging. The client confirmed that
 * normal phone calling is working and should not be changed. The previous
 * WhatsApp redirect has intentionally been removed because that number is not
 * available on WhatsApp.
 *
 * If the operations email is changed after client confirmation, update it only
 * here and every contact surface will pick up the new value.
 */
export const CONTACT = {
  phoneDisplay: "+971 4 558 7968",
  phoneTel: "+97145587968",
  email: "operations@orpheusfinancial.co",
} as const;

export const PHONE_HREF = `tel:${CONTACT.phoneTel}`;
export const EMAIL_HREF = `mailto:${CONTACT.email}`;

export function buildEmailHref(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `${EMAIL_HREF}${query ? `?${query}` : ""}`;
}
