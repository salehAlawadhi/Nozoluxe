import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nozoluxe | Royal Luxury Real Estate",
  description: "Experience the pinnacle of luxury living with Nozoluxe. Exclusive properties curated for the elite.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-gold/30 selection:text-gold-dark">
        {children}
      </body>
    </html>
  );
}
