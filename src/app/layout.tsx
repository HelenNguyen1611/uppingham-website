import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { sourceSerif4, tagFontEN, ttNorms } from '@/lib/fonts';
import './globals.css';
import { getLocale } from 'next-intl/server';
import { SplashLoader } from '@/components/ui/SplashLoader';

export const metadata: Metadata = {
  title: 'Uppingham',
  description: 'Uppingham Vietnam',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={[
          ttNorms.variable,
          // Always include both so CSS can switch via `html[lang]`.
          // Root layout does not reliably rerender on client locale navigation,
          // so conditionally applied variables can become stale.
          tagFontEN.variable,
          sourceSerif4.variable,
          'antialiased',
        ].join(' ')}
      >
        <SplashLoader durationMs={3000} showOncePerDay showAgainAfterDays={1}>
          {children}
        </SplashLoader>
      </body>
    </html>
  );
}
