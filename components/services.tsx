"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "./heading";

const services = [
  {
    num: "01",
    title: "Web Page Development",
    description:
      "A static one page site with plain text and assets like pictures",
    href: "",
  },

  {
    num: "02",
    title: "Website Development",
    description:
      "A static multi pages site with plain text and assets like pictures",
    href: "",
  },

  {
    num: "03",
    title: "Web App Development",
    description: `A fully functional web app of any size or type that supports 
    interactivity, uploading of assets, database, a frontend, a backend and more.`,
    href: "",
  },

  {
    num: "04",
    title: "Mobile App Development",
    description: `A fully functional cross-platform (Android or IOS) mobile app of any size or 
    type that supports interactivity, uploading of assets, database, a frontend, a backend and more.`,
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section
      id="services"
      className="min-h-[80vh] w-full flex flex-col justify-center pb-12 xl:pb-10 border-2 border-white rounded-lg shadow-md shadow-white/50 mt-10 px-4"
    >
      <Heading title="Services" />
      <div className=" mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.5, ease: "easeIn" },
          }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group w-auto"
              >
                {/* p */}
                <div className="flex w-auto xl:w-full justify-between items-center">
                  <span
                    className="text-3xl font-extrabold xl:text-outline xl:text-transparent text-accent
                  xl:group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </span>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full xl:bg-white xl:group-hover:bg-accent bg-accent
                  transition-all duration-500 flex justify-center items-center hover:-rotate-90"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2
                  className="text-[40px] font-bold leading-none xl:text-white text-accent
                xl:group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
