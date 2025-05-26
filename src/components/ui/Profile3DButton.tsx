import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Profile3DButton() {
  return (
    <Link
      href="/me"
      className="group inline-block focus:outline-none"
      >
      <span
        className="relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-primary/60"
        style={{ perspective: "600px" }}
      >
        {/* Image and Name (default) */}
        <span className="flex items-center gap-3 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90 group-hover:translate-y-2">
          <span className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-md bg-white dark:bg-slate-800">
            <Image
              src="/person-1.svg"
              alt="theHoracle profile"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </span>
          <span className="font-bold text-lg text-slate-800 dark:text-slate-100 drop-shadow-sm tracking-tight">
            theHoracle
          </span>
        </span>
        {/* View Profile (on hover) */}
        <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-semibold text-base text-primary dark:text-primary-300 tracking-wide">
            View Profile
          </span>
        </span>
      </span>
    </Link>
  );
} 