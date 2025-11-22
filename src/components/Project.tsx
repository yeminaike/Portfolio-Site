"use client";

import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Support Chat Agentic AI",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "Support Chat provides an intelligent chat interface that helps your team resolve customer issues faster across Seeds and Pennies, Liberty Pay, and Terminal.",
      liveLink: "https://your-live-site.com",
    
    },
    {
      name: "Rent Now Pay Later",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "RNPL is a flexible rental financing solution that lets tenants move into their homes instantly and spread rent payments monthly. Simple requirements, affordable plans, and zero upfront stress.",
      liveLink: "https://your-live-site.com",
     
    },


 {
      name: "Whispa Konnect",
       skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "Whispa Konnect delivers innovative VAS, bulk messaging, gamification, lotteries, and USSD services—offering seamless entertainment and engagement for brands and users.",
      liveLink: "https://your-live-site.com",
     
    },



    {
      name: "Kenya Predict Wiser",
     skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustard"],
      description:
        "Kenya Predict Wiser offers expert predictions across 50+ leagues, helping users make smarter, more profitable betting decisions—with support for multiple languages.",
      liveLink: "https://your-live-site.com",
     
    },


    {
      name: "CookBeta",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "CookBeta helps users discover meals they can make from ingredients they already have by providing smart AI-powered recipe suggestions.",
      liveLink: "https://my-cook-beta-application-8jap.vercel.app/",
    
    },


    {
      name: "Liberty Flex",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Zustard"],
      description:
        "Liberty Flex lets users access smartphones and gadgets with flexible payment plans. Browse, apply, and own devices instantly—no heavy upfront costs.",
      liveLink: "https://your-live-site.com",
    
    },
  ];

  return (
    <div className="px-6 md:px-[6.25rem] py-20 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="w-20 h-[3px] bg-[#E9B949] mx-auto mb-10 rounded-full"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col justify-between bg-[#001121] min-h-[300px] p-6 rounded-xl 
              border border-transparent hover:border-[#E9B949]/40 hover:bg-[#001529] transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#E9B949]/20 text-[#E9B949] text-xs font-medium px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#E9B949] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#ffc300] transition-all text-center"
                >
                  View Live
                </a>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
