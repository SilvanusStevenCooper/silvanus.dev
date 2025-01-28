"use client";

import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadBtn = () => {
  return (
    <Button
      // onClick={async () => {
      //   const link = document.createElement("a");
      //   link.href = ""; // Path to your PDF file
      //   link.download = ""; // Name of the downloaded file
      //   link.click(); // Simulates a click
      // }}
      variant={"outline"}
      size={"lg"}
      className="uppercase flex items-center gap-2"
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadBtn;
