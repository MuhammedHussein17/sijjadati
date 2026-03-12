export type CategoryValue =
  | "carpets"
  | "candles"
  | "incense_burners"
  | "oil_burners"
  | "rolls"
  | "cushions"
  | "bed_rolls"
  | "towels"
  | "bath_towels"
  | "blankets";

export const CATEGORIES: { value: CategoryValue; labelAr: string }[] = [
  { value: "carpets", labelAr: "قسم السجاد" },
  { value: "candles", labelAr: "قسم الشموع" },
  { value: "incense_burners", labelAr: "قسم مباخر البخور" },
  { value: "oil_burners", labelAr: "قسم مباخر الزيت" },
  { value: "rolls", labelAr: "ملفات" },
  { value: "cushions", labelAr: "مخدات" },
  { value: "bed_rolls", labelAr: "ملفات لفرشة التخت" },
  { value: "towels", labelAr: "قسم المناشف" },
  { value: "bath_towels", labelAr: "قسم البشاكير" },
  { value: "blankets", labelAr: "قسم الحرامات" },
];

