"use client";

import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiPrisma,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Heading from "./heading";

const about = {
  title: "About Me",
  description: `I am Silvanus Steven Cooper, a Tech, AI, and Quantum enthusiast, 
  a programmer, a full-stack web developer, a 
  mobile developer, and a software engineering student at the University of Liberia`,

  info: [
    {
      fieldName: "Name",
      fieldValue: "Silvanus Steven Cooper",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Liberian",
    },
    {
      fieldName: "Freelance?",
      fieldValue: "Available",
    },

    {
      fieldName: "Phone",
      fieldValue: "0881316969/0775386362",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "0776118399",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Silvanus Steven Cooper",
    },

    {
      fieldName: "Github",
      fieldValue: "SilvanusStevenCooper",
    },

    {
      fieldName: "Facebook",
      fieldValue: "Silvanus Steven Cooper",
    },

    {
      fieldName: "X (formerly Twitter)",
      fieldValue: "Silvanus Steven Cooper",
    },
  ],
};

const experiences = {
  title: "My Experience",

  description: `
  I have two years of experience building full-stack web apps 
  with various web development technologies. Core among these technologies include Next.js, 
  Tailwind CSS, Javascript/Typescript, Prisma ORM, MongoDB, PlanetScale, Vercel and more. 
  I am also familiar with other programming languages such as Python, C++, and Java and 
  I am capable of easily picking up other technologies relevant to a specific project 
  that I haven't already used before`,

  items: [
    {
      company: "Personal Projects",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
    },

    {
      company: "AfrixMart",
      position: "Co-Founder, CEO, and Senior Software Developer",
      duration: "2025 - Present",
    },
  ],
};

const education = {
  title: "Education",

  description: `I am a self-taught programmer, and a software engineering 
  student at the University of Liberia.`,

  items: [
    {
      institution: "University of Liberia",
      degree: "BSC, Software Engineering",
      duration: "2022 - present",
    },

    {
      institution: "Online Course (Udemey)",
      degree: "Full-Stack Web Development",
      duration: "2023",
    },

    {
      institution: "University of Liberia",
      degree: "Some university courses (Management and Accounting)",
      duration: "2019 and 2021",
    },

    {
      institution: "St. Kizito Catholic High School",
      degree: "High School Diplomat",
      duration: "2016",
    },
  ],
};

const skills = {
  title: "Skills",
  description: `The following are lists of skills that I have. 
  I am looking forward to improving and adding to them.`,

  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },

    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },

    {
      icon: <SiJavascript />,
      name: "Javascript",
    },

    {
      icon: <SiTypescript />,
      name: "Typescript",
    },

    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <SiGit />,
      name: "Git",
    },

    {
      icon: <SiPrisma />,
      name: "Prisma",
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },

    {
      icon: <FaNodeJs />,
      name: "Nodejs",
    },
  ],
};
const Resume = () => {
  return (
    <div id="resume" className="h-full items-center justify-center">
      <Heading title="Resume" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.5, ease: "easeIn" },
        }}
        className="h-full flex items-center justify-center pb-6 xl:pt-10 xl:pb-0 relative"
      >
        <div className=" container mx-auto relative">
          <Tabs
            defaultValue="about"
            className="flex h-full flex-col xl:flex-row gap-[60px] relative"
          >
            <TabsList
              className="flex flex-col xl:left-[4.5rem] xl:top-[10rem] w-full max-w-[380px] 
          mx-auto xl:mx-0 gap-6 pt-16 xl:pt-0"
            >
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-auto  xl:left-[500px] xl:top-0 xl:pb-20">
              <TabsContent value="about" className="w-full  pb-10">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-3xl font-semibold">{about.title}</h3>
                  <p className="w-auto text-white mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-auto  xl:mx-0 gap-2">
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex justify-start gap-4">
                          <span className="text-white text-xl">
                            {item.fieldName}:
                          </span>
                          <span className="text-white">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent
                value="experience"
                className="pb-10 w-auto xl:w-[700px]"
              >
                <div className="flex flex-col gap-[30px] text-start xl:text-left">
                  <h3 className="text-3xl font-semibold">
                    {experiences.title}
                  </h3>
                  <p className=" md:w-full text-white mx-auto xl:mx-0">
                    {experiences.description}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experiences.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-4"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3
                              className="text-xl w-auto h-auto text-center 
                          justify-center lg:text-left"
                            >
                              {item.position}
                            </h3>

                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                              <p className="text-white">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full pb-10">
                <div className="flex flex-col gap-[30px] text-left">
                  <h3 className="text-3xl font-semibold">{education.title}</h3>
                  <p className=" md:w-full text-white mx-auto xl:mx-0">
                    {education.description}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-2"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3
                              className="text-xl w-auto h-auto text-center 
                          justify-center lg:text-left"
                            >
                              {item.degree}
                            </h3>

                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                              <p className="text-white">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-left">
                    <h3 className="text-3xl font-semibold">{skills.title}</h3>
                    <p className="w-auto text-white mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillsList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] bg-[#232329] rounded-xl flex 
                            justify-center items-center group"
                              >
                                <div
                                  className="flex flex-col gap-2 text-6xl group-hover:text-accent items-center justify-center transition-all 
                              duration-300"
                                >
                                  <span> {skill.icon}</span>
                                  <span className="xl:hidden text-xs">
                                    {skill.name}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>{skill.name}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
