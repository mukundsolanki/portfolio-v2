import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link className='navbar__logo' to="/">{"<MS />"}</Link>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="navbar__link">
          <Link to="/skills">Skills</Link>
        </li> */}
        <li className="navbar__link">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
