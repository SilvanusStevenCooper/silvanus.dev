"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <Button
        type="button"
        className={cn("hidden xl:flex", btnStyles)}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyles} /> Previous
      </Button>

      <Button
        type="button"
        className={cn("hidden xl:flex", btnStyles)}
        onClick={() => swiper.slideNext()}
      >
        Next <PiCaretRightBold className={iconStyles} />
      </Button>

      <Button
        type="button"
        className={cn("flex xl:hidden", btnStyles)}
        onClick={() => swiper.slidePrev()}
      >
        <BsChevronDoubleLeft className={iconStyles} />
      </Button>

      <Button
        type="button"
        className={cn("flex xl:hidden", btnStyles)}
        onClick={() => swiper.slideNext()}
      >
        <BsChevronDoubleRight className={iconStyles} />
      </Button>
    </div>
  );
};

export default WorkSliderBtns;
