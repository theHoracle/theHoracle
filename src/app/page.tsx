import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MouseGradient from "@/components/MouseGradient";
import Projects from "@/components/Projects";
// import { fetchGithubRepos } from "@/lib/utils";

export default async function Home() {
  // const repos = await fetchGithubRepos('theHoracle')
  // console.log(repos)
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
          <Projects />
          <Contact />
        </main>
        <div></div>
      </div>
    </div>
  );
}
