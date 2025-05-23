import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { title } from "process";

function Projects(props: {
  projects: Project[]
}) {
  const { projects } = props
  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-red-800/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
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
