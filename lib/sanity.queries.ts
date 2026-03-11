/** GROQ: all carpets; image URLs from CDN */
export const CARPETS_QUERY = `*[_type == "carpet"] | order(_createdAt desc) {
  _id,
  name_he,
  name_ar,
  description_he,
  description_ar,
  category,
  sizes,
  colors,
  price_range,
  featured,
  "images": images[].asset->url
}`;

/** GROQ: featured carpets only */
export const FEATURED_CARPETS_QUERY = `*[_type == "carpet" && featured == true] | order(_createdAt desc) [0...20] {
  _id,
  name_he,
  name_ar,
  description_he,
  description_ar,
  category,
  sizes,
  colors,
  price_range,
  featured,
  "images": images[].asset->url
}`;

/** GROQ: single carpet by _id */
export const CARPET_BY_ID_QUERY = `*[_type == "carpet" && _id == $id][0] {
  _id,
  name_he,
  name_ar,
  description_he,
  description_ar,
  category,
  sizes,
  colors,
  price_range,
  featured,
  "images": images[].asset->url
}`;
