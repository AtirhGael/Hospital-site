import React from "react";
import {  NavLink  } from "react-router-dom";

export default function Header({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              St Alexandro Clinic
            </NavLink>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/' className="fab fa-twitter text-lg leading-lg text-black opacity-75">
                    <span className="ml-2">Home</span>
                    </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/service' className="fab fa-twitter text-lg leading-lg text-black opacity-75">
                    <span className="ml-2">Services</span>
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <NavLink to='/about'  className={({ isActive, isPending }) =>
                                          isPending ? "pending" : isActive ? "active" : ""
                                        } >
                    <span className=" fab fa-twitter text-lg leading-lg text-black opacity-75 ml-2">About</span>
                  </NavLink >
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>

              <button className="border-2 border-blue-600 hover:bg-blue-700 cursor-pointer p-1 rounded-lg ">
                <div className=" fab fa-pinterest text-blue-700  hover:text-white" > Emergency Call </div>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}