"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function YoutubeTutorials() {
  const videos = [
    {
      title: "How to create a Card Component in React",
      url: "https://www.youtube.com/embed/kr8dpSt0Ie0",
    },
    {
      title: "Deploy React Project to Github Pages",
      url: "https://www.youtube.com/embed/WXMitw4AGEU",
    },
    {
      title: "git branch : fatal error solved",
      url: "https://www.youtube.com/embed/Zd8qeSlX9f0",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section
      id="youtube"
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>YouTube Tutorials</span>
        </motion.h2>

        {/* Yellow Divider */}
        <motion.div
          className="w-40 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        {/* Videos Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="
                group 
                bg-[#001121] 
                rounded-xl 
                overflow-hidden 
                border 
                border-transparent 
                hover:border-[#E9B949]/40 
                hover:bg-[#001529] 
                transition-all 
                duration-300 
                hover:scale-[1.02] 
                cursor-pointer
                hover:shadow-lg
              "
              variants={cardVariants}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-white group-hover:text-[#E9B949] transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
