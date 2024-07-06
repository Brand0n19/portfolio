import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiReactquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa6";
export default function Skill() {
  return (
    <section className="py-10">
      <div className="text-center mb-10 space-y-3">
      <h2 className="subtitle">My Skills</h2>
        <p className="subdescription">
          Here are some of the technologies I&apos;m proficient in:
        </p>
      </div>
      <div className="flex gap-5 flex-wrap text-5xl md:text-7xl justify-evenly px-10">
        <FaReact/>
        <RiNextjsFill />
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <SiReactquery />
        <RiTailwindCssFill />
        <FaGitAlt />
        <GrMysql />
        <FaNodeJs />
        <FaFigma />
      </div>
    </section>
  );
}
