"use client";

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
    text: "Code commit",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-6">
      <div className="mx-auto w-full">
        <div
          className="grid grid-cols-2 gap-6 ml-4 sm:ml-6 xl:ml-0 sm:flex sm:flex-wrap sm:gap-6 sm:max-w-[80vw] 
        items-center xl:items-stretch xl:flex xl:flex-wrap xl:gap-6 mx-auto xl:max-w-none"
        >
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 justify-center xl:justify-start"
              >
                <div className="">
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
