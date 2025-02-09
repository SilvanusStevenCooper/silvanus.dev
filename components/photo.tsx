"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="h-full w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
      >
        <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-difference absolute">
          <Image
            alt="profile picture"
            src={"/assets/images/profile_picture001.PNG"}
            quality={100}
            priority
            fill
            className="object-contain p-2 xl:p-5"
          />
        </div>

        <motion.svg
          className={"w-[300px] xl:w-[500px] h-[300px] xl:h-[500px] "}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx={"253"}
            cy={"253"}
            r={"250"}
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
