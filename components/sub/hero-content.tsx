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
      <div className="w-full md:w-1/2 flex flex-col gap-5 text-center md:text-start items-center md:items-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 py-[6px] px-[12px] border border-[#7042f88b] rounded-full bg-white/5 backdrop-blur-md w-fit"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="text-[13px] text-gray-200">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-3xl md:text-4xl font-bold text-white"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Abdul Salam Wahab
            </span>
          </span>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl h-[40px]">
            <span className="text-gray-300">A </span>
            <span className="text-cyan-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "SaaS Developer",
                  "AI Tool Builder",
                  "UI Architect",
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

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
        >
          Passionate Software Engineer building{" "}
          <span className="text-white">modern web apps</span>,{" "}
          <span className="text-white">SaaS platforms</span>, and{" "}
          <span className="text-white">AI-powered tools</span> with clean UI,
          scalable architecture, and smooth user experience.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start w-full"
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
        className="hidden md:flex w-full md:w-1/2 justify-center items-center"
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
