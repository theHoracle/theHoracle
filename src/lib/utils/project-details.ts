 
import { getScreenshots } from "@/app/(projects)/action";
import { Project } from "@/types";

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