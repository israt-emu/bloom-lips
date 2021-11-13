import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-md bg-white sticky top-0 z-40">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink
              to="/home"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img src={logo} alt="" className="w-12" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Bloom Lips.
              </span>
            </NavLink>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/home"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Explore
                </NavLink>
              </li>
              {user?.email && (
                <li>
                  <NavLink
                    to="/dashboard"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user?.email && (
              <h1 className="font-semibold">{user.displayName}</h1>
            )}
            {user?.email ? (
              <li>
                <button
                  className="inline-flex items-center justify-center px-3 py-2 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-600 focus:shadow-outline focus:outline-none"
                  aria-label="logout"
                  title="Logout"
                  onClick={logOut}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-semibold tracking-wide text-white transition-colors duration-200 bg-pink-600 px-3 py-2 rounded"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={`p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline border border-pink-600 ${
                isMenuOpen ? "hidden" : "block"
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-pink-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/home"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo} alt="" className="w-12" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Bloom Lips
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded border border-pink-600 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-pink-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* mobile menu  */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/explore"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Explore
                        </NavLink>
                      </li>
                      {user?.email && (
                        <li>
                          <NavLink
                            to="/dashboard"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                      )}
                      {user?.email && (
                        <h1 className="font-semibold">{user.displayName}</h1>
                      )}
                      {user?.email ? (
                        <li>
                          <button
                            className="inline-flex items-center justify-center px-3 py-2 font-semibold text-white bg-pink-600  rounded shadow-md"
                            aria-label="Sign up"
                            title="Sign up"
                            onClick={logOut}
                          >
                            Logout
                          </button>
                        </li>
                      ) : (
                        <li>
                          <NavLink
                            to="/login"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-semibold tracking-wide text-white transition-colors duration-200 bg-pink-600 px-3 py-2 rounded"
                          >
                            Login
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
