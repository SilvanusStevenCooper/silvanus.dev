"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 100,
    text: "Code commits",
  },

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
];

// const duplicateStats = [...stats, ...stats];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 pl-10 xl:p-0 w-full overflow-hidden relative">
      <div className="w-full flex items-center justify-center">
        <div className="flex xl:gap-10 animate-scroll xl:animate-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-4 justify-center xl:justify-start min-w-[200px] text-wrap"
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
                    stat.text.length < 15
                      ? "max-w-[80px] xl:max-w-[100px]"
                      : "max-w-[100px] xl:max-w-[150px]"
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
