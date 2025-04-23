import React from "react";

function ProjectCard({ title, description, tech, link , gitHub }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700">
      <h3 className="text-xl font-semibold text-[#3A86FF] dark:text-[#A0C4FF] mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tech: {tech.join(", ")}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#3A86FF] hover:underline">
        View Project
      </a> <br />
      <a href={gitHub} target="_blank" rel="noopener noreferrer" className="text-[#3A86FF] hover:underline">
        View Code
      </a>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Tattoo Booking App",
      description: "Full stack app with artist login, portfolio management, and booking system.",
      tech: ["React", "Express", "MongoDB", "Tailwind"],
      link: "#",
      gitHub: ""
    },
    {
      title: "",
      description: "",
      tech: ["React", "CSS Modules"],
      link: "#",
      gitHub: ""
    },
    {
      title: "",
      description: "",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      gitHub: ""
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-2xl font-semibold text-[#3A86FF] dark:text-[#A0C4FF] mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;