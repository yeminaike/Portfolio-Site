"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react"; // YouTube play icon

export default function YoutubeTutorials() {
  const videos = [
    {
      title: "How to create a Card Component in React",
      url: "https://www.youtube.com/watch?v=kr8dpSt0Ie0",
      thumbnail: "https://img.youtube.com/vi/kr8dpSt0Ie0/hqdefault.jpg",
    },
    {
      title: "Deploy React Project to Github Pages",
      url: "https://www.youtube.com/watch?v=WXMitw4AGEU",
      thumbnail: "https://img.youtube.com/vi/WXMitw4AGEU/hqdefault.jpg",
    },
    {
      title: "git branch : fatal error solved",
      url: "https://www.youtube.com/watch?v=Zd8qeSlX9f0",
      thumbnail: "https://img.youtube.com/vi/Zd8qeSlX9f0/hqdefault.jpg",
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
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          YouTube Tutorials
        </motion.h2>

        {/* Yellow Divider */}
        <motion.div
          className="w-40 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Videos Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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
            >
              {/* Entire clickable card */}
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Thumbnail + Play Icon */}
                <div className="relative aspect-video w-full">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-all duration-300"
                  />

                  {/* Play Icon */}
                  <div className="
                    absolute inset-0 
                    flex items-center justify-center
                    bg-black/30 
                    opacity-0 group-hover:opacity-100 
                    transition duration-300
                  ">
                    <Play className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Title */}
                <div className="p-4 pb-5">
                  <h3 className="text-lg font-medium text-white group-hover:text-[#E9B949] transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
