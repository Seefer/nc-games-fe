import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="react-link-name">Home</div>
      </Link>
      <Link to="/reviews">
        <div className="react-link-name">Reviews</div>
      </Link>
    </nav>
  );
}

export default NavBar;
