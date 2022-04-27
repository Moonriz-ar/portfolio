import React from "react";
import Title from "../Title";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-mobile-contact-background sm:bg-desktop-contact-background bg-cover min-h-screen"
    >
      <div className="min-h-screen bg-gradient-to-b from-white flex flex-col justify-start items-center px-5">
        <div className="w-full sm:max-w-3xl px-5 sm:px-16 pt-10 pb-14 rounded-b-3xl flex flex-col items-center bg-slate-50">
          <Title title="Contact." />

          {/* Contact me card */}
          <section className="text-slate-200 space-y-5 sm:w-1/2 flex flex-col">
            <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-5 drop-shadow">
              <div>
                <h4 className="font-square text-5xl am:text-4xl font-bold pb-1">
                  Andrea Lin
                </h4>
                <p className="text-slate-300">Jr. Front End Developer</p>
                <p className="text-slate-300">
                  Javascript | React | Tailwind | Redux
                </p>
              </div>

              <section className="mt-7">
                <ul className="flex flex-col space-y-2">
                  <li>
                    <a
                      className="flex items-center space-x-2 hover:text-slate-50 max-w-max"
                      href="https://github.com/Moonriz-ar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsGithub /> <p>Github</p>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center space-x-2 hover:text-slate-50 max-w-max"
                      href="https://www.linkedin.com/in/andrealinar/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin /> <p>Linkedin</p>
                    </a>
                  </li>
                </ul>
              </section>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
