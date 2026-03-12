import { defineField, defineType } from "sanity";

const CATEGORY_OPTIONS = [
  { title: "قسم السجاد (Carpets)", value: "carpets" },
  { title: "قسم الشموع (Candles)", value: "candles" },
  { title: "قسم مباخر البخور (Incense Burners)", value: "incense_burners" },
  { title: "قسم مباخر الزيت (Oil Burners)", value: "oil_burners" },
  { title: "ملفات (Rolls)", value: "rolls" },
  { title: "مخدات (Cushions)", value: "cushions" },
  { title: "ملفات لفرشة التخت (Bed Roll Covers)", value: "bed_rolls" },
];

const PRICE_RANGE_OPTIONS = [
  { title: "Budget", value: "budget" },
  { title: "Mid-range", value: "mid" },
  { title: "Premium", value: "premium" },
];

const COLOR_OPTIONS = [
  { title: "Red", value: "red" },
  { title: "Blue", value: "blue" },
  { title: "Beige", value: "beige" },
  { title: "Multi-color", value: "multi" },
  { title: "Dark", value: "dark" },
  { title: "Light", value: "light" },
  { title: "Cream", value: "cream" },
];

export const carpetType = defineType({
  name: "carpet",
  type: "document",
  title: "Carpet",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Categorization & Display" },
  ],
  fields: [
    defineField({
      name: "name_he",
      type: "string",
      title: "Name (Hebrew)",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name_ar",
      type: "string",
      title: "Name (Arabic)",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description_he",
      type: "text",
      title: "Description (Hebrew)",
      group: "content",
    }),
    defineField({
      name: "description_ar",
      type: "text",
      title: "Description (Arabic)",
      group: "content",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      group: "content",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      group: "meta",
      options: {
        list: CATEGORY_OPTIONS,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sizes",
      type: "array",
      title: "Sizes",
      group: "meta",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "colors",
      type: "array",
      title: "Colors",
      group: "meta",
      of: [{ type: "string" }],
      options: {
        list: COLOR_OPTIONS,
        layout: "tags",
      },
    }),
    defineField({
      name: "price_range",
      type: "string",
      title: "Price range",
      group: "meta",
      options: {
        list: PRICE_RANGE_OPTIONS,
        layout: "dropdown",
      },
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured on homepage",
      group: "meta",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name_he",
      subtitle: "category",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled carpet",
        subtitle: subtitle ? `Category: ${subtitle}` : "",
        media,
      };
    },
  },
});
