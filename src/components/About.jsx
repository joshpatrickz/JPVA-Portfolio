import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      name="about"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-accent/90 to-blue-600/90 dark:from-accent-dark dark:to-blue-700"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Hi. I'm Josh. Nice to meet you!
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              I'm a Front-End Developer building the front-end of websites that
              leads to the success of the overall product. I love crafting
              interfaces that are clean, responsive, and user-friendly.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              I'm open to Job opportunities where I can contribute, learn, and
              grow. If you have a good opportunity that matches my skills and
              experience, don't hesitate to contact me.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
