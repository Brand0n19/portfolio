import Image from "next/image";
import perfil from "@/assets/perfil.jpeg";

export default function About() {
  return (
    <section className="space-y-8 py-10 ">
      <h2 className="text-center subtitle">About Me</h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-3">
        <div className="rounded-full overflow-hidden">
          <Image
            src={perfil}
            width={200}
            height={100}
            alt="Profile image"
            className="w-full hidden md:inline-block"
          />
        </div>
        <div className="w-full md:w-4/12 space-y-5">
          <h3 className="text-2xl font-bold">Hi!!&#128075; I&apos;m Brandon</h3>
          <p className="font-normal text-[15px] md:text-lg text-gray-400 tracking-wider">
            With more than 1 year of experience in developing friendly web
            interfaces using React and agile methodologies such as Scrum.
            Highlighted for my ability to work in collaborative teams, quickly
            adapt to new technologies and solve complex problems. 
          </p>
        </div>
      </div>
    </section>
  );
}
