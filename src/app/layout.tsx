import type { Metadata } from "next";
import "./globals.css";
import PlatinumFooter from "@/components/PlatinumFooter";

export const metadata: Metadata = {
  title: "نُزُل الفخامة | Nozoluxe Excellence",
  description: "اكتشف أرقى الفنادق والمنتجعات الملكية في تركيا. تجربة حجز تليق بنخبة المسافرين الخليجيين.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
      <body className="min-h-full flex flex-col selection:bg-luxury-gold/30 selection:text-luxury-gold text-luxury-marble bg-luxury-obsidian">
        {children}
        <PlatinumFooter />
      </body>
    </html>
  );
}
