"use client";

import Link from "next/link";
import React from "react";
import Nav from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";
import FooterNav from "./footerNav";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  const path = "/resume";
  return (
    <footer
      className={`py-6 xl:py-8 mt-16 bg-white/30 text-white  w-full ${
        path === pathName
          ? "fixed bottom-0 bg-primary/100 border-t-2 border-white/30"
          : null
      }`}
    >
      <FooterNav />
    </footer>
  );
};

export default Footer;
