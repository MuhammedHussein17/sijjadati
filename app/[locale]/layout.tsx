import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Cairo, Heebo } from "next/font/google";
import { ReactNode } from "react";
import { Locale, locales } from "../../i18n";
import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-hebrew",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "סגדתי - שטיחים באיכות פרמיום | ישראל",
  description: "שטיחים יוקרתיים לבית ולעסק. סגדתי - סגדתי | سجادتي.",
};

type Props = {
  params: Promise<{ locale: string }>;
  children: ReactNode;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const fontClass = locale === "he" ? heebo.variable : cairo.variable;

  return (
    <html lang={locale} dir="rtl" className={fontClass}>
      <body className="min-h-screen bg-[#1C1610] text-[#F5EDD8]">
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col bg-[#1C1610]">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
