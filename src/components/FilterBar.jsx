import React from "react";
import { Link } from "react-router-dom";

function FilterBar() {
  return (
    <nav className="p-1 mb-0 bg-slate-600">
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/">
            Sort By:
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/reviews">
            Order:
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-white hover:text-gray-400" to="/reviews">
            Category
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilterBar;
