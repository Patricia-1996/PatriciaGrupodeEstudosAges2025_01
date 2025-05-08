import React from "react";

interface ProjectData {
  title: string;
  description: string;
  link: string;
}

const projectList: ProjectData[] = [
  {
    title: "Calculator",
    description: "Created with HTML, CSS and JavaScript",
    link: "https://github.com/Patricia-1996/PatriciaGrupodeEstudosAges2025_01/tree/main/Sprint1", // Substitua pelo URL real
  },
  {
    title: "Coinvert",
    description: "A coin converter created with HTML, CSS, JavaScript and API",
    link: "https://github.com/nicolaszk/AGES_sprint2", // Substitua pelo URL real
  },
];

const Project: React.FC = () => {
  return (
    <section className="bg-pink-500 text-center py-96">
      <h2 className="text-3xl font-pixel mb-8 text-white">
        Front End Projects
      </h2>
      <div className="space-y-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-pink-400 p-6 rounded-md shadow-md border border-white w-[300px] mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
