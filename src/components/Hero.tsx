"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Mystry Message",
    link: "https://mystrymessage.netlify.app/",
    thumbnail:
    "https://res.cloudinary.com/dcvo14v3g/image/upload/v1729344298/Portfolio/Mystry%20Message.png",
  },
  {
    title: "Cloudinary Saas",
    link: "https://cloudinarysaas.netlify.app/",
    thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Music School",
    link: "https://musicschoolnext.netlify.app/",
    thumbnail:
      "https://res.cloudinary.com/dcvo14v3g/image/upload/c_crop,ar_16:9/v1729344298/Portfolio/Music%20School.png",
  },
  {
    title: "LMS",
    link: "https://lms-frontend-blush.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/dcvo14v3g/image/upload/v1729344299/Portfolio/TheLMS.png",
  },
];
