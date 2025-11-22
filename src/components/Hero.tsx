import React, { useState, useEffect } from "react";
import { Github } from "lucide-react";


export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
   const [displayText, setDisplayText] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);
   const [loopIndex, setLoopIndex] = useState(0);

  const words = ["Frontend Engineer", "Software Engineer"];
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1200;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const current = loopIndex % words.length;
    const fullWord = words[current];

    if (!isDeleting && displayText.length < fullWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullWord.substring(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(fullWord.substring(0, displayText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayText === fullWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }
  }, [displayText, isDeleting, isLoading]);


  return (
    <div className="">

  <div className="xl:px-[2rem] [@media(min-width:1555px)]:px-[6.25rem] px-[1.5rem] bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white">
        <section className="min-h-screen flex items-center ">
          <div className="max-w-4xl w-full">
            <p className="text-[#E9B949] font-mono text-sm mb-6 tracking-wider">
              Adeyemi Ogunnaike
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {displayText}
              <span className="border-r-4 border-[#E9B949] ml-1 animate-pulse"></span>
            </h1>

            <p className="md:text-lg text-[1rem] text-gray-300 max-w-2xl mb-12 leading-relaxed">
              I’m a frontend engineer specializing in building high quality, accessible
              digital products. I focus on crafting clean UI, smooth user experiences, and
              performant web applications using React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yeminaike?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent border-2 border-[#E9B949] text-[#E9B949] px-6 py-3 rounded-lg hover:bg-[#E9B949]/10 transition-all"
              >
                <Github size={18} />
               View Github 
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
