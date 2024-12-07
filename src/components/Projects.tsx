import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { title } from "process";

function Projects() {
  const projects: Project[] = [
    {
      title: "Donner Foundation Website",
      description: "Charity organiation website with admin panel, to manage events, donations and blog content easily. Includes a payment provider (Paystack) to recieve donations.",
      homepage: "https://donner-payload3b.vercel.app",
      language: "typescript",
      skills: ["PayloadCMSv3", "Nextjs", "Swiperjs", "MongoDB", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Latunji Photography Portfolio",
      description: "A photography portfolio site, allowing the photographer to showcase projects, manage images, and update content easily. Includes a pricing section with default rates and flexible contact options for custom quotes.",
      homepage: "https://photography-portfolio-kohl.vercel.app",
      language: "typescript",
      skills: ["Prisma", "Nextjs", "Swiperjs", "PostgerSQL", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Hope Chapel",
      description: "Web app that enables church staff to manage content, send newsletters to subscribers, and oversee team information and media uploads. Focused on easy updates and streamlined communication for the church community.",
      homepage: "https://hope-chapel-raleigh.vercel.app",
      language: "typescript",
      skills: ["Nextjs", "PayloadCMSv2", "Axios", "Tailwind CSS", "Docker", "AWS"],
    },
  ];

  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-red-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="space-y-16">
          {projects.map((project, index) => (
            <li key={index+"."+title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
