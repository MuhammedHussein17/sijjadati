"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { PHONE_DISPLAY, PHONE_E164, ADDRESS_DISPLAY, WAZE_URL } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const logoAlt =
    locale === "he"
      ? "סיג'אדתי - שטיחים"
      : "سجادتي - سجاد";

  return (
    <footer className="mt-12 border-t border-sij-gold/30 bg-[#1C1610] text-sij-text-light">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-3 flex justify-center">
            <Image
              src="/images/logo.png"
              alt={logoAlt}
              width={140}
              height={60}
              className="w-[140px] opacity-85"
            />
          </div>
          <p className="mt-1 text-xs text-[#F5F0E8]/80">{t("tagline")}</p>
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
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#B8960C] hover:underline"
            >
              {t("address")} — {ADDRESS_DISPLAY}
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
