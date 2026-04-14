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

<motion.div
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center py-20 relative"
>
  {/* Main Heading - Consistent Gradient & Icon Style */}
  <h1 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center gap-3">
    <span className="hidden sm:inline">🛠️</span>
    Technical Skills
  </h1>
  
  {/* Subtitle - Consistent Typography & Spacing */}
  <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base tracking-wide opacity-80 px-4">
    The tools and technologies I use to turn <span className="text-white font-medium">complex problems</span> into elegant solutions.
  </p>

  {/* Premium Shimmer Divider - Exact same as others */}
  <div className="relative w-24 h-[2px] mx-auto mt-8 overflow-hidden rounded-full">
    {/* Animated Shimmer */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />
    {/* Background Glow Layer */}
    <div className="w-full h-full bg-purple-500/30 blur-[1px]" />
  </div>
</motion.div>

   

    </div>
  );
};