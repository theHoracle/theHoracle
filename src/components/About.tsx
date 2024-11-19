import React from "react";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-red-800/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About Me
        </h2>
      </div>
      <div className="space-y-4">
        <p>
          {
            "Hi, I'm a Full Stack Engineer with over three years of experience building responsive, dynamic applications that combine robust functionality with great user experience. I've worked on projects like WakandaPay, a fintech platform, and a dynamic church website, and along the way, I've developed expertise with technologies like React, TypeScript, Python, and Node.js. I love tackling both frontend and backend challenges, and lately, I've been diving into mobile development with a React Native fintech app, sharpening my skills in areas like authentication and security using Expo."
          }
        </p>
        <p>
          {
            "My toolkit includes essentials like Vite, Next.js, Nuxt, PayloadCMS, Nestjs, Zustand, and testing frameworks like Mocha and Jest. Plus, I'm experienced with Cloudflare D1 and AWS services for backend and cloud solutions. Recently, I've been involved in a project created with Go. Even though Go is new to me, this work has pushed my adaptability and problem-solving skills across new languages and platforms."
          }
        </p>
        <p>
         {
          "I'm always looking for opportunities—whether full-time or freelance—to collaborate with teams who value innovation and quality, creating scalable, user-centric solutions that make an impact."
         }
        </p>
      </div>
    </section>
  );
}

export default About;
