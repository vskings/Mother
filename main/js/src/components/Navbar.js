import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import DarkModeToggle from './DarkmodeToggle';

const Navbar = () => {
  return (
    <nav
      className="h-[80px] w-full justify-between px-4 flex -mt-20 bg-black opacity-80 backdrop-blur fixed z-20      
    "
    >
      <figure className="flex items-center">
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
        <DarkModeToggle />

        <button className="bg-white text-grey-800 py-[8px] px-[30px] web-p4 rounded-[40px] border">
          Go to Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
