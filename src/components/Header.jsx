import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
      <h1 className="justify-start text-xl font-bold text-gray-300 ">
        Darren's Games API World
      </h1>
      <span>
        <Link
          className="justify-end text-xl font-bold text-gray-300 hover:text-gray-400"
          to="#"
        >
          Log In
        </Link>
      </span>
    </div>
  );
};

export default Header;
