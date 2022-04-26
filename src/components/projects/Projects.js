import React from "react";
import Title from "../Title";
import ProjectCard from "./ProjectCard.js";

import { projects } from "./projects-data.js";

function Projects() {
  console.log(projects);
  return (
    <section
      id="projects"
      className="bg-flower-background min-h-screen bg-cover "
    >
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-white px-5">
        <div className="w-full sm:max-w-3xl px-5 sm:px-16 py-10  bg-slate-50 space-y-3 mx-auto">
          <Title title="Projects." />

          <section className="text-slate-50 space-y-5">
            {projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Projects;
