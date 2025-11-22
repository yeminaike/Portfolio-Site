"use client";

import React from "react";

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

  return (
    <section
      id="youtube"
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
          <span>YouTube Tutorials</span>
        </h2>

        {/* Yellow Divider */}
        <div className="w-40 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"></div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
