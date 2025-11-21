import React from "react";

export default function About() {
  return (
    <div className="px-6 md:px-[6.25rem] py-12 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
        
          <span>About Me</span>
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hello!  I&apos;m a passionate frontend developer who loves turning ideas
              into fast, accessible, and visually pleasing digital experiences. My journey
              started years ago when I began customizing themes and experimenting with HTML
              & CSS — and I’ve been building ever since.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I’ve worked on diverse projects from e-commerce platforms to highly interactive
              web applications. I enjoy creating scalable, human-centered solutions using
              React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Outside of development, I also teach tech on YouTube — sharing tutorials,
              practical coding tips, and insights that help beginners break into the industry.
              Teaching has helped me stay sharp while giving back to the community.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I’m constantly learning, improving, and exploring new ways to build meaningful,
              user-focused digital products. I love what I do — and I’m just getting started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
