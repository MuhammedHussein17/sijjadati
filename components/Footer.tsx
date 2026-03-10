"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { PHONE_DISPLAY, PHONE_E164, GOOGLE_MAPS_URL } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="mt-12 border-t border-[#B8960C]/20 bg-[#0A1F44] text-[#F5F0E8]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-[#B8960C]">Sijjadati</h3>
          <p className="mt-2 text-xs text-[#F5F0E8]/80">{t("tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#F5F0E8]">
            {t("quickLinks")}
          </h4>
          <nav className="flex flex-col gap-2">
            <Link href={`/${locale}`} className="hover:text-[#B8960C]">
              בית / الرئيسية
            </Link>
            <Link
              href={`/${locale}/catalog`}
              className="hover:text-[#B8960C]"
            >
              קטלוג / الكتالوج
            </Link>
            <Link href={`/${locale}/about`} className="hover:text-[#B8960C]">
              אודות / من نحن
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-[#B8960C]">
              {t("contact")}
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#F5F0E8]">
            {t("contact")}
          </h4>
          <p className="text-xs text-[#F5F0E8]/80">
            טלפון / هاتف:{" "}
            <a href={`tel:${PHONE_E164}`} className="font-medium text-[#B8960C]">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-1 text-xs text-[#F5F0E8]/80">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#B8960C] hover:underline"
            >
              {t("address")} — 32°50&apos;36.2&quot;N 35°20&apos;19.6&quot;E
            </a>
          </p>
          <p className="mt-1 text-xs text-[#F5F0E8]/80">
            אימייל / بريد:{" "}
            <a
              href="mailto:info@sijjadati.co.il"
              className="font-medium text-[#B8960C]"
            >
              info@sijjadati.co.il
            </a>
          </p>
          <p className="mt-2 text-xs text-[#F5F0E8]/60">
            © {new Date().getFullYear()} Sijjadati. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

