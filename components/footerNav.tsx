"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
const FooterNav = () => {
  const pathName = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <div className="container flex w-full items-center justify-between">
      <div className=" grid grid-cols-2 xl:flex gap-8 justify-between w-full xl:w-[80%]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        ))}

        <div className=" xl:hidden items-center justify-center">
          <span className="text-xl">&copy; </span>
          {currentYear}
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center">
        <span className="text-xl">&copy; </span>
        {currentYear}
      </div>
    </div>
  );
};

export default FooterNav;
