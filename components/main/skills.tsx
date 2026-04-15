import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden xl:py-5 py-10 px-4"
    >
      <SkillText />

      {/* FRONTEND */}
      <div className="flex flex-row justify-center flex-wrap gap-3 md:gap-5 items-center">
        {FRONTEND_SKILL.map((skill, i) => (
          <div
            key={skill.skill_name}
            className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* BACKEND */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
        {BACKEND_SKILL.map((skill, i) => (
          <div
            key={skill.skill_name}
            className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* FULLSTACK */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 md:gap-5 items-center">
        {FULLSTACK_SKILL.map((skill, i) => (
          <div
            key={skill.skill_name}
            className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center"
          >
            <SkillDataProvider
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};