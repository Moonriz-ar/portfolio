import React from "react";

function About() {
  return (
    <section
      id="user"
      className="w-full sm:max-w-3xl px-5 sm:px-16 pb-12 rounded-b-3xl flex flex-col bg-slate-50 mx-auto space-y-2"
    >
      <h3 className="text-xl font-bold pb-3">A little about me...</h3>
      <p>
        I am a Junior Front End developer located in{" "}
        <b>Buenos Aires, Argentina</b>.
      </p>
      <p>
        During 7 years I have been working as sales professional in IT industry,
        where I learnt a lot about teamwork and working on objectives.
      </p>
      <p>
        Since December 2021, I have been following a roadmap and learnt
        consistently about front end web development, and when the site comes
        together it is the best feeling!
      </p>
    </section>
  );
}

export default About;
