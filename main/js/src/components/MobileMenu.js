import React, { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { AuthContext } from '../context/AuthContext';

const MobileMenu = () => {
  const { navbar, setNavbar } = useContext(AuthContext);

  return (
    <div
      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        navbar ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-end">
        <button
          className="flex mt-4 mr-4 float-right"
          onClick={() => setNavbar(false)}
        >
          <GrFormClose
            size={25}
            className="stroke-black dark:stroke-grey-200"
          />
        </button>
      </div>
      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
        <li className="text-gray-600 hover:text-blue-600">
          <a href="javascript:void(0)">Home</a>
        </li>
        <li className="text-gray-600 hover:text-blue-600">
          <a href="javascript:void(0)">Blog</a>
        </li>
        <li className="text-gray-600 hover:text-blue-600">
          <a href="javascript:void(0)">About US</a>
        </li>
        <li className="text-gray-600 hover:text-blue-600">
          <a href="javascript:void(0)">Contact US</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
