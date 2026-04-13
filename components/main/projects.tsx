"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "AI Multi-Vendor E-Commerce Platform",
    description:
      "Full-stack AI-powered marketplace with vendor system, authentication, payments, and smart product recommendations.",
    tech: [
      "Next.js",
      "Gemini AI",
      "Clerk",
      "Neon",
      "Inngest",
      "ImageKit",
      "PostgreSQL",
      "Tailwind",
      "AI",
    ],
    image: "/projects/ecommerce.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "AI Note Taker SaaS App",
    description:
      "AI-powered SaaS note-taking app with LLM integration, subscriptions, and real-time processing.",
    tech: [
      "Next.js",
      "Gemini LLM",
      "Paddle",
      "Convex",
      "Clerk",
      "React",
      "SaaS",
    ],
    image: "/projects/ai-pdf.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Modern Admin Dashboard",
    description:
      "Responsive dashboard with analytics, charts, authentication, and modern UI components.",
    tech: ["Next.js", "React", "ShadCN UI", "Dashboard"],
    image: "/projects/dashboard.jpg",
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  const [active, setActive] = useState(PROJECT_DATA[0]);

  return (
    <section id="projects" className="py-20 px-6">

      {/* TITLE */}
      <h1 className="text-[42px] font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Featured Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* LEFT LIST */}
        <div className="space-y-4">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(project)}
              whileHover={{ scale: 1.03 }}
              className={`cursor-pointer p-4 rounded-2xl border transition
                ${
                  active.title === project.title
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-gray-700 hover:border-gray-500"
                }`}
            >
              <h3 className="text-white font-semibold">
                {project.title}
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                {project.tech.slice(0, 3).join(" • ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="md:col-span-2">

          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative p-[2px] rounded-2xl"
            >

              {/* glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 blur-sm opacity-70 animate-pulse" />

              {/* CARD */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden">

                {/* IMAGE */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {active.title}
                  </h2>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {active.description}
                  </p>

                  {/* TECH CHIPS */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {active.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS (FIXED ICONS) */}
                  <div className="flex gap-4 mt-6">

                    {/* GitHub Button */}
                    <a
                      href={active.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-600 text-sm text-white hover:bg-gray-800 transition"
                    >
                      {/* GitHub icon fallback */}
                      <span>🐙</span>
                      GitHub
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href={active.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm hover:scale-105 transition"
                    >
                      {/* link icon fallback */}
                      <span>🔗</span>
                      Live Demo
                    </a>

                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};