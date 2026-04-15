"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-10"
    >
      {/* LEFT SIDE */}
      <div className="w-full xl:w-1/2 flex flex-col gap-6 text-center xl:text-start items-center xl:items-start px-4 md:px-0 z-20">
        {/* Welcome Box - Made more sophisticated with darker colors and finer border */}
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 py-[5px] px-[12px] border border-cyan-800/40 rounded-full bg-[#030014] backdrop-blur-sm w-fit shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          <SparklesIcon className="text-cyan-400 h-4 w-4 animate-pulse" />
          <h1 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-cyan-200/80">
           Solving real-world problems
          </h1>
        </motion.div>

        {/* Name & Title Section - Completely Redesigned Hierarchy */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-4"
        >
          {/* Refined Name with multi-color gradient and precise glow */}
          <h1 className="text-4xl md:text-4xl lg:text-[45px] font-black text-white leading-[1.05] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Abdul Salam Wahab
            </span>
          </h1>

          {/* Elegant Typewriter Subheading with specific color hierarchy */}
          <div className="text-xl md:text-3xl font-extrabold h-[40px] flex items-center justify-center xl:justify-start gap-3">
            <span className="text-gray-400 font-light ">A </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Software Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </div>
        </motion.div>

        {/* Description - Made it 'Breathable' with subtle semantic accents */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 text-sm md:text-lg leading-relaxed md:leading-loose max-w-xl font-light tracking-wide px-2 md:px-0"
        >
          Passionate{" "}
          <span className="text-white border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">Software Engineer</span>{" "}
          specialized in building{" "}
          <span className="text-white border-b border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
            modern web apps
          </span>
          ,{" "}
          <span className="text-white border-b  border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
            SaaS platforms
          </span>
          , and{" "}
          <span className="text-white border-b  border-purple-500/40 hover:border-purple-500/80 transition pb-0.5">
            AI-powered tools
          </span>{" "}
          with clean UI and scalable architectures.
        </motion.p>

        {/* CTA BUTTONS - YOUR UNTOUCHED UNIFORM DESIGN */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-8 md:mt-10 justify-center xl:justify-start w-full"
        >
          {/* View Projects */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">View Projects</span>
          </motion.a>

          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            className="relative px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn hover:border-white/20 transition-all flex items-center justify-center"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden xl:flex w-full md:w-1/2 justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="hero"
          height={600}
          width={600}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
