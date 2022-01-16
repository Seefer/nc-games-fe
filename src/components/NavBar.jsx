import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-1 bg-slate-700">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/reviews">
            Reviews
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/reviews">
            Users
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/reviews">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
