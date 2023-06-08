/** @format */

import localFont from "next/font/local";


export const sfPro = localFont({
  src: [
    {
      path: "./sf-pro-text-light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./sf-pro-text-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./sf-pro-text-medium.woff",
      weight: "510",
      style: "normal",
    },
    {
      path: "./sf-pro-text-semibold.woff",
      weight: "590",
      style: "normal",
    },
    {
      path: "./sf-pro-text-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["arial"],
});
