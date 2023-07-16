import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">~MS</div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#home">Home</a>
        </li>
        <li className="navbar__link">
          <a href="#about">About</a>
        </li>
        <li className="navbar__link">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar__link">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
