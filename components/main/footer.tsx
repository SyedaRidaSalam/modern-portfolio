"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="relative w-full py-7 bg-[#030014] border-t border-white/5 overflow-hidden">

      {/* Soft Premium Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Name / Brand */}
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Abdul Salam Wahab
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl leading-relaxed">
          Software Engineer focused on building{" "}
          <span className="text-white font-medium">modern web apps</span>,
          <span className="text-white font-medium"> SaaS products</span>, and
          <span className="text-white font-medium"> AI-powered tools</span> with clean UI and scalable architecture.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm">
          <a href="#about-me" className="text-gray-400 hover:text-cyan-400 transition">
            About
          </a>

          <a href="#projects" className="text-gray-400 hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

      </div>

      {/* 🔥 COPYRIGHT SECTION FIXED (now properly bottom aligned) */}
      <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} All rights reserved. Built with passion 🚀
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-900/10 blur-[120px] -z-10" />
    </footer>
  );
};