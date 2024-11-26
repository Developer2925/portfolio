import { motion } from "motion/react";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4">
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <SiExpress className="text-7xl" />
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-[#5F9F4E]" />
        </div>
        <div className="p-4">
          <SiMysql className="text-7xl text-[#005B84]" />
        </div>
        <div className="p-4">
          <RiTailwindCssFill className="text-7xl text-sky-500" />
        </div>
        <div className="p-4">
          <SiPostman className="text-7xl text-[#FE6C37]" />
        </div>
        <div className="p-4 lg:p-0">
          <SiMongodb className="text-7xl text-[#00EC64]" />
        </div>
        <div className="p-4 lg:p-0">
          <SiGreensock className="text-7xl text-[#0AE447]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
