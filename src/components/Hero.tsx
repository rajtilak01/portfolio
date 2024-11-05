"use client";
import React, { useEffect, useState } from "react";
import { HeroParallax } from "./ui/HeroParallax";
import axios from "axios";


export function Hero() {
  const [products, setProducts] = useState<{ name: string; deployedUrl: string; imageUrl: string[]; }[]>([]); // Initialize with an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/get-project');
        // console.log("products thing", result.data.data);
        setProducts(result.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return <HeroParallax products={products} />; // Now products is always defined
}



// const random = async () => {
//   const result = await axios.get('/api/get-project');
//   setProducts(result.data);
// }
// export const products = [
//   {
//     title: "Mystry Message",
//     link: "https://mystrymessage.netlify.app/",
//     thumbnail:
//     "https://res.cloudinary.com/dcvo14v3g/image/upload/v1729344298/Portfolio/Mystry%20Message.png",
//   },
//   {
//     title: "Cloudinary Saas",
//     link: "https://cloudinarysaas.netlify.app/",
//     thumbnail:
//     "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },
//   {
//     title: "Music School",
//     link: "https://musicschoolnext.netlify.app/",
//     thumbnail:
//       "https://res.cloudinary.com/dcvo14v3g/image/upload/c_crop,ar_16:9/v1729344298/Portfolio/Music%20School.png",
//   },
//   {
//     title: "LMS",
//     link: "https://lms-frontend-blush.vercel.app/",
//     thumbnail:
//       "https://res.cloudinary.com/dcvo14v3g/image/upload/v1729344299/Portfolio/TheLMS.png",
//   },
//   {
//     title: "Golf Club",
//     link: "https://rajtilak16.github.io/golfClub/",
//     thumbnail:
//       "https://res.cloudinary.com/dcvo14v3g/image/upload/v1730827072/GolfClub_vebrhf.png",
//   },
// ];
