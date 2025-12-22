import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { ttNorms, tagFont } from '@/lib/fonts';
import './globals.css';
import { getLocale } from 'next-intl/server';
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
        {children}
      </body>
    </html>
  );
}
