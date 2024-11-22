'use client'
import { useEffect, useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import axios from "axios";

export function Projects() {
  const [project, setProject] = useState<{name: string, description: string, deployedUrl: string}[]>([])
  useEffect(() => {
    const func = async () => {
        const result = await axios.get('/api/get-project');
        setProject(result.data.data);
    }  
    func();
  }, [])
  
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex justify-center font-bold text-4xl">Projects</div>
      <HoverEffect items={project} />
    </div>
  );
}
// export const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];
