import Link from "next/link";
import React from "react";

import SpecialNav from "./SpecialNav";
import SocialLinks from "./SocialLinks";

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
        <h2 className="mt-3 text-md font-medium tracking-tight text-stone-900 dark:text-stone-200 sm:text-lg">
          Software Developer <span className="text-muted-foreground px-0.5"> | </span> Web Developer
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Make the internet a better place one software at a time.
        </p>
        <SpecialNav />
      </div>
      <ul className="mt-8 -ml-4 -mb-1 flex items-center">
        {socialLinks.map((link) => (
          <li key={link.name} className="">
            <p className="sr-only">{link.name}</p>
            <SocialLinks link={link.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
