import React, { useState } from 'react';
import { logo } from '../assets';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav
      className={` h-auto w-full justify-between px-4 flex bg-black opacity-80 backdrop-blur fixed z-20 ${
        darkMode && 'dark'
      }`}
    >
      <figure>
        <img src={logo} alt="brand" />
      </figure>

      <div className="flex items-center gap-6">
        <a href="/" className="text-white web-sub1">
          Tournaments
        </a>
        <a href="/" className="text-white web-sub1">
          Betting
        </a>
        <a href="/" className="text-white web-sub1">
          Head-to-head
        </a>
      </div>

      <div className="flex items-center gap-6 justify-center">
        <label className="relative">
          <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>

        <button className="bg-white text-grey-800 py-[8px] px-[30px] web-p4 rounded-[40px] border">
          Go to Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
