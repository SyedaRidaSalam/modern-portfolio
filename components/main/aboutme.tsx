"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="relative w-full pt-20 md:py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* HEADER */}
      {/* ABOUT ME HEADER - Premium & Consistent Format */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="px-4 text-center overflow-hidden" // Mobile safety
>
  {/* Small Tagline - Font size and tracking reduced for mobile */}
  <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-purple-400 font-semibold mb-2 md:mb-3">
    The Engineer Behind the Code
  </h2>

  {/* Main Heading - text-3xl for mobile to prevent overflow */}
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 leading-[1.2]">
    <span className="inline text-2xl md:text-5xl">🙋🏻‍♂️</span>
    <span>About</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
      Me
    </span>
  </h1>

  {/* Description - Adjusted text size (text-sm to text-base) for better mobile reading */}
  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed md:leading-loose px-2">
    Passionate{" "}
    <span className="text-white font-medium">Software Engineer</span>{" "}
    specializing in crafting
    <span className="text-white"> scalable SaaS products</span> and
    AI-powered tools. I focus on building high-performance architectures
    that transform complex problems into{" "}
    <span className="text-cyan-400 font-medium">
      seamless digital experiences.
    </span>
  </p>

  {/* Premium Divider - Scaled down for mobile symmetry */}
  <div className="relative w-16 md:w-24 h-[2px] mx-auto mt-6 md:mt-8 overflow-hidden rounded-full">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
    <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
  </div>
</motion.div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid xl:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group mx-auto xl:mx-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] z-10"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 blur-md group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

          {/* ================= ORBIT 1 ================= */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[360px] h-[360px] rounded-full border-[1.5px] border-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.25)] relative">
              {/* Planet 1 */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
                              bg-gradient-to-br from-cyan-300 to-cyan-500 
                              shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee]"
              />

              {/* Planet 2 */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full 
                              bg-white 
                              shadow-[0_0_12px_white,0_0_25px_rgba(255,255,255,0.8)]"
              />
            </div>
          </motion.div>

          {/* ================= ORBIT 2 ================= */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-[420px] h-[420px] rounded-full border-[1.5px] border-purple-400/30 shadow-[0_0_25px_rgba(168,85,247,0.25)] relative">
              {/* Planet 3 */}
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-3.5 h-3.5 rounded-full 
                              bg-gradient-to-br from-purple-300 to-purple-500 
                              shadow-[0_0_15px_#c084fc,0_0_30px_#c084fc]"
              />

              {/* Planet 4 */}
              <div
                className="absolute top-1/4 left-0 w-2.5 h-2.5 rounded-full 
                              bg-white/80 
                              shadow-[0_0_10px_white,0_0_20px_rgba(255,255,255,0.6)]"
              />
            </div>
          </motion.div>

          {/* ================= DP ================= */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#0a0a1a] p-2 backdrop-blur-3xl shadow-2xl">
            <img
              src="/dp.jpg"
              alt="Abdul Salam Wahab"
              className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {/* CARD 1 */}
          <motion.div className="relative p-[2px] rounded-2xl group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

            <div className="relative bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                Who I Am
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I am a{" "}
                <span className="text-white font-medium">
                  Software Engineer
                </span>{" "}
                focused on building modern, scalable, and high-performance web
                applications.
                <br />
                <br />I specialize in transforming ideas into{" "}
                <span className="text-white font-medium">
                  clean, production-ready SaaS products
                </span>{" "}
                with strong attention to performance, UX, and maintainable
                architecture.
                <br />
                <br />I enjoy working on challenging problems and building
                systems that feel{" "}
                <span className="text-white font-medium">
                  fast, intuitive, and reliable.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div className="relative p-[2px] rounded-2xl group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

            <div className="relative bg-zinc-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                What I Build
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                I build{" "}
                <span className="text-white font-medium">
                  AI-powered applications
                </span>
                , modern SaaS platforms, and high-performance web experiences
                using Next.js and React.
                <br />
                <br />
                My focus is on creating products that are not just visually
                clean, but also{" "}
                <span className="text-white font-medium">
                  scalable, intelligent, and production-ready
                </span>
                .
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "AI Apps",
                  "SaaS Products",
                  "Web Apps",
                  "Next.js",
                  "React",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
