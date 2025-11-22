"use client";

import { Github, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-6">
      
      {/* Wrapper */}
      <div className="flex flex-col items-center justify-center gap-6">

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/adeyemi-ogunnaike"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="https://github.com/yeminaike?tab=repositories"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.youtube.com/@AdeyemiOgunnaike"
            target="_blank"
            className="hover:text-white transition"
          >
            <Youtube size={26} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Adeyemi Ogunnaike. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
