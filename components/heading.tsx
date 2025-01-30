import React from "react";

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h3 className="font-extrabold underline text-4xl pt-10 xl:p-6 w-full items-center justify-center text-center">
      {title}
    </h3>
  );
};

export default Heading;
