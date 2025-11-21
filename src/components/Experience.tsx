"use client";

import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
          <span>Experience</span>
        </h2>
        <div className="w-40 h-[3px] bg-[#E9B949] mx-auto mb-12 rounded-full"></div>

        {/* Single Experience Card */}
        <div className="bg-[#001121] p-8 rounded-xl border border-transparent hover:border-[#E9B949]/40 hover:bg-[#001529] transition-all text-left max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-2xl font-semibold mb-2 md:mb-0">
              Senior Frontend Developer
            </h3>
            <span className="text-[#E9B949] font-medium">@ Liberty Assured</span>
          </div>
          <p className="text-sm text-gray-300 font-mono mb-6">2023 - Present</p>

          <ul className="space-y-3 text-gray-300">
            <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Developed and maintained scalable user interfaces using modern JavaScript frameworks like React.js and Next.js, resulting in improved performance and user satisfaction across multiple projects.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Built reusable component libraries and design systems using TypeScript and Tailwind CSS, improving development speed and consistency across projects.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Implemented robust form validation and authentication flows, enhancing security and user trust by integrating tools like React Hook Form and Zod.</span>
            </li>

             <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Contributed to cross-platform responsiveness and accessibility improvements, ensuring compliance with WCAG guidelines and delivering a seamless experience on mobile, tablet, and desktop devices.</span>
            </li>

             <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Used Git and GitHub extensively for version control, managing feature branches, pull requests, and code merges to ensure a clean and organized development workflow </span>
            </li>

              <li className="flex gap-2 items-start">
              <span className="text-[#E9B949] mt-1">▹</span>
              <span>Reviewed and contributed to team codebases via GitHub pull requests, providing constructive feedback and maintaining high code quality standards across the frontend team.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
