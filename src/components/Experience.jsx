import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiAward } from "react-icons/fi";

const Experience = () => {
  return (
    <section
      name="experience"
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
            Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Work history, training, and certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <FiBriefcase className="text-accent" size={18} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-accent/30 dark:border-accent/20">
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-white dark:ring-slate-900" />
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                  Computer Operator II
                </h4>
                <p className="text-sm text-accent font-medium">
                  MWSS Regulatory Office
                </p>
                <p className="text-xs text-slate-400 mb-3">
                  May 2018 — Aug 2022
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Assisted MIS unit in ICT infrastructure maintenance",
                    "Performed inventory of ICT structures",
                    "Provided technical support for events",
                    "Network troubleshooting & hardware/software repair",
                    "Website updates and content posting",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                    >
                      <span className="text-accent shrink-0 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Trainings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                <FiAward className="text-accent" size={18} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                Trainings & Certificates
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Power of 2FA Authentication in Digital Transformation",
                  org: "AirCUVE Network Access Authentication",
                  date: "August 17, 2021",
                },
                {
                  title: "Backup and Disaster Recovery on AWS Webinar",
                  org: "VBusiness Software and Solution Inc.",
                  date: "May 14, 2020",
                },
                {
                  title: "Webinar on Intermediate Cybersecurity",
                  org: "Department of Information and Communications Technology",
                  date: "April 29, 2020",
                },
                {
                  title: "Advanced Malware Awareness",
                  org: "Sophos Cybersecurity",
                  date: "September 21, 2018",
                },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-accent mt-1">{cert.org}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
