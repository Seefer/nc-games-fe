import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-700">
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
      </ul>
    </nav>
  );
}

export default NavBar;
