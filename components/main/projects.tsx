"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "AI Multi-Vendor E-Commerce Platform",
    description:
      "Full-stack AI-powered marketplace with vendor system, authentication, payments, and smart product recommendations.",
    tech: ["Next.js", "Gemini AI", "Clerk", "Neon", "Inngest", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/abdulsalamwahab-dev/gobucket-ai-multivendor-app",
    live: "https://gobucket-ai-multivendor-app-8qys.vercel.app/",
  },
  {
    title: "AI Note Taker SaaS App",
    description:
      "AI-powered note-taking app with LLM integration, subscriptions, and real-time processing.",
    tech: ["Next.js", "Gemini LLM", "Paddle", "Convex", "Clerk", "React"],
    image: "/projects/ai-pdf.jpg",
    github: "https://github.com/abdulsalamwahab-dev/AI-PDF-note-taker",
    live: "https://ai-pdf-note-taker-sigma.vercel.app/",
  },
  {
    title: "Modern Admin Dashboard",
    description:
      "Responsive dashboard with analytics, charts, authentication, and modern UI components.",
    tech: ["Next.js", "React", "ShadCN UI", "Dashboard"],
    image: "/projects/dashboard.jpg",
    github: "https://github.com/abdulsalamwahab-dev/nextjs-shadcn-dashboard",
    live: "https://nextjs-shadcn-dashboard-rosy.vercel.app/",
  },
  {
  title: "Discussion Board",
  description:
    "A simple discussion forum where users can create posts, participate in conversations, and interact using a clean PHP-based backend with MySQL database support.",
  tech: ["PHP", "HTML", "CSS", "MySQL"],
  image: "/projects/discussion-board.jpg",
  github: "https://github.com/abdulsalamwahab-dev/discussion-php-project",
  live: "",
},
];

export const Projects = () => {
  const [active, setActive] = useState(PROJECT_DATA[0]);

  return (
    <section id="projects" className="overflow-x-hidden md:py-20 px-4 sm:px-6 ">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 relative"
      >
        {/* Main Heading - Same Gradient & Style */}
        <h1 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center gap-3">
          <span className="hidden sm:inline">🔥</span>
          Featured Projects
        </h1>

        {/* Subtitle - Same Typography */}
        <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base tracking-wide opacity-80 px-4">
          Digital <span className="text-white font-medium">constellations</span>{" "}
          crafted with precision and modern code.
        </p>

        {/* Premium Divider with Glow - Same as Academic Journey */}
        <div className="relative w-24 h-[2px] mx-auto mt-8 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
          <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* LEFT SIDE LIST */}
        <div className="space-y-4">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setActive(project)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group
                ${
                  active.title === project.title
                    ? "border-cyan-500/50 bg-cyan-500/5 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                    : "border-white/10 hover:border-white/20 bg-white/5"
                }`}
            >
              <h3
                className={`font-semibold transition-colors ${active.title === project.title ? "text-cyan-400" : "text-white"}`}
              >
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
                {project.tech.slice(0, 3).join(" • ")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE PREVIEW */}
        <div className="md:col-span-2 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              {/* PREMIUM ANIMATED GLOW BORDER */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

              {/* CARD */}
              <div className="relative bg-[#0a0a1a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* IMAGE */}
                <div className="w-full h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-60" />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {active.title}
                  </h2>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {active.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {active.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-400 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* PREMIUM BUTTONS */}
                  <div className="flex gap-4 mt-8 flex-wrap">
                    {/* Github Button - Shimmer Style with Icon */}
                    <a
                      href={active.github}
                      target="_blank"
                      className="relative px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn hover:border-white/20 transition-all flex items-center justify-center"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <span className="relative z-10 flex items-center gap-2">
                        {/* GitHub SVG Icon */}
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                      </span>
                    </a>

                    {/* Live Demo Button (Same as before) */}
                    <a
                      href={active.live}
                      target="_blank"
                      className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-bold tracking-widest uppercase overflow-hidden group/btn hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <span className="relative z-10 flex items-center gap-2">
                        <span>🔗</span> Live Demo
                      </span>
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
