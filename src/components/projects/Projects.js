import React from "react";
import Title from "../Title";

import { projects } from "./projects-data.js";

function Projects() {
  console.log(projects);
  return (
    <section
      id="projects"
      className="bg-flower-background min-h-screen bg-cover"
    >
      <div className="px-5">
        <div className="w-full sm:max-w-3xl px-5 sm:px-16 py-10  bg-slate-50 space-y-3">
          <Title title="Projects." />
        </div>
      </div>
    </section>
  );
}

export default Projects;
