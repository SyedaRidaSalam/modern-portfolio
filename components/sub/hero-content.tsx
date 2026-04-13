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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[1px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer Portfolio
          </h1>
        </motion.div>

        {/* Name & Typewriter Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Abdul Salam Wahab
            </span>
          </span>
          
          <div className="text-xl md:text-3xl h-[50px]">
            <span className="text-gray-200">A </span>
            <span className="text-cyan-400">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Software Engineer",
                  "SaaS Developer",
                  "AI Tool Builder",
                  "Seamless UI Architect",
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </motion.div>

        {/* Recruiter Friendly About Me */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  max-w-[600px] leading-relaxed"
        >
       Passionate Software Engineer focused on building
<span className="text-white font-medium"> modern web applications </span>
and high-performance digital solutions. I enjoy creating
<span className="text-white font-medium"> scalable, user-friendly interfaces </span>
combined with efficient backend logic. I focus on writing clean, maintainable code and delivering
<span className="text-white font-medium"> smooth and reliable user experiences </span>
across different types of projects and technologies.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg min-w-[150px] font-semibold transition-all hover:scale-105"
          >
            View Projects
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.1)}
            href="/resume.pdf" // Make sure your resume is in public folder
            target="_blank"
            className="py-3 px-6 border border-purple-500 text-center text-white cursor-pointer rounded-lg min-w-[150px] font-semibold bg-[#03001417] hover:bg-[#7042f821] transition-all hover:scale-105"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};