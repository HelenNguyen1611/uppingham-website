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
 * Secondary / Tag font – Test Domaine Text
 * Used for: Tags, Key Links, Highlight text
 */
export const tagFont = localFont({
  src: [
    {
      path: "../assets/fonts/TestDomaineText-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tag",
  display: "swap",
});
