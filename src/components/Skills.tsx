'use client';

import React, { useRef } from "react";
import {
  Code2,
  Terminal,
  GitBranch,
  Github,
  Braces,
  LayoutPanelLeft,
  Smartphone,
  Globe,
  Layout,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "React", icon: <Code2 size={28} /> },
    { name: "Next.js", icon: <Globe size={28} /> },
    { name: "TypeScript", icon: <Braces size={28} /> },
    { name: "JavaScript", icon: <Terminal size={28} /> },
    { name: "React Native", icon: <Smartphone size={28} /> },
    { name: "Git", icon: <GitBranch size={28} /> },
    { name: "GitHub", icon: <Github size={28} /> },
    { name: "HTML5", icon: <LayoutPanelLeft size={28} /> },
    { name: "CSS3", icon: <LayoutPanelLeft size={28} /> },
    { name: "Tailwind CSS", icon: <Layout size={28} /> },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The core technologies I work with to build powerful and scalable digital products.
        </p>

        {/* Carousel with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#E9B949] text-black p-2 rounded-full shadow-lg hover:bg-[#d9a53c] z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Skills Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-hidden scroll-smooth py-4 px-2 md:px-0"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex-none flex flex-col items-center gap-3 bg-[#001121] min-w-[120px]
                p-6 rounded-xl border border-transparent hover:border-[#E9B949]/40
                hover:bg-[#001529] transition-all group"
              >
                <div className="text-[#E9B949] group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white mt-2">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

     
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#E9B949] text-black p-2 rounded-full shadow-lg hover:bg-[#d9a53c] z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
