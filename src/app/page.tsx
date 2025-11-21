"use client";

import About from "@/components/About";
import { Loader } from "@/components/core/Loader";
import { MarketingHeader } from "@/components/layout/marketing";
import React, { useState, useEffect } from "react";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

 
  if (isLoading) return 
   <Loader />;
  
  return (
    <div className="relative">
      <MarketingHeader />
      
       <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='project'>
        <Project />
      </section>

      <section id='experience'>
        <Experience />
      </section>

      <section id='contact'>
        <Contact />
      </section>
      
      <section>
        <Footer />
      </section>

    </div>
  );
}
