import localFont from "next/font/local";


/**
 * Main brand font – TT Norms Pro Trial
 * Used for: Body, Heading, Navigation, Buttons
 */
export const ttNorms = localFont({
  src: [
    {
      path: "../assets/fonts/TT_Norms_Pro_Trial_Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/TT_Norms_Pro_Trial_Medium.woff2",
      weight: "450",
      style: "normal",
    },
  ],
  variable: "--font-tt-norms",
  display: "swap",
});

/**
 * Secondary / Tag font – Domaine Text (brand, EN)
 * Used for: Tags, Key Links, Highlight text (English)
 */
export const tagFontEN = localFont({
  src: [
    {
      path: "../assets/fonts/DomaineText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tag-en",
  display: "swap",
});
// Backwards compatibility (existing imports)
export const tagFont = tagFontEN;


import { Source_Serif_4 } from "next/font/google";
export const sourceSerif4 = Source_Serif_4({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-tag-vi",
});


