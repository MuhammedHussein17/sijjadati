"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

type A11yState = {
  fontScale: number;
  highContrast: boolean;
  highlightLinks: boolean;
  bigCursor: boolean;
  stopAnimations: boolean;
};

const STORAGE_KEY = "sijjadati_accessibility";

const defaultState: A11yState = {
  fontScale: 1,
  highContrast: false,
  highlightLinks: false,
  bigCursor: false,
  stopAnimations: false,
};

function applyState(state: A11yState) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  const body = document.body;

  // High contrast
  html.classList.toggle("high-contrast", state.highContrast);

  // Highlight links
  html.classList.toggle("a11y-highlight-links", state.highlightLinks);

  // Big cursor
  html.classList.toggle("a11y-big-cursor", state.bigCursor);

  // Stop animations
  html.classList.toggle("a11y-stop-animations", state.stopAnimations);

  // Font scale
  const percent = Math.round(state.fontScale * 100);
  body.style.fontSize = `${percent}%`;
}

export default function AccessibilityButton() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(defaultState);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<A11yState>;
        const next = { ...defaultState, ...parsed };
        setState(next);
        applyState(next);
      } else {
        applyState(defaultState);
      }
    } catch {
      applyState(defaultState);
    }
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open && typeof document !== "undefined") {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [open]);

  const updateState = (updater: (prev: A11yState) => A11yState) => {
    setState((prev) => {
      const next = updater(prev);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }
      applyState(next);
      return next;
    });
  };

  const increaseFont = () => {
    updateState((prev) => ({
      ...prev,
      fontScale: Math.min(1.3, prev.fontScale + 0.1),
    }));
  };

  const decreaseFont = () => {
    updateState((prev) => ({
      ...prev,
      fontScale: Math.max(1, prev.fontScale - 0.1),
    }));
  };

  const toggle = (key: keyof Omit<A11yState, "fontScale">) => {
    updateState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const reset = () => {
    updateState(() => defaultState);
  };

  const isRtl = locale === "he" || locale === "ar";
  const label =
    locale === "he"
      ? "נגישות"
      : locale === "ar"
      ? "إمكانية الوصول"
      : "Accessibility";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#B8960C] px-4 py-2 text-sm font-semibold text-[#1C1610] shadow-lg transition hover:bg-[#e0b852] ${
          isRtl ? "right-4" : "left-4"
        }`}
        aria-expanded={open}
        aria-label={label}
      >
        <span aria-hidden="true">♿</span>
        <span>
          {locale === "he"
            ? "נגישות"
            : locale === "ar"
            ? "إمكانية الوصول"
            : "Accessibility"}
        </span>
      </button>
      {open && (
        <div
          ref={panelRef}
          className={`fixed bottom-16 z-40 w-80 max-w-[90vw] rounded-2xl bg-[#1C1610] p-4 text-sm text-[#F5EDD8] shadow-xl ring-1 ring-[#B8960C]/60 ${
            isRtl ? "right-4" : "left-4"
          }`}
          dir="rtl"
        >
          <h2 className="mb-3 text-base font-semibold text-[#B8960C]">
            {locale === "he"
              ? "הגדרות נגישות"
              : locale === "ar"
              ? "إعدادات إمكانية الوصول"
              : "Accessibility settings"}
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span>🔤 הגדלת גופן</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={decreaseFont}
                  className="h-7 w-7 rounded-full border border-[#B8960C] text-xs font-bold text-[#B8960C]"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={increaseFont}
                  className="h-7 w-7 rounded-full border border-[#B8960C] text-xs font-bold text-[#1C1610] bg-[#B8960C]"
                >
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => toggle("highContrast")}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-start ${
                state.highContrast
                  ? "border-[#B8960C] bg-[#2C2015]"
                  : "border-[#B8960C]/40 hover:border-[#B8960C]"
              }`}
            >
              <span>🔲 מצב ניגודיות גבוהה</span>
              <span>{state.highContrast ? "ON" : "OFF"}</span>
            </button>
            <button
              type="button"
              onClick={() => toggle("highlightLinks")}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-start ${
                state.highlightLinks
                  ? "border-[#B8960C] bg-[#2C2015]"
                  : "border-[#B8960C]/40 hover:border-[#B8960C]"
              }`}
            >
              <span>🔗 הדגשת קישורים</span>
              <span>{state.highlightLinks ? "ON" : "OFF"}</span>
            </button>
            <button
              type="button"
              onClick={() => toggle("bigCursor")}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-start ${
                state.bigCursor
                  ? "border-[#B8960C] bg-[#2C2015]"
                  : "border-[#B8960C]/40 hover:border-[#B8960C]"
              }`}
            >
              <span>🖱️ סמן גדול</span>
              <span>{state.bigCursor ? "ON" : "OFF"}</span>
            </button>
            <button
              type="button"
              onClick={() => toggle("stopAnimations")}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-start ${
                state.stopAnimations
                  ? "border-[#B8960C] bg-[#2C2015]"
                  : "border-[#B8960C]/40 hover:border-[#B8960C]"
              }`}
            >
              <span>⏸️ עצירת אנימציות</span>
              <span>{state.stopAnimations ? "ON" : "OFF"}</span>
            </button>
            <button
              type="button"
              onClick={reset}
              className="mt-1 w-full rounded-lg border border-[#B8960C]/60 px-3 py-2 text-center text-xs font-semibold text-[#B8960C] hover:border-[#B8960C]"
            >
              🔄 איפוס כל ההגדרות
            </button>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-[#F5EDD8]/80">
            לבעלי מוגבלויות המתקשים להשתמש באתר, נשמח לסייע בטלפון:{" "}
            <a
              href="tel:+972546671211"
              className="font-semibold text-[#B8960C]"
            >
              054-667-1211
            </a>
          </p>
        </div>
      )}
    </>
  );
}

