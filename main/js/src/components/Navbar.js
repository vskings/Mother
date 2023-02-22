import React, { useState, useEffect, useContext } from 'react';
import { logo } from '../assets';
import DarkModeToggle from './DarkmodeToggle';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { setModalIsOpen } = useContext(AuthContext);

  return (
    <nav
      className="h-[80px] w-full  justify-between px-4 flex  bg-black opacity-90 sticky backdrop-blur      
    "
    >
      <figure className="flex items-center">
        <img src={logo} alt="brand" />
      </figure>

      <div className="hidden md:flex items-center gap-6">
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

        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          onClick={() => setModalIsOpen(true)}
          className="bg-white text-grey-800 py-[8px] px-[30px] web-p4 rounded-[40px] border"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
