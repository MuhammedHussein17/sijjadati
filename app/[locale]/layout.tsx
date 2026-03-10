import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Cairo, Heebo } from "next/font/google";
import { ReactNode } from "react";
import { defaultLocale, Locale, locales } from "../../i18n";
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
  description: "שטיחים יוקרתיים לבית ולעסק. סגדתי - סגדתי | סجادتي.",
};

async function getMessages(locale: Locale) {
  try {
    const messages = (await import(`../../locales/${locale}.json`)).default;
    return messages;
  } catch {
    notFound();
  }
}

type Props = {
  params: Promise<{ locale: Locale }>;
  children: ReactNode;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  const lang = locale === "he" ? "he" : "ar";
  const dir = "rtl";
  const fontClass = locale === "he" ? heebo.variable : cairo.variable;

  return (
    <html lang={lang} dir={dir} className={fontClass}>
      <body className="min-h-screen bg-[#F5F0E8] text-[#333333]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col bg-[#F5F0E8]">
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

