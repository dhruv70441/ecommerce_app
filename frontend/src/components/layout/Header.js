import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold italic">
        TechBuy🛒
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden flex flex-col justify-between h-6 w-6 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="block h-1 bg-white rounded-sm"></span>
          <span className="block h-1 bg-white rounded-sm"></span>
          <span className="block h-1 bg-white rounded-sm"></span>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-500 md:static md:block md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 text-center md:text-left">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold block px-4 py-2"
                    : "text-white hover:text-yellow-300 block px-4 py-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold block px-4 py-2"
                    : "text-white hover:text-yellow-300 block px-4 py-2"
                }
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold block px-4 py-2"
                    : "text-white hover:text-yellow-300 block px-4 py-2"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold block px-4 py-2"
                    : "text-white hover:text-yellow-300 block px-4 py-2"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-semibold block px-4 py-2"
                    : "text-white hover:text-yellow-300 block px-4 py-2"
                }
              >
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
