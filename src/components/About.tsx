"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function About() {
  // Container variants for staggering children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Each child animates 0.2s after the previous
      },
    },
  };

  // Individual item animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // smooth cubic-bezier
    },
  };

  return (
    <motion.div
      className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-4 flex items-center justify-center gap-4"
          variants={itemVariants}
        >
          <span>About Me</span>
        </motion.h2>

        {/* Yellow divider */}
        <motion.div
          className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"
          variants={itemVariants}
        ></motion.div>

        {/* Content */}
        <motion.div className="grid md:grid-cols-3 gap-8 text-left" variants={containerVariants}>
          <motion.div className="md:col-span-3" variants={containerVariants}>
            <motion.p className="text-muted-foreground leading-relaxed mb-4" variants={itemVariants}>
              Hello! I&apos;m a passionate frontend developer who loves turning ideas
              into fast, accessible, and visually pleasing digital experiences. My journey
              started years ago when I began customizing themes and experimenting with HTML
              & CSS and I’ve been building ever since.
            </motion.p>

            <motion.p className="text-muted-foreground leading-relaxed mb-4" variants={itemVariants}>
              I’ve worked on diverse projects from e-commerce platforms to highly interactive
              web applications. I enjoy creating scalable, human-centered solutions using
              React, Next.js, TypeScript, and Tailwind CSS.
            </motion.p>

            <motion.p className="text-muted-foreground leading-relaxed mb-4" variants={itemVariants}>
              Outside of development, I also teach tech on YouTube sharing tutorials,
              practical coding tips, and insights that help beginners break into the industry.
              Teaching has helped me stay sharp while giving back to the community.
            </motion.p>

            <motion.p className="text-muted-foreground leading-relaxed" variants={itemVariants}>
              I’m constantly learning, improving, and exploring new ways to build meaningful,
              user-focused digital products. I love what I do  and I’m just getting started.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
