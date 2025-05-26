"use client";
import { useMemo, useState } from "react";
import { Category } from "../../../payload-types";

import { Project } from "@/payload-types";

const PortfolioPage = ({ categories, projects }: {categories: Category[], projects: Project[]}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => activeCategory === "all"
    ? projects
    : projects.filter(project => project.category && typeof project.category !== "number" && project.category.slug === activeCategory), [activeCategory, projects]);
  const projectsToDisplay = filteredProjects.length > 0 ? filteredProjects : projects;

    return <>
         <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.slug)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.slug
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
         <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {projectsToDisplay?.length === 0 ? (
              <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">No projects found.</div>
            ) : (
              projects.map((item, index) => (
                <div key={index} className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-orange-500">
                  {/* Project Image */}
                  <div className="absolute inset-0 w-full h-full">
                    {item.featuredImage && typeof item.featuredImage !== "number" && item.featuredImage.url && <img
                      src={item.featuredImage?.url}
                      alt={item.title || ""}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />}
                  </div>
                  {/* Overlay with Project Name on Hover */}
                  <div className="absolute top-0 left-0 w-full px-4 py-3 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 z-10 flex items-start">
                    <h2 className="text-lg font-bold text-white drop-shadow-lg">{item.title}</h2>
                  </div>
                  {/* Optionally, show category at the bottom right */}
                  <div className="absolute bottom-3 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg opacity-90 pointer-events-none">
                    {item.category && typeof item.category !== "number" && item.category.name}
                  </div>
                </div>
              ))
            )}
          </div>

         </div>
    </>
}

export default PortfolioPage;