 
import { getScreenshots } from "@/app/(projects)/action";
import { Project } from "@/types";

const projects: Project[] = [
    {
      title: "Morgan and Sons Store",
      description: "An E-commerce app built with Nextjs and PayloadCMS on Vercel, with instant cart updates and management with secure payments.",
      homepage: "https://morgan-and-sons-shop.vercel.app",
      language: "typescript",
      skills: ["Nextjs", "PayloadCMS", "PostgreSQL", "Tanstack Query", "AWS S3", "Tailwind CSS"],
    },
    {
      title: "Donner Foundation Website",
      description: "Charity organiation website with admin panel, to manage events, donations and blog content easily. Includes a payment provider (Paystack) to recieve donations.",
      homepage: "https://donner-payload3b.vercel.app",
      language: "typescript",
      skills: ["PayloadCMS", "Nextjs", "Swiperjs", "MongoDB", "Firebase", "Tailwind CSS"],
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
      skills: ["Nextjs", "PayloadCMS", "Axios", "Tailwind CSS", "Docker", "AWS"],
    },
  ];

export async function getProjectDetails() {
    const projectWithtImage = projects.map(async (project ) => {
        const {homepage} = project;
        const imageUrl = homepage ? await getScreenshots({
            url: homepage
          }) : null
        if(imageUrl && typeof imageUrl === "string") {
            return {...project, imageUrl}
        }
        return project
    })
    return Promise.all(projectWithtImage)
}