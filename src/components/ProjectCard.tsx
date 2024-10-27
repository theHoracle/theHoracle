import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative group grid grid-cols-8 grid-row-1  gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-6 lg:block lg:group-hover:bg-red-800/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="relative aspect-video col-span-8 md:col-span-3 lg:col-span-8 rounded-lg overflow-hidden shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
        <Image
          src={project.imageUrl}
          alt="thelatunji"
          fill
          className="object-cover object-center group-hover/link:filter"
        />
      </div>
      <div className="z-10 space-y-4 col-start-1 col-span-8  md:col-start-4 md:col-span-5 lg:col-start-1 lg:col-span-8">
        <Link
          href={project.homepage ?? "/"}
          target="_blank"
          className="inline-flex items-baseline font-medium leading-tight text-stone-700 dark:text-stone-200 hover:text-red-500 dark:hover:text-red-300 focus-visible:text-red-500  group/link text-base"
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
          <span className="text-xl font-medium tracking-tight leading-3">
            {project.title}
          </span>
          <span>
            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
          </span>
        </Link>
        <p className="mt-2 text-sm leading-normal text-foreground">
          {project.description}
        </p>
        <ul className="flex-wrap flex " aria-label="Technologies used">
          {project.skills.map((skill, index) => (
            <li key={index}
            className="mr-1.5 mt-2"
            >
              <div className="flex items-center rounded-full bg-red-400/20 dark:bg-red-400/10 px-3 py-1 text-xs font-medium leading-5 text-red-500 dark:text-red-300">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
