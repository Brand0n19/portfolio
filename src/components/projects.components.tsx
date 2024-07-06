"use client";
import Image, { StaticImageData } from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
interface ProjectsDesc {
  photo: StaticImageData;
  title: string;
  desc: string;
}

function ProjectsDescription({ photo, title, desc }: ProjectsDesc) {
  return (
    <motion.div
      className="flex flex-col w-full md:w-4/12 rounded-xl p-5  text-center hover:-translate-y-5"
    >
      <div>
        <Image
          src={photo}
          width={1000}
          height={400}
          alt="Projec's photo"
          className="w-full shadow-border"
        />
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-3xl font-mono tracking-wider">
          {title}
        </p>
        <p className="font-normal text-sm text-gray-400">{desc}</p>
        <div className="flex text-2xl justify-center space-x-4">
          <FaHtml5 className="text-red-400" />
          <FaCss3Alt className="text-blue-600" />
          <FaReact className="text-sky-400" />
          <RiTailwindCssFill className="text-blue-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsDescription;
