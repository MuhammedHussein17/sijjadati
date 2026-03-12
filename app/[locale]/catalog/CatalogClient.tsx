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
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 bg-[#1C1610] text-sij-text-light">
      <h1 className="mb-10 text-3xl font-bold text-sij-gold">{t("title")}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carpets.map((product) => {
          const name = locale === "he" ? product.name_he : product.name_ar;
          const desc =
            locale === "he" ? product.description_he : product.description_ar;
          const imgUrl = product.images?.[0];
          return (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-sij-gold/25 bg-[#2C2015] shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full bg-[#2C2015]">
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
                <span className="text-xs font-medium text-sij-gold">
                  {product.category}
                </span>
                <h2 className="mt-1 font-semibold text-sij-text-light">{name}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-sij-text-light/80">
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
                  className="mt-3 inline-block rounded-lg bg-sij-gold px-4 py-2 text-sm font-semibold text-sij-text-dark transition hover:bg-[#e0b852]"
                >
                  {t("quoteButton")}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {carpets.length === 0 && (
        <p className="text-center text-sij-text-light/70">
          {locale === "he" ? "אין כרגע שטיחים בקטלוג." : "لا توجد سجاد في الكتالوج حالياً."}
        </p>
      )}
    </div>
  );
}
