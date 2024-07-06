import Hero from "@/sections/hero/hero.sections";
import About from "@/sections/about/about.section";
import Projects from "@/sections/projects/projects.sections";
import Skill from "@/sections/skill/skill.section";
import Expirience from "@/sections/expirience/expirience.sections";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Skill/>
      <Expirience/>
      <About/>
    </main>
  );
}
