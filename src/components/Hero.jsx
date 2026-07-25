import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Josh from "../assets/josh.JPG";

const Hero = () => {
  return (
    <section
      name="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-accent/10 dark:from-slate-900 dark:via-slate-900 dark:to-accent/5"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent dark:text-accent font-semibold tracking-wide uppercase text-sm mb-4"
            >
              Information Technology | Front-End Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight"
            >
              Hi. I'm{" "}
              <span className="gradient-text">Josh.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              I build clean, modern front-end experiences. Turning ideas into
              polished interfaces with React, Laravel, and Tailwind CSS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-accent/20 dark:bg-accent/10 blur-3xl" />
              <img
                src={Josh}
                alt="Joshua Patrick Aquino"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl ring-2 ring-white/20 dark:ring-slate-700/50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
