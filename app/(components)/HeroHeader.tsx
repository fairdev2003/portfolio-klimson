"use client";

import Image from "next/image";
import { motion, Variant } from "framer-motion";
import AnimatedText from "./AnimatedText";

const HeroHeader = () => {
  return (
    <div className="flex justify-center rounded-t-xl flex-col items-center pt-10 bg-cover backdrop-blur-xl">
      <div className="rounded-full border-4 border-blue-500">
        <Image
          src="/fair.jpg"
          alt="hero"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 mt-5">
        <h1 className="font-bold text-2xl">Jakub Klimkiewicz</h1>

        <h1 className="font-bold text-md text-blue-500">Fullstack Developer</h1>
      </div>

      <div className="flex flex-wrap px-5 mt-5">
        <a
          download
          href="/CV_IT.pdf"
          className="flex gap-1 font-semibold bg-blue-900 text-blue-400 p-2 rounded-xl cursor-pointer"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
