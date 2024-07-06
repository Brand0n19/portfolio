"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewritter-effects";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function Hero() {

  const titleWords=[
    {
      text: 'Brandon',
      className: "text-5xl md:text-8xl font-extrabold text-transparent",
    },
    {
      text: 'Farfan',
      className: "text-5xl md:text-8xl font-extrabold text-transparent",

    },
  ]

  return (
    <div className="flex flex-col justify-center p-3 w-full text-center space-y-5 h-svh">
      <p className="font-bold text-sm md:text-lg">
        Hii!! I&apos;m glad you&apos;re here, my name is
      </p>
      <h1 className="">
        <TypewriterEffect words={titleWords} />
      </h1>
      <p className="mt-4 font-semibold text-sm md:text-lg">
        A Front end Developer based in Peru
      </p>
      <div className="text-2xl space-x-3 flex justify-center z-10">
        <a href="https://github.com/Brand0n19" target="_blank" rel="noreferrer noopener">
          <IoLogoGithub className="shadow-border" />
        </a>
        <a href="https://www.linkedin.com/in/brandon36911/" target="_blank" rel="noreferrer noopener">
          <IoLogoLinkedin className="shadow-border" />
        </a>
      </div>
      <BackgroundBeams/>
    </div>
  );
}
