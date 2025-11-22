"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Experience() {
  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>Experience</span>
        </motion.h2>

        <motion.div
          className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        {/* Experience Card */}
        <motion.div
          className="bg-[#001121] p-8 rounded-xl border border-transparent hover:border-[#E9B949]/40 hover:bg-[#001529] transition-all text-left max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <motion.h3
              className="text-2xl font-semibold mb-2 md:mb-0"
              variants={listItemVariants}
            >
              Senior Frontend Developer
            </motion.h3>
            <motion.span
              className="text-[#E9B949] font-medium"
              variants={listItemVariants}
            >
              @ Liberty Assured
            </motion.span>
          </div>

          <motion.p
            className="text-sm text-gray-300 font-mono mb-6"
            variants={listItemVariants}
          >
            2023 - Present
          </motion.p>

          <motion.ul className="space-y-3 text-gray-300">
            {[
              "Developed and maintained scalable user interfaces using modern JavaScript frameworks like React.js and Next.js, resulting in improved performance and user satisfaction across multiple projects.",
              "Built reusable component libraries and design systems using TypeScript and Tailwind CSS, improving development speed and consistency across projects.",
              "Implemented robust form validation and authentication flows, enhancing security and user trust by integrating tools like React Hook Form and Zod.",
              "Contributed to cross-platform responsiveness and accessibility improvements, ensuring compliance with WCAG guidelines and delivering a seamless experience on mobile, tablet, and desktop devices.",
              "Used Git and GitHub extensively for version control, managing feature branches, pull requests, and code merges to ensure a clean and organized development workflow.",
              "Reviewed and contributed to team codebases via GitHub pull requests, providing constructive feedback and maintaining high code quality standards across the frontend team.",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex gap-2 items-start"
                variants={listItemVariants}
              >
                <span className="text-[#E9B949] mt-1">▹</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
