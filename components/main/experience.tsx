"use client";

import { motion } from "framer-motion";

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
  return (
 <section
  id="experience"
  className="w-full overflow-hidden py-20 px-4 md:px-10"
>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Experience
      </motion.h1>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/30" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white" />

            {/* Card */}
            <div className="bg-[#0a0a1a] border border-purple-500/20 rounded-xl p-6 w-full md:w-[45%] shadow-lg backdrop-blur-md">
              <h2 className="text-xl font-semibold text-white">
                {exp.role}
              </h2>
              <p className="text-purple-400 text-sm mb-2">
                {exp.company} • {exp.duration}
              </p>

              <ul className="text-gray-300 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};