import React from 'react';
import Title from '../Title';

function About() {
  return (
    <section id="about" className="px-5 flex justify-center">
      <div className="flex flex-col justify-center space-y-3 px-5 bg-slate-50 w-full sm:max-w-3xl sm:px-16 py-10">
        <Title title="Who am I ?" />
        <p>
          I'm Andrea, a junior front end developer located in{' '}
          <b className="text-slate-700">Buenos Aires, Argentina</b>.
        </p>
        <p>
          4 months experience as front end developer in a{' '}
          <b className="text-slate-700">B2C startup from Spain</b>. Track record
          in delivering features and bug fixes with autonomy, while discussing
          with team lead to validate the business needs and architectural
          decisions.
        </p>
        <p>
          Previously I had 7 years work experience as sales account manager in
          the IT industry, where I learnt a lot about{' '}
          <b className="text-slate-700">teamwork and working on objectives</b>.
        </p>
      </div>
    </section>
  );
}

export default About;
