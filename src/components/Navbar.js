"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // ajout

  return (
    <div className="bg-letter-orange">
      <div className="relative px-2  flex justify-between items-center border-b border-border-black-button">
        <a className=" font-bold leading-none" href="#">
          <span className="text-letter-orange">logo</span>
          {/* <svg className="h-10 " alt="logo" viewBox="0 0 10240 10240">
          
          </svg> */}
        </a>
        <div className="lg:hidden">
          <button
            className=" navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current text-letter-orange"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 5H2a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2zM2 11a1 1 0 0 1 0-2h20a1 1 0 0 1 0 2H2zm20 4a1 1 0 0 1 0-2H2a1 1 0 0 1 0 2h20z"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:w-auto lg:space-x-6 ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <div className="flex me-40 ">
            <li>
              <a className=" mr-2  text-letter-orange " href="#">
                Trouver
              </a>
            </li>
            <li>
              <a className="text-sm text-letter-grey" href="#">
                le meilleur prestataire
              </a>
            </li>
          </div>
          {/* ... Autres éléments du menu */}
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg: py-2 px-1 hover:bg-letter-grey text-sm text-letter-orange  rounded-xl transition duration-200"
          href="#"
        >
          Employeur
        </a>
        <a
          className="hidden lg:inline-block py-2 px-2 hover:bg-letter-grey text-sm text-letter-orange  rounded-xl transition duration-200"
          href="#"
        >
          Prestataire
        </a>
        <a
          className="hidden lg:inline-block py-2 pr-4 hover:bg-letter-grey text-sm text-letter-orange  rounded-xl transition duration-200"
          href="#"
        >
          Comment ça marche ?
        </a>
      </div>
      <div className={`navbar-menu relative z-50 ${menuOpen ? "" : "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-letter-orange opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                {/* ... Logo SVG */}
              </svg>
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1 rounded-2xl">
                <a
                  className=" block p-4 text-sm font-semibold text-letter-grey hover:bg-blue-50 hover:text-letter-orange rounded-2xl"
                  href="#"
                >
                  Entreprise
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-letter-grey hover:bg-blue-50  hover:text-letter-orange rounded"
                  href="#"
                >
                  Prestataire
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-letter-grey hover:bg-blue-50 hover:text-letter-orange rounded"
                  href="#"
                >
                  Comment ça marche?
                </a>
              </li>
              {/* ... Autres éléments du menu */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
