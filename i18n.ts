export const locales = ["he", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "he";

