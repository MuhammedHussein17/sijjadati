// Business contact and location — single source of truth

/** Israeli mobile: 0546671211 → E.164 for tel: and wa.me */
export const PHONE_DISPLAY = "054-667-1211";
export const PHONE_E164 = "+972546671211";
/** For WhatsApp links (no +) */
export const WHATSAPP_NUMBER = "972546671211";

/** Coordinates: 32°50'36.2"N 35°20'19.6"E (decimal) */
export const MAP_LAT = 32.843389;
export const MAP_LNG = 35.338778;
export const ADDRESS_COORDINATES = "32°50'36.2\"N 35°20'19.6\"E";

/** Google Maps “Get directions” URL */
export const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`;
/** Google Maps embed iframe src */
export const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&output=embed`;
