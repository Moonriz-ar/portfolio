import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { BsFillBookFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiSuitcase } from 'react-icons/gi';

const Nav = () => {
  return (
    <nav className="flex bg-slate-900/60 max-w-fit p-2 z-10 fixed text-slate-200 bottom-3 sm:bottom-10 left-1/2 -translate-x-1/2 rounded-lg backdrop-blur-sm space-x-4">
      <a href="#hero" className="flex flex-col items-center hover:text-white">
        <AiFillHome />
        <p>Home</p>
      </a>
      <a href="#about" className="flex flex-col items-center hover:text-white">
        <FaUser />
        <p>About</p>
      </a>
      <a
        href="#experience"
        className="flex flex-col items-center hover:text-white"
      >
        <GiSuitcase />
        <p>Work</p>
      </a>
      <a href="#skills" className="flex flex-col items-center hover:text-white">
        <BsFillBookFill />
        <p>Skills</p>
      </a>
      <a
        href="#projects"
        className="flex flex-col items-center hover:text-white"
      >
        <FaLaptopCode />
        <p>Projects</p>
      </a>
      <a
        href="#contact"
        className="flex flex-col items-center hover:text-white"
      >
        <MdEmail />
        <p>Contact</p>
      </a>
    </nav>
  );
};

export default Nav;
