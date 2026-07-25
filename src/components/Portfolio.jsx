import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../data/projectData";
import PortfolioItem from "./PortfolioItem";

const categories = ["All", ...new Set(projectData.flatMap((p) => p.stack))];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projectData
      : projectData.filter((p) => p.stack.includes(active));

  return (
    <section
      name="portfolio"
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've built and designed.
          </p>
        </motion.div>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <PortfolioItem
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
