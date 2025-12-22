import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "../src/lib/i18n/config";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale && (locales as readonly string[]).includes(locale as string)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../src/lib/i18n/messages/${safeLocale}.json`)).default
  };
});

