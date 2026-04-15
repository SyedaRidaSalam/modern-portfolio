"use client";

import { motion } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { BACKEND_SKILL, FRONTEND_SKILL, FULLSTACK_SKILL } from "@/constants";

interface Skill {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
}

export const Skills = () => {
const SkillCategory = ({ title, skills }: { title: string; skills: readonly Skill[] }) => (
  <div className="flex flex-col items-center w-full mb-6 md:mb-12"> {/* Mobile pe margin kam kiya */}
    <div className="mb-4 md:mb-6 text-center">
      {/* Headings smaller on mobile */}
      <h3 className="text-[10px] md:text-lg font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white/90">
        {title}
      </h3>
      <div className="h-[1px] w-10 bg-cyan-500/30 mt-1.5 mx-auto" />
    </div>
    
    {/* Gap reduced to 2 on mobile, 5 on desktop */}
    <div className="flex flex-row justify-center flex-wrap gap-2 md:gap-5 items-center max-w-[1050px] mx-auto px-2 z-10 relative">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.skill_name}
          whileHover={{ y: -4, scale: 1.06 }}
          className="relative group p-2 md:p-3.5 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-300 shadow-2xl"
        >
          {/* Neon Glow Layer */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

          {/* Icon Size: 32px on mobile, 48px on desktop */}
          <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center relative z-10">
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              // Scaling icons down for mobile specifically
              width={skill.width * 0.55} 
              height={skill.height * 0.55}
              index={i}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

  return (
    <section id="skills" className="flex flex-col items-center justify-center relative overflow-hidden py-16">
      <SkillText />

      <div className="z-20 w-full mt-12">
        <SkillCategory title="Interface & Styling" skills={FRONTEND_SKILL} />
        <SkillCategory title="Server & Database" skills={BACKEND_SKILL} />
        <SkillCategory title="DevOps & Architecture" skills={FULLSTACK_SKILL} />
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="w-full h-full absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <video className="w-full max-w-[1400px] h-full object-contain" preload="none" playsInline loop muted autoPlay>
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};