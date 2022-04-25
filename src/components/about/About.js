import React from "react";
import Title from "../Title";

function About() {
  return (
    <section id="about" className="px-5 flex justify-center">
      <div className="flex flex-col justify-center space-y-3 px-5 bg-slate-50 w-full sm:max-w-3xl sm:px-16 pb-12">
        <Title title="Who am I ?" />
        <p>
          I'm Andre, a Junior Front End developer located in{" "}
          <b className="text-slate-700">Buenos Aires, Argentina</b>.
        </p>
        <p>
          During 7 years I have worked as sales professional in IT industry,
          where I learnt a lot about{" "}
          <b className="text-slate-700">teamwork and working on objectives</b>.
        </p>
        <p>
          Since December 2020, I have been following a roadmap and learnt
          consistently about front end web development.{" "}
          <b className="text-slate-700">My learning process</b> is to first
          watch a video playlist about the topic, practice with Codecademy or
          FreeCodeCamp and finally put it in practice with a project.
        </p>
        <p>
          What I love most is when the site comes together, it is the best
          feeling!
        </p>
      </div>
    </section>
  );
}

export default About;
