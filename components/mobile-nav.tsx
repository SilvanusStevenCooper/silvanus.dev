"use client";

import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Services",
    path: "/services",
  },

  {
    name: "Resume",
    path: "/resume",
  },

  {
    name: "Work",
    path: "/work",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <Sheet open={isOpen} onOpenChange={() => isOpen}>
      <SheetTrigger
        onClick={() => setIsOpen((state) => !state)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent>
        {/* Logo */}
        <div className="mt-0 mb-20 text-left text-2xl">
          <Link onClick={() => setIsOpen(false)} href={"/"}>
            <h1 className="text-4xl font-semibold">
              Silvanus <span className="text-accent">.</span>
            </h1>
          </Link>

          <SheetClose
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-8 rounded-sm opacity-70 ring-offset-white 
                transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 
                focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 
                dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800"
          >
            <IoMdClose className="h-6 w-6 text-accent" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>

        {/* Navbar */}
        <nav className="flex flex-col justify-center items-start gap-8">
          {links.map((link, index) => {
            return (
              <Link
                onClick={() => setIsOpen(false)}
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }
               text-xl capitalize hover:text-accent transition-all
               `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
