export type CategoryValue =
  | "carpets"
  | "candles"
  | "incense_burners"
  | "oil_burners"
  | "rolls"
  | "cushions"
  | "bed_rolls";

export const CATEGORIES: { value: CategoryValue; labelAr: string }[] = [
  { value: "carpets", labelAr: "قسم السجاد" },
  { value: "candles", labelAr: "قسم الشموع" },
  { value: "incense_burners", labelAr: "قسم مباخر البخور" },
  { value: "oil_burners", labelAr: "قسم مباخر الزيت" },
  { value: "rolls", labelAr: "ملفات" },
  { value: "cushions", labelAr: "مخدات" },
  { value: "bed_rolls", labelAr: "ملفات لفرشة التخت" },
];

