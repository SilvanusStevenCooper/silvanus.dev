"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSliderBtns from "@/components/work-slider-btns";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "An AirBNB Clone",
    description: `A hotel, stay, or
    property rental,  booking  and management system software.`,
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Prisma ORM" },
      { name: "MongoDB" },
      { name: "Vercel" },
    ],

    image: "/assets/work/airbnb-clone.png",
    live: "https://airbnb-clone-one-ruby.vercel.app/",
    github: "https://github.com/SilvanusStevenCooper/airbnb-clone",
  },

  {
    num: "01",
    category: "FullStack",
    title: "E-commerce",
    description: `An e-commerce stocks management dashboard that can be connected to a store front.`,
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Prisma ORM" },
      { name: "MongoDB" },
      { name: "Vercel" },
    ],

    image: "/assets/work/e-commerce-sms.png",
    live: "https://e-commerce-sms.vercel.app/",
    github: "https://github.com/SilvanusStevenCooper/E-Commerce-SMS",
  },

  {
    num: "03",
    category: "FullStack",
    title: "Othello, a Trello clone",
    description: `A subscription based task management software.`,
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Prisma ORM" },
      { name: "MongoDB" },
      { name: "Vercel" },
    ],

    image: "/assets/work/othello-trello-clone.png",
    live: "https://othello-roan.vercel.app",
    github: "https://github.com/SilvanusStevenCooper/Othello",
  },

  {
    num: "04",
    category: "FullStack",
    title: "A Discord Clone",
    description: `A community based software system that grants special permissions to members of a community`,
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Prisma ORM" },
      { name: "MongoDB" },
      { name: "Vercel" },
    ],

    image: "/assets/work/discord-clone.png",
    live: "https://discord-clone-alpha-mauve.vercel.app",
    github: "https://github.com/SilvanusStevenCooper/Discord-clone",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    //get current slide ndex
    const currentIndex = swiper.activeIndex;
    // update state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeIn" },
      }}
      className="h-full min-h-[80vh] flex flex-col justify-center pt-28 pb-10 xl:pt-40 xl:mb-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
          order-2 xl:order-none group"
          >
            <div className="flex flex-col gap-4 ">
              {/* outline number */}
              <div
                className="text-8xl leading-none font-extrabold group-hover:text-accent 
              transition-all duration-500 text-transparent text-outline"
              >
                {project.num}
              </div>

              <h2
                className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white">{project.description}</p>

              {/* stock */}
              <div>
                <label
                  className="text-[21px] w-full font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize underline"
                >
                  <span>Tech Stack used:</span>
                </label>
                <ul className="grid grid-cols-2 gap-2 content-evenly h-auto xl:h-[130px] overflow-y-auto">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent ">
                        {item.name}

                        {/* remove the last comma
                      {index !== project.stack.length - 1 && ","} */}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* border */}
              <div className="border border-white" />

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live} target={"_blank"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                      items-center justify-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Live project github button */}
                <Link href={project.github} target={"_blank"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex 
                      items-center justify-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[50%] xl:h-[460px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="h-[50%] xl:h-[520px] mb-12 rounded-xl xl:rounded-none border-none xl:border"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full relative">
                  <div
                    className="h-[50vh] xl:h-[460px] relative group flex justify-center items-center
                  bg-pink-50/20"
                  >
                    {/* overlay */}
                    {/* <div className="absolite top-0 bottom-0 h-full w-full bg-black/10 z-10"></div> */}

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt="project image"
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
