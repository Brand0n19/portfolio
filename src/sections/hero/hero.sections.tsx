import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center p-3 max-w-7xl w-full text-center space-y-5 h-[45rem]">
      <p className="font-bold text-sm md:text-lg">
        Hii!! I&apos;m glad you&apos;re here, my name is
      </p>
      <h1 className="text-5xl md:text-8xl font-extrabold text-transparent stroke">
        Brandon Farfan
      </h1>
      <p className="mt-4 font-semibold text-sm md:text-lg">
        A Front end Developer based in Peru
      </p>
      <div className="text-2xl space-x-3 flex justify-center">
        <a href="https://github.com/Brand0n19" target="_blank" rel="noreferrer noopener">
          <IoLogoGithub className="hover:shadow-lg hover:shadow-slate-300 overflow-hidden rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/brandon36911/" target="_blank" rel="noreferrer noopener">
          <IoLogoLinkedin className="hover:shadow-lg hover:shadow-slate-300" />
        </a>
      </div>
    </div>
  );
}
