"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 100,
    text: "Code commits",
  },
];

const duplicateStats = [...stats, ...stats];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 pl-10 xl:p-0 w-full">
      <div className="w-full items-center justify-center">
        <div className="flex w-full gap-4 md:gap-10 animate-scroll xl:animate-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 justify-center xl:justify-start"
              >
                <div>
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <span className="text-4xl xl:text-6xl font-extrabold">+</span>
                </div>
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white xl:pt-2`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
