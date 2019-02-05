import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper #37474f blue-grey darken-3">
      <div className="container">
				<Link to='/' className="brand-logo">EduMap</Link>
			</div>
    </nav>
  );
};

export default Navbar;