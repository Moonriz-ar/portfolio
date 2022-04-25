import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-about-background bg-cover min-h-screen bg-fixed"
    >
      <div className="min-h-screen bg-gradient-to-t from-white flex flex-col justify-end items-center">
        <div className="w-full sm:max-w-3xl px-5 pt-24 pb-32 rounded-t-3xl flex flex-col items-center bg-slate-50 relative">
          <img
            src="/img/profile.jpg"
            alt="profile"
            className="rounded-full h-40 w-40 mb-8 border-slate-600 border-2 absolute -top-20"
          />

          <h1 className="font-square text-5xl font-bold  text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-gray-500  to-gray-900">
            Andrea Lin
          </h1>
          <h3 className="uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500  to-gray-900 mb-5">
            Jr. Front End Developer
          </h3>

          <p className="flex items-center">
            Scroll down{" "}
            <span className="animate-bounce ml-3">
              <AiOutlineArrowDown />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
