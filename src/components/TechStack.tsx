"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function TechStack() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials1}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials2}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials3}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials1 = [
  {
    name: "Nextjs",
  },
  {
    name: "Reactjs",
  },
  {
    name: "Expresjs",
  },
  {
    name: "Nodejs",
  },
  {
    name: "Prisma",
  },
];

const testimonials2 = [
  {
    name: "Mongodb",
  },
  {
    name: "Postgresql",
  },
  {
    name: "NeonDB",
  },
  {
    name: "Drizzle",
  },
  {
    name: "Redux",
  },
];
const testimonials3 = [
  {
    name: "AWS",
  },
  {
    name: "GCP",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Material UI",
  },
  {
    name: "Docker",
  },
];
