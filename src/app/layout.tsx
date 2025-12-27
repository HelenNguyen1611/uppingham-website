import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { ttNorms, tagFont } from '@/lib/fonts';
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
      <body className={`${ttNorms.variable} ${tagFont.variable} antialiased`}>
        <SplashLoader durationMs={3000} showOncePerDay showAgainAfterDays={1}>
          {children}
        </SplashLoader>
      </body>
    </html>
  );
}
