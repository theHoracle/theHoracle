import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import SpecialNav from "./SpecialNav";

function Header() {
  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jamesmorgan-thehoracle",
    },
    {
      name: "GitHub",
      link: "https://www.github.com/theHoracle",
    },
    {
      name: "X",
      link: "https://www.x.com/theHoracle",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/the.horacle",
    },
   {
      name: "Upwork",
      link: "https://www.upwork.com/freelancers/~012b399dc9a7e9e821",
   }
  ];
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-stone-700 dark:text-stone-200 sm:text-5xl">
          <Link href="/">James Morgan</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-200 sm:text-xl">
          Full-Stack Developer
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Innovating with the next gen technologies.
        </p>
        <SpecialNav />
      </div>
      <ul className="mt-8 -ml-4 -mb-1 flex items-center">
        {socialLinks.map((link) => (
          <li key={link.name} className="">
            <p className="sr-only">{link.name}</p>
            <SocialIcon
              url={link.link}
              target="_blank"
              fgColor="gray"
              className="fill-stone-600 hover:fill-stone-200 size-8"
              bgColor="transparent"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
