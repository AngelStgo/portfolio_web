import React from "react";
// import { useState } from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import NavBar from "../components/navBar";
import About from "../components/About";
import Contact from "../components/Contact";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1E293B] font-sans">
     
     <NavBar/>
     <Hero/>
     <Projects/>
     <About/>
     <Contact/>

    </div>
  );
}
