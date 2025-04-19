import React from "react";

function NavBar() {
    const linkednLink = "https://www.linkedin.com/in/angelstgo95";
    const gitHubLink = "https://github.com/AngelStgo"

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-slate-900">
          <h1 className="text-xl font-bold text-[#3A86FF] dark:text-[#A0C4FF]">Angel Santiago</h1>
          <ul className="flex gap-6 text-[#1E293B] dark:text-white font-medium">
            <li><a href="#projects" className="hover:text-[#3A86FF]">Projects</a></li>
            <li><a href="#about" className="hover:text-[#3A86FF]">About</a></li>
            {/* <li><a href="#contact" className="hover:text-[#3A86FF]">Contact</a></li> */}
            <li><a href={linkednLink} className="hover:text-[#3A86FF]">Linkedn</a></li>
            <li><a href={gitHubLink} className="hover:text-[#3A86FF]">GitHub</a></li>
          </ul>
        </nav>
      );
    }

  export default NavBar;