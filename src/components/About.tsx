import React from "react";

function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About Me
        </h2>
      </div>
      <div className="space-y-4">
        <p>
          {
            "With over three years of experience creating dynamic, scalable web platforms. My journey in tech has led me to work on a variety of projects, from fintech apps like WakandaPay to complex management systems for organizations like churches. I'm highly skilled in using frontend technologies such as React and TypeScript, while also being proficient in backend development with Node.js and cloud solutions like AWS and Cloudflare D1."
          }
        </p>
        <p>
          {
            "Beyond my professional projects, I've taken on challenging bug bounties, recently contributing to an open-source Go project where I helped resolve critical issues in workspace creation. I love working with cloud services, and I'm constantly pushing myself to learn and adapt to new technologies, whether it's optimizing APIs, handling user authentication flows in mobile apps, or diving into the nuances of AWS."
          }
        </p>
        <p>
         {
          "Outside of coding, I'm an avid problem-solver with a passion for technology. When I'm not developing, you can often find me exploring the latest tech trends, working on personal projects, or enjoying downtime with music, gaming, or a good book. Feel free to browse through my work and reach out—I'm always open to new collaborations and opportunities!"
         }
        </p>
      </div>
    </section>
  );
}

export default About;
