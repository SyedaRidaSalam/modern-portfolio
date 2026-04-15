"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // 🔥 Scroll Spy (Stable + Accurate)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      let current = "#hero";

      NAV_LINKS.forEach((link) => {
        const section = document.querySelector(link.link) as HTMLElement | null;

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = link.link;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load fix

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 z-50 px-6 lg:px-10 bg-[#03001480] backdrop-blur-md shadow-lg shadow-[#2A0E61]/40">
      <div className="flex items-center justify-between h-full">
        
        {/* LOGO */}
        <Link href="#hero" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            draggable={false}
          />

          <span className="hidden lg:block text-gray-300 font-medium">
            Abdul Salam Wahab
          </span>
        </Link>

        {/* DESKTOP NAV - Ab 1024px se bari screen par dikhega */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-6 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.link;

              return (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setActiveSection(link.link)}
                  className={`relative text-sm font-medium transition duration-300
                    ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"}
                  `}
                >
                  <span className="relative">
                    {link.title}

                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300
                        ${isActive ? "w-full bg-cyan-400" : "w-0 bg-purple-500"}
                      `}
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* SOCIAL ICONS - Tablet/Mobile par hidden rahega */}
        <div className="hidden lg:flex gap-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link key={name} href={link} target="_blank">
              <Icon className="h-6 w-6 text-white hover:text-cyan-400 transition" />
            </Link>
          ))}
        </div>

        {/* MOBILE/TABLET BUTTON - 1024px se niche burger menu dikhayega */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE/TABLET MENU CONTENT */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-6 flex flex-col items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => {
                setActiveSection(link.link);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg transition
                ${activeSection === link.link ? "text-cyan-400" : "text-gray-300"}
              `}
            >
              {link.title}
            </Link>
          ))}

          {/* SOCIALS MOBILE/TABLET */}
          <div className="flex gap-5 mt-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank">
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};