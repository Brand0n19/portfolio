"use client";
import WorkCard from "@/components/workCard.components";

export default function Expirience() {
  return (
    <section className="space-y-10 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-wide">
          Work Expirience
        </h2>
        <p className="text-sm text-gray-400">Brief overview of my profesional expirience</p>
      </div>
      <div className="flex justify-evenly overflow-hidden">
        <WorkCard
          workClass="reactCard"
          title="React Developer Junior"
          company="DevDatep"
          year="January 2024 - June 2024"
          description="Responsible for developing applications by adapting designs from
            Figma, integrating and manipulating endpoints to display, filter,
            edit and update information from the database. I managed project
            corrections, updating and improving the code, implementing tools for
            code quality. I led an attendance system project, using
            methodologies such as Kanban and Scrum to assign and monitor tasks."
        />
        <WorkCard
          workClass="internCard"
          title="Security Intern and FullStack Developer"
          company="OpenSec"
          year="June 2023 - February 2024"
          description="Contributed to the identification and mitigation of vulnerabilities
            in web applications. Developed a functionality that facilitates the
            use of a vulnerability scanning application, designed specifically
            for users without technical knowledge."
        />
      </div>
    </section>
  );
}
