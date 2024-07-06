import ProjectsDescription from "@/components/projects.components";
import assistence from "@/assets/projectsImage/assistence_system.webp";
import ecommerce from "@/assets/projectsImage/e-commerce.webp";
import landing from "@/assets/projectsImage/landing_page.webp";
import { DiHtml5 } from "react-icons/di";

export default function Projects() {
  return (
    <section className="py-10 ">
      <div className="text-center mb-10 space-y-3">
        <h2 className="subtitle">My Latest Work</h2>
        <p className="subdescription">
          Check out some of my recent projects that showcase my skills and
          creativity.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5">
        <ProjectsDescription
          photo={ecommerce}
          title={"Norkys"}
          desc={
            "An e-Commerce Restuarant web to buy food and choose place to deliverd"
          }
        />
        <ProjectsDescription
          photo={assistence}
          title={"Assisdatep"}
          desc={"A system web to manage employees assistence"}
        />
        <ProjectsDescription
          photo={landing}
          title={"DevDatep"}
          desc={"Informative page to show customers it adventage"}
        />
      </div>
    </section>
  );
}
