import Link from "next/link";
import React from "react";
import Nav from "./nav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white fixed bg-primary z-50 w-full border-b border-white/50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-5xl font-semibold">
            Silvanus <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"#contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
