"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Private Software Company",
    duration: "2023 - Present",
    points: [
      "Developed responsive web applications using React & Next.js",
      "Collaborated with team members and handled client requirements",
      "Optimized UI performance and improved user experience",
    ],
  },
  {
    role: "Electrical Engineer / IT Department",
    company: "Pakistan Navy",
    duration: "2019 - 2023",
    points: [
      "Worked on technical systems and transitioned into IT development",
      "Managed and maintained software-related tasks",
      "Built strong problem-solving and teamwork skills",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={ref} className="w-full overflow-hidden py-20 px-4 md:px-10 ">
      
      {/* HEADER - Consistent with others */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 relative"
      >
        <h1 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center gap-3">
          <span className="hidden sm:inline">💼</span>
          Professional Experience
        </h1>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base tracking-wide opacity-80 px-4">
          A timeline of my <span className="text-white font-medium">technical journey</span> and contributions.
        </p>
        <div className="relative w-24 h-[2px] mx-auto mt-8 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
          <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
        </div>
      </motion.div>

      {/* TIMELINE SECTION */}
      <div className="relative w-full max-w-4xl mx-auto"> 
        
        {/* 🔥 Danda (Timeline Line) that Animates & Brightens on Scroll */}
        <div className="absolute left-4 md:left-1/2 top-0 w-[3px] h-full bg-white/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
           <motion.div 
             style={{ scaleY }}
             className="w-full h-full bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-600 origin-top shadow-[0_0_15px_rgba(6,182,212,0.8)]"
           />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-24 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Animated Pulsing Dot */}
            <div className="absolute left-2.5 md:left-1/2 transform md:-translate-x-1/2 z-20">
               <div className="w-4 h-4 bg-white rounded-full border-2 border-purple-500 shadow-[0_0_10px_#a855f7]" />
            </div>

            {/* CARD with Glow Border (Same as Education) */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative p-[2px] rounded-2xl group w-[90%] ml-12 md:ml-0 md:w-[45%]"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

              {/* Card Inner */}
              <div className="relative bg-zinc-900 rounded-2xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-1">{exp.role}</h2>
                <p className="text-purple-400 text-sm mb-4 font-semibold uppercase tracking-wider">
                  {exp.company} • {exp.duration}
                </p>

                <ul className="text-gray-300 text-sm space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 group/item">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span className="group-hover/item:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};