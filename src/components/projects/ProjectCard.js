import React from "react";
import Reminder from "./Reminder";

function ProjectCard({ project }) {
  const handleMouseEnter = (event) => {
    const imgSrc = event.currentTarget.src;
    const gifSrc = `${imgSrc.slice(0, -4)}.gif`;
    event.currentTarget.src = gifSrc;
  };

  const handleMouseLeave = (event) => {
    const gifSrc = event.currentTarget.src;
    const imgSrc = `${gifSrc.slice(0, -4)}.png`;
    event.currentTarget.src = imgSrc;
  };

  return (
    <article className="flex flex-col items-center sm:flex-row w-full bg-gradient-to-r from-slate-900  to-slate-700 rounded-xl">
      <div className="sm:basis-1/2">
        <img
          src={project.imgPath}
          alt="project"
          className="rounded-t-xl object-cover sm:rounded-l-xl sm:rounded-tr-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="p-4 space-y-5 sm:basis-1/2">
        <div>
          <p className="text-emerald-400 font-bold">{project.date}</p>
          <h4 className="text-xl font-bold">{project.title}</h4>
          <h5 className="text-slate-300">{project.secondaryTitle}</h5>
        </div>

        <div className="flex space-x-2">
          {project.tech.map((tech) => (
            <div className="font-poppins px-2 py-1 bg-emerald-400 text-emerald-900 font-extrabold rounded text-xs sm:text-sm">
              {tech}
            </div>
          ))}
        </div>

        <p className="text-slate-300">{project.description}</p>
        {project.reminder && <Reminder />}

        <div className="space-x-3 py-2 font-poppins">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 border-slate-500 border-2 hover:border-slate-300 rounded uppercase"
          >
            Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 border-slate-500 border-2 hover:border-slate-300 rounded uppercase"
          >
            Repo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
