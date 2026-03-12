"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NAV_ITEMS = ["home", "catalog", "about", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const basePath = pathname?.split("/").slice(2).join("/") || "";

  const switchLocaleUrl = (targetLocale: string) =>
    `/${targetLocale}${basePath ? `/${basePath}` : ""}`;

  const logoAlt =
    locale === "he"
      ? "סיג'אדתי - שטיחים"
      : "سجادتي - سجاد";

  return (
    <header className="sticky top-0 z-40 border-b border-[#B8960C]/20 bg-[#0A1F44]/95 text-white backdrop-blur">
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
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <Link
                  href={
                    key === "home"
                      ? `/${locale}`
                      : `/${locale}/${key === "catalog" ? "catalog" : key}`
                  }
                  className="transition-colors hover:text-[#B8960C]"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 text-xs font-semibold">
            <Link
              href={switchLocaleUrl("he")}
              className={`rounded-full px-2 py-1 ${
                locale === "he" ? "bg-[#B8960C] text-[#0A1F44]" : ""
              }`}
            >
              HE
            </Link>
            <span className="text-[#B8960C]">|</span>
            <Link
              href={switchLocaleUrl("ar")}
              className={`rounded-full px-2 py-1 ${
                locale === "ar" ? "bg-[#B8960C] text-[#0A1F44]" : ""
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

