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
      <div className="text-center mb-10">
      <h2 className="text-4xl font-bold tracking-wide">My Skills</h2>
        <p className="text-sm text-gray-400">
          Here are some of the technologies I&apos;m proficient in:
        </p>
      </div>
      <div className="flex gap-5 flex-wrap text-7xl justify-evenly px-10">
        <FaReact className=""/>
        <RiNextjsFill className="" />
        <FaHtml5 />
        <FaCss3Alt className="" />
        <IoLogoJavascript  className=""/>
        <SiReactquery className="" />
        <RiTailwindCssFill  className=""/>
        <FaGitAlt  className=""/>
        <GrMysql  className=""/>
        <FaNodeJs  className=""/>
        <FaFigma  className=""/>
      </div>
    </section>
  );
}
