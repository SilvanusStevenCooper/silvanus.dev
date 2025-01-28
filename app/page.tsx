import DownloadBtn from "@/components/downloadBtn";
import Photo from "@/components/photo";
import Social from "@/components/social";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full pt-24 xl:pb-10">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pt-4 xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h2 xl:h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Silvanus Steven Cooper</span>
            </h1>
            <span className="text-xl">A Software Developer</span>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excell at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies. I
              will be very pleased to craft your digital presence
            </p>

            {/* buttton and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadBtn />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconsStyle="w-9 h-9 border bordr-accent rounded-full flex items-center justify-center
                text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* stats */}
        <div className="w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
}
