"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarTop() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <HoveredLink href="https://github.com/rajtilak01">Github</HoveredLink>
      <HoveredLink href="https://leetcode.com/u/Rajtilak16/">Leetcode</HoveredLink>
      <HoveredLink href="https://drive.google.com/file/d/1s-Qy7mYKNiz9f98kFApqP-Du13m4gZq1/view?usp=sharing">Resume</HoveredLink>
        
      </Menu>
    </div>
  );
}
