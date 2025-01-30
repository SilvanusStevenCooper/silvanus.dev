"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import FormComponent from "@/components/form-component";
import Heading from "./heading";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+231) 881 316 969",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Tel",
    description: "(+231) 775 386 362",
  },

  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "coopersilvanus27@gmail.com",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: `
    Police Academy,
    Paynesville city,
    Montserrado county, Liberia.
    `,
  },
];

const Contact = () => {
  return (
    <div id="contact" className="h-full w-full items-center justify-center">
      <Heading title="Contact Me" />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
        className=" pt-10 xl:pt-10 pb-10 xl:pb-10"
      >
        <div className=" xl:container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <FormComponent />

            {/* info */}
            <div
              className="flex flex-1 items-center xl:items-start xl:justify-end 
          order-1 xl:order-none mb-8 xl:mb-0 p-4"
            >
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div
                        className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] 
                  text-accent rounded-md flex items-center justify-center"
                      >
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}:</p>
                        <h3 className="text-xl xl:hidden">
                          {item.title === "E-mail"
                            ? "coopersilvanus27@ gmail.com"
                            : item.description}
                        </h3>
                        <h3 className="text-xl hidden xl:flex">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
