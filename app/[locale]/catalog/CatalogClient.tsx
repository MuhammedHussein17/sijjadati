"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import type { Carpet } from "@/lib/sanity.types";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function CatalogClient({ carpets }: { carpets: Carpet[] }) {
  const t = useTranslations("catalog");
  const locale = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="mb-10 text-3xl font-bold text-[#0A1F44]">{t("title")}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carpets.map((product) => {
          const name = locale === "he" ? product.name_he : product.name_ar;
          const desc =
            locale === "he" ? product.description_he : product.description_ar;
          const imgUrl = product.images?.[0];
          return (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-[#B8960C]/20 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full bg-[#F5F0E8]">
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">
                    🪞
                  </span>
                )}
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-[#B8960C]">
                  {product.category}
                </span>
                <h2 className="mt-1 font-semibold text-[#0A1F44]">{name}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-[#333]/70">
                  {desc}
                </p>
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    locale === "he"
                      ? `שלום! אשמח לקבל מידע על: ${name}`
                      : `مرحبا! أود الاستفسار عن: ${name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg bg-[#1A6B47] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#155a3a]"
                >
                  {t("quoteButton")}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {carpets.length === 0 && (
        <p className="text-center text-[#333]/70">
          {locale === "he" ? "אין כרגע שטיחים בקטלוג." : "لا توجد سجاد في الكتالوج حالياً."}
        </p>
      )}
    </div>
  );
}
