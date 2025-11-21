"use client";

import React from "react";
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

  return (
    <div className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The core technologies I work with to build powerful and scalable digital products.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 bg-[#001121] min-h-[24px]
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
      </div>
    </div>
  );
}
