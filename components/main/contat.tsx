"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      console.log("SUCCESS:", result);
      setSuccess(true);
      form.current.reset();

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Message failed! Check EmailJS setup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative xl:py-20 px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 relative"
      >
        <h1 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center gap-3">
          ☎️ Get In Touch
        </h1>

        <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm md:text-base">
          Have a project in mind? Let’s create something{" "}
          <span className="text-white font-medium">legendary</span> together.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-3xl font-semibold text-white">
            Let’s build something{" "}
            <span className="text-cyan-400">amazing 🤝</span>
          </h2>

          <p>
            Abdul Salaam Wahab — Full Stack Developer focused on scalable apps,
            SaaS systems, and clean UI.
          </p>

          <p>📧 abd.islam456@gmail.com</p>
          <p>📱 +49 160 4530011</p>
          <p>📍 Germany</p>
        </div>

        {/* 🔥 RIGHT FORM - Updated with Consistent Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative p-[2px] rounded-2xl group" // Parent for the glow
        >
          {/* The Glowing Background Layer */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

          {/* Main Form Container */}
          <div className="relative p-8 rounded-2xl bg-[#0a0a15] border border-white/10 h-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none focus:border-cyan-500/50 transition-colors"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="relative py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold overflow-hidden group/btn shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all"
              >
                {/* Shimmer effect inside button */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <span className="relative z-10">
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </span>
              </button>

              {success && (
                <p className="text-green-400 text-center text-sm animate-bounce">
                  Message sent successfully 🚀
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
