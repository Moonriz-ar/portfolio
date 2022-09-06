import React from 'react';
import Title from '../Title';

function Experience() {
  return (
    <section id="experience" className="px-5 flex justify-center">
      <div className="flex flex-col justify-center space-y-3 px-5 bg-slate-50 w-full sm:max-w-3xl sm:px-16 py-10">
        <Title title="Work experience." />
        <article className="bg-gradient-to-r from-slate-900  to-slate-600 rounded-xl p-4 drop-shadow text-slate-200 ">
          <h4 className="text-lg pb-5 font-bold">Overlay On</h4>

          <div className="pb-5">
            <h5 className="font-bold">Front end developer</h5>
            <p>May 2022 - September 2022</p>
            <p>
              Tech stack: React.js | JavaScript | Redux | Material-UI |
              Styled-Components
            </p>
          </div>

          <div className="pb-5">
            <ul>
              <li>✅ Work on core product feature enhancements</li>
              <li>
                ✅ Research and build proof of concepts for new features and API
                integrations
              </li>
              <li>✅ Find and fix bugs</li>
            </ul>
          </div>

          <a href="https://www.overlayon.com" target="_blank" rel="noreferrer">
            <b className="text-emerald-400 hover:text-emerald-300 underline font-bold underline-offset-2">
              overlayon.com/
            </b>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Experience;
