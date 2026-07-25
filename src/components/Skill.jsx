import React from "react";
import { motion } from "framer-motion";
import DesignLogo from "../assets/design-logo.png";
import DevLogo from "../assets/dev-logo.png";

const itSkills = [
  "IT Infrastructure",
  "System Installation, Configuration & Upgrading",
  "Hardware & Software Troubleshooting",
  "LAN/WAN/Wireless Administration",
];

const devSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Tailwind CSS", level: 85 },
];

const Skill = () => {
  return (
    <section
      name="skills"
      className="py-24 md:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            What I bring to the table — from IT infrastructure to front-end
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* IT Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <img src={DesignLogo} alt="IT" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Information Technology
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Infrastructure & Support
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              IT is the use of computers, storage, networking, and other
              infrastructure to create, process, store, secure, and exchange
              electronic data.
            </p>

            <ul className="space-y-3">
              {itSkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Dev Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-xl hover:shadow-accent/5 dark:hover:shadow-accent/10 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <img src={DevLogo} alt="Dev" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Front-End Developer
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Languages I speak
                </p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              I like to code things from scratch and enjoy bringing ideas to
              life in the browser.
            </p>

            <div className="space-y-4">
              {devSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
