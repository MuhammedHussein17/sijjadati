"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import products from "../../data/products.json";

function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#0A1F44] py-24 text-center text-white">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8960C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      <div className="relative mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold leading-tight text-[#B8960C] md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-[#F5F0E8]/90 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/catalog`}
            className="rounded-full bg-[#B8960C] px-8 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#a07a0a]"
          >
            {t("viewCatalog")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-[#B8960C] px-8 py-3 font-semibold text-[#B8960C] transition hover:bg-[#B8960C]/10"
          >
            {t("requestQuote")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const t = useTranslations("categories");
  const locale = useLocale();

  const cats = [
    { key: "handmade", icon: "🧵", filter: "handmade" },
    { key: "modern", icon: "🏠", filter: "modern" },
    { key: "outdoor", icon: "🌿", filter: "outdoor" },
  ] as const;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#0A1F44]">
          {t("title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {cats.map((cat) => (
            <Link
              key={cat.key}
              href={`/${locale}/catalog?category=${cat.filter}`}
              className="group flex flex-col items-center rounded-2xl border border-[#B8960C]/20 bg-white p-8 text-center shadow-sm transition hover:border-[#B8960C] hover:shadow-md"
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="mt-3 font-semibold text-[#0A1F44] group-hover:text-[#B8960C]">
                {t(cat.key)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const t = useTranslations("trust");

  const points = ["wideSelection", "premiumQuality", "expertAdvice", "fastDelivery"] as const;
  const icons = ["🎨", "⭐", "💬", "🚚"];

  return (
    <section className="bg-[#0A1F44] py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-[#B8960C]">
          {t("title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((key, i) => (
            <div key={key} className="flex flex-col items-center rounded-xl bg-white/5 p-6 text-center">
              <span className="text-3xl">{icons[i]}</span>
              <p className="mt-3 text-sm text-[#F5F0E8]/90">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  const t = useTranslations("featured");
  const locale = useLocale();

  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0A1F44]">{t("title")}</h2>
          <Link
            href={`/${locale}/catalog`}
            className="text-sm font-semibold text-[#B8960C] hover:underline"
          >
            {t("viewAll")} ←
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => {
            const name = locale === "he" ? product.name_he : product.name_ar;
            const desc = locale === "he" ? product.description_he : product.description_ar;
            return (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-[#B8960C]/20 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center bg-[#F5F0E8]">
                  <span className="text-5xl opacity-30">🪞</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#0A1F44]">{name}</h3>
                  <p className="mt-1 text-xs text-[#333]/70 line-clamp-2">{desc}</p>
                  <Link
                    href={`/${locale}/catalog`}
                    className="mt-3 inline-block text-xs font-semibold text-[#B8960C] hover:underline"
                  >
                    {t("viewDetails")} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <TrustSection />
      <FeaturedSection />
    </>
  );
}
