import React, { useState } from "react";
import NavBar from "../components/navBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";




function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-slate-900 text-white" : "bg-[#F9FAFB] text-[#1E293B]"}>
      <div className="min-h-screen font-sans">
        <div className="flex justify-end p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 text-sm rounded-full bg-[#3A86FF] text-white hover:bg-blue-600"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>

       <NavBar/>
       <Hero/>
       <Projects/>
       <About/>
       {/* <Contact/> */}
       <Footer/>
       

      </div>
    </div>
  );
}

export default Portfolio;