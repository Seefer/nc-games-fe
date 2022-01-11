import React from "react";

function Header() {
  return (
    <div className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
      <h1 className="text-xl font-bold text-gray-300 justify-start ">
        Darren's Games API World
      </h1>
      <span className="text-xl font-bold text-gray-300 justify-start ">
        Log in | Sign Up
      </span>
    </div>
  );
}

export default Header;
