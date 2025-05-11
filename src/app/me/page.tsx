import About from "@/components/me/About";
import Contact from "@/components/me/Contact";
import Header from "@/components/me/Header";
import MouseGradient from "@/components/MouseGradient";
import Projects from "@/components/me/Projects";
import { getProjectDetails } from "@/lib/utils/project-details";
import { Metadata } from "next";
import { Suspense } from "react";
// import { fetchGithubRepos } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio Overview",
}

export default async function Me() {
  // const repos = await fetchGithubRepos('theHoracle')
  // console.log(repos)
  const projects = await getProjectDetails()
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <MouseGradient />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main
          id="content"
          className="pt-24 lg:w-1/2 lg:py-24 min-h-screen space-y-32"
        >
          <About />
          <Projects projects={projects} />
          <Contact />
        </main>
        
      </div>
    </div>
  );
}
