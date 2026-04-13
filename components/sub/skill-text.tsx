"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      {/* Top Label with Icon */}
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
       My Skills
      </motion.h1>

      {/* Subheading */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[18px] md:text-[20px] text-gray-400 mt-[-60px] mb-10 text-center max-w-[700px]"
      >
        Focused on performance, scalability, and seamless user experience.
      </motion.div>

    </div>
  );
};