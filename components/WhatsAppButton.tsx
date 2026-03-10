"use client";

import { useLocale, useTranslations } from "next-intl";

const FALLBACK_PHONE = "972501234567";

export default function WhatsAppButton() {
  const locale = useLocale();
  const t = useTranslations("whatsapp");

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_PHONE;
  const text = encodeURIComponent(t("prefill"));
  const href = `https://wa.me/${phone}?text=${text}`;

  const isRtl = locale === "he" || locale === "ar";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1EB854] ${
        isRtl ? "left-4" : "right-4"
      }`}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#25D366]">
        {/* Simple WhatsApp-like icon */}
        <span className="text-xs">WA</span>
      </span>
      <span>{t("floatingLabel")}</span>
    </a>
  );
}

