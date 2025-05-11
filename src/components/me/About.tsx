import React from "react";
import Icon from "../ui/render-icon";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";


function About() {
  const skills = ["nextjs-icon", "react", "tailwindcss-icon", "nuxt-icon",
     "typescript-icon", "go" , "payload" , "nodejs", "nestjs", "expo-icon",
     "aws", "docker-icon","postgresql", "mongodb-icon", "framer", "solidity",
     "figma", "adobe-photoshop",
    ]
  return (
    <section
      id="about"
      className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-red-800/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About Me
        </h2>
      </div>
      <div className="space-y-4">
        <p>
          Software dev focused on building functional, efficient, 
          and scalable web applications. I work across the frontend and backend, 
          using tools cracked modern tools to create solutions that
          address the unique challenges of modern application development.
        </p>
        <p>
          My passion lies in crafting seamless user experiences and meeting real-world needs.
          From user-friendly interfaces to robust server-side systems, 
          I bring a practical, results-driven approach to every project.
        </p>
        <div
        className="pt-8">
          {/* skills */}
          <h3 className="text-sm font-bold uppercase tracking-tightz text-slate-900 dark:text-slate-200 ">
            Skills
          </h3>
          <ul className="grid grid-cols-4 md:grid md:grid-cols-6 lg:grid lg:grid-cols-6 items-center gap-2.5 my-3 w-full ">
            {skills.map((skill, index) => (
              <li 
              key={index}
              className="border border-stone-300 dark:border-stone-900 aspect-square rounded-md py-4 px-5 group flex items-center justify-center"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon
                      icon={`logos:${skill}`} 
                      className="size-10 sm:invert group-hover:invert-0  transition-all"  />
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-stone-950 font-medium">{skill.split('-')[0].toLocaleUpperCase()}</TooltipContent>
                </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
