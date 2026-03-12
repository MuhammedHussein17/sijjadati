"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";

const NAV_ITEMS = ["home", "catalog", "contact"] as const;

function CatalogDropdownDesktop() {
  const locale = useLocale();
  const tNav = useTranslations("nav");

  return (
    <div className="relative hidden md:block">
      <div className="group inline-flex items-center">
        <button className="inline-flex items-center gap-1 rounded-full bg-transparent px-3 py-1 text-sm font-medium text-sij-text-light transition hover:text-sij-gold">
          {tNav("catalog")}
          <span className="text-xs">▾</span>
        </button>
        <div className="invisible absolute end-0 top-full z-30 mt-2 w-56 rounded-xl bg-[#1C1610] text-sij-text-light shadow-lg opacity-0 ring-1 ring-sij-gold/40 transition group-hover:visible group-hover:opacity-100">
          <ul className="py-2 text-sm">
            {CATEGORIES.map((cat) => (
              <li key={cat.value}>
                <Link
                  href={`/${locale}/catalog?category=${cat.value}`}
                  className="block px-4 py-2 hover:bg-[#2C2015] hover:text-sij-gold"
                >
                  {cat.labelAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactDropdown() {
  const tNav = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full bg-transparent px-3 py-1 text-sm font-medium text-sij-text-light transition hover:text-sij-gold"
      >
        {tNav("contact")}
        <span className="text-xs">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-full z-30 mt-2 w-64 max-w-xs rounded-xl bg-[#1C1610] text-sij-text-light shadow-lg ring-1 ring-sij-gold/40">
          <ul className="py-2 text-sm">
            <li>
              <a
                href="tel:+972546671211"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2C2015] hover:text-sij-gold"
              >
                <span>📞</span>
                <span>054-667-1211</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sajjadati1?igsh=MWw3OTFhcmUwaWMyZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2C2015] hover:text-sij-gold"
              >
                <span>📸</span>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function CatalogDropdownMobile() {
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-full border border-sij-gold px-3 py-1 text-xs font-semibold text-sij-gold"
      >
        {tNav("catalog")}
        <span className="text-[10px]">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <div className="mt-2 rounded-xl bg-[#1C1610] text-sij-text-light shadow-lg ring-1 ring-sij-gold/40">
          <ul className="py-2 text-sm">
            {CATEGORIES.map((cat) => (
              <li key={cat.value}>
                <Link
                  href={`/${locale}/catalog?category=${cat.value}`}
                  className="block px-4 py-2 hover:bg-[#2C2015] hover:text-sij-gold"
                  onClick={() => setOpen(false)}
                >
                  {cat.labelAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const basePath = pathname?.split("/").slice(2).join("/") || "";

  const switchLocaleUrl = (targetLocale: string) =>
    `/${targetLocale}${basePath ? `/${basePath}` : ""}`;

  const logoAlt =
    locale === "he" ? "סיג'אדתי - שטיחים" : "سجادتي - سجاد";

  return (
    <header className="sticky top-0 z-40 border-b border-sij-gold/30 bg-[#0F0C08]/95 text-sij-text-light backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="relative h-11 w-auto md:h-14">
            <Image
              src="/images/logo.png"
              alt={logoAlt}
              priority
              height={56}
              width={200}
              className="h-11 w-auto md:h-14"
            />
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                {key === "catalog" && <CatalogDropdownDesktop />}
                {key === "home" && (
                  <Link
                    href={`/${locale}`}
                    className="transition-colors hover:text-sij-gold"
                  >
                    {t("home")}
                  </Link>
                )}
                {key === "contact" && <ContactDropdown />}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 md:hidden">
            <CatalogDropdownMobile />
            <ContactDropdown />
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold">
            <Link
              href={switchLocaleUrl("he")}
              className={`rounded-full px-2 py-1 ${
                locale === "he" ? "bg-sij-gold text-[#1C1610]" : ""
              }`}
            >
              HE
            </Link>
            <span className="text-sij-gold">|</span>
            <Link
              href={switchLocaleUrl("ar")}
              className={`rounded-full px-2 py-1 ${
                locale === "ar" ? "bg-sij-gold text-[#1C1610]" : ""
              }`}
            >
              AR
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

