import React from "react";
import Title from "../Title";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJest } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="bg-flower-background min-h-screen bg-cover">
      <div className="min-h-screen flex flex-col items-center px-5 bg-gradient-to-b from-white">
        <div className="w-full sm:max-w-3xl px-5 sm:px-16 py-10  bg-slate-50 space-y-3">
          <Title title="Skills." />

          <section className="text-slate-50 space-y-5 sm:max-w-sm flex flex-col mx-auto text-center">
            {/* FOUNDATIONAL SKILLS */}
            <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-4 drop-shadow">
              <h4 className="text-lg pb-5 font-bold underline underline-offset-4">
                Foundational
              </h4>
              <section className="flex items-end space-x-2 justify-center">
                <div className="flex flex-col items-center">
                  <AiFillHtml5 size={75} />
                  <p className="pt-2">HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <DiCss3 size={75} />
                  <p className="pt-2">CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <IoLogoJavascript size={75} />
                  <p className="pt-2">Javascript</p>
                </div>
              </section>
            </article>

            {/* Frameworks */}
            <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-4 drop-shadow">
              <h4 className="text-lg pb-5 font-bold underline underline-offset-4">
                Frameworks
              </h4>
              <section className="flex items-end justify-center space-x-2">
                <div className="flex flex-col items-center">
                  <FaReact size={75} />
                  <p className="pt-2">React</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiRedux size={75} />
                  <p className="pt-2">Redux</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss size={75} />
                  <p className="pt-2">Tailwind</p>
                </div>
              </section>
            </article>

            {/* Testing */}
            <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-4 drop-shadow">
              <h4 className="text-lg pb-5 font-bold underline underline-offset-4">
                Testing
              </h4>
              <section className="flex items-end justify-center space-x-2">
                <div className="flex flex-col items-center">
                  <SiJest size={75} />
                  <p className="pt-2">Jest</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/img/icon-react-testing-library.png"
                    className="w-20 h-20 grayscale brightness-150"
                    alt="react testing library icon"
                  />
                  <p className="pt-2">Testing Library</p>
                </div>
              </section>
            </article>

            {/* Testing */}
            <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-4 drop-shadow">
              <h4 className="text-lg pb-5 font-bold underline underline-offset-4">
                Soft Skills
              </h4>
              <section className="flex justify-start text-left">
                <p>
                  Fluent in{" "}
                  <a
                    href="https://www.efset.org/cert/ccaeDA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b className="text-emerald-400 underline font-bold underline-offset-2">
                      English (C2 Proficient)
                    </b>
                  </a>
                  . Team player. Will keep learning! Currently scholarship
                  student in 
                  <a
                    href="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b className="text-emerald-400 underline font-bold underline-offset-2">
                      Digital House "Certified Tech Developer"
                    </b>
                  </a>
                  , classes every night until December 2023.
                </p>
              </section>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Skills;
