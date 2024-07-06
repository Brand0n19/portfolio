import Image from "next/image";
import perfil from "@/assets/perfil.svg";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function About() {
  return (
    <section className="space-y-8 py-10 ">
      <h2 className="text-center text-4xl font-bold tracking-wide">About Me</h2>
      <div className="flex justify-evenly items-center gap-3">
        <div>
          <Image
            src={perfil}
            width={100}
            height={100}
            alt="Profile image"
            className="w-10/12"
          />
        </div>
        <div className="w-4/12 space-y-5">
          <h3 className="text-2xl font-bold">Hi!!&#128075; I&apos;m Brandon</h3>
          <p className="font-normal text-lg text-gray-400 tracking-wider">
            With more than 1 year of experience in developing friendly web
            interfaces using React and agile methodologies such as Scrum.
            Highlighted for my ability to work in collaborative teams, quickly
            adapt to new technologies and solve complex problems. 
          </p>
          <div className="flex gap-3">
            <button>
              <IoLogoGithub className="text-3xl" />
            </button>
            <button>
              <IoLogoLinkedin className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
