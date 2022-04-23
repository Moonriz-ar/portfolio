import React from "react";

function About() {
  return (
    <section id="user" className="min-h-screen">
      <ul>
        <li>Located in Buenos Aires, Argentina</li>
        <li>
          Currently scholarship student in{" "}
          <span className="font-bold ">
            Digital House "Certified Tech Developer"
          </span>{" "}
          (3 years program)
        </li>
        <li>
          Currently doing the Front End React Skill Up Acceleration program in{" "}
          <span className="font-bold">Alkemy</span> (6 weeks program)
        </li>
        <li>
          Graduated with Finance and International Business degree in Taiwan
        </li>
        <li>7 years working experience as sales in IT industry</li>
      </ul>
      <button>Check out what I learnt {` >`}</button>
    </section>
  );
}

export default About;
