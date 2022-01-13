import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
      <h1 className="text-xl font-bold text-gray-300 justify-start ">
        Darren's Games API World
      </h1>
      <span>
        <Link
          className="text-xl font-bold text-gray-300 hover:text-gray-400 justify-end"
          to="#"
        >
          Log In
        </Link>
      </span>
    </div>
  );
}

export default Header;
