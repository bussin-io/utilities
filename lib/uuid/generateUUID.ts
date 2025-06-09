import { getRandomValues } from 'node:crypto';

export function generateUUID() {
  // Generate 16 random bytes
  const bytes = new Uint8Array(16);
  getRandomValues(bytes);

  // Adjust values for 'version' and 'variant' fields as per RFC 4122
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant 10xx

  // Convert to hexadecimal and insert hyphens
  const uuid = [...bytes]
    .map((b, i) => {
      const hex = b.toString(16).padStart(2, '0');
      return [4, 6, 8, 10].includes(i) ? `-${hex}` : hex;
    })
    .join('');

  return uuid;
}
