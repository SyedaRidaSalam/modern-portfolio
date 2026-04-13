"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import studyAnimation from "@/assets/space.json";

const EDUCATION = [
  {
    degree: "BS Computer Science",
    institute: "University Name",
    year: "2021 - 2025",
    logo: "/Uni_Siegen_Logo_klein.png",
    details: "Software Engineering, AI, Web Development",
  },
  {
    degree: "Intermediate (ICS)",
    institute: "College Name",
    year: "2019 - 2021",
    logo: "/vupakistan_logo.jfif",
    details: "Computer Science, Mathematics, Physics",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-6">

      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center"
>
  Education
</motion.h1>
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mt-[-60px]">

        {/* LEFT ANIMATION */}
        <div className="hidden md:block">
          <Lottie animationData={studyAnimation} loop={true} />
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-[2px] rounded-2xl group"
            >

              {/* 🔥 Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm group-hover:opacity-100 animate-pulse" />

              {/* Inner Card */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-xl">

                {/* TOP SECTION */}
                <div className="flex items-center gap-4">

                  {/* 🎓 University Logo */}
                  <motion.img
                    src={edu.logo}
                    alt={edu.institute}
                    className="w-14 h-14 rounded-xl object-contain bg-white p-2 shadow"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {edu.institute}
                    </p>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="mt-4">
                  <p className="text-sm text-gray-400">{edu.year}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {edu.details}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};