import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

function Projects() {
  const projects: Project[] = [
    {
      title: "Latunji Photography Portfolio",
      description: "",
      imageUrl: "/project-image/thelatunji.png",
      homepage: "https://photography-portfolio-kohl.vercel.app",
      language: "typescript",
      skills: ["Prisma", "Nextjs", "Swiperjs", "PostgerSQL", "Firebase"],
    },
    {
      title: "Hope Chapel",
      description: "",
      imageUrl: "/project-image/hope-chapel.png",
      homepage: "https://hope-chapel-raleigh.vercel.app",
      language: "typescript",
      skills: ["Nextjs", "Payload CMS", "Axios", "Docker", "AWS", "API"],
    },
  ];

  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="space-y-16">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
