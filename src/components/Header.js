import React from "react";

import { FaAlignLeft } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full py-8 px-8">
      <h1 className="text-primary text-5xl mb-2">Family Wellness</h1>
      <p className="text-gray-600 mb-8">MASSAGE THERAPY</p>
      <ul className="grid grid-cols-5 text-center md:grid hidden">
        <li className=" w-full py-4 font-semibold transition duration-200 ease-in-out cursor-pointer hover:bg-primary  bg-primary">
          <a href="#" className="text-white">
            HOME
          </a>
        </li>
        <li className="bg-gray-300 w-full py-4 font-semibold transition duration-200 ease-in-out cursor-pointer hover:bg-primary">
          <a href="#" className="text-white">
            ABOUT
          </a>
        </li>
        <li className="bg-gray-300 w-full py-4 font-semibold transition duration-200 ease-in-out cursor-pointer hover:bg-primary">
          <a href="#" className="text-white">
            SERVICES
          </a>
        </li>
        <li className="bg-gray-300 w-full py-4 font-semibold transition duration-200 ease-in-out cursor-pointer hover:bg-primary">
          <a href="#" className="text-white">
            FAQ
          </a>
        </li>
        <li className="bg-gray-300 w-full py-4 font-semibold transition duration-200 ease-in-out cursor-pointer hover:bg-primary">
          <a href="#" className="text-white">
            CONTACT
          </a>
        </li>
      </ul>
      <FaAlignLeft className="text-primary text-2xl font-semibold cursor-pointer md:hidden block" />
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-slate-400 font-semibold text-sm">
      Copyright 2018, Website.com, All Rights Reserved.
    </footer>
  );
};

export { Header, Footer };
