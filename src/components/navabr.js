import React from "react";

import zmagis from "../Images/zmagisRounded.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5 fixed-top">
      <a className="nav-link" href="#greeting">
        <img
          className="navbar-brand logo zmagis"
          src={zmagis}
          alt="logo Zmagis"
        />
      </a>
      <ul className="navbar-nav ">
        <li className="nav-item ml-5">
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>

        <li className="nav-item ml-5">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
        {/* <Link to="./contact">
          <li className="nav-link">Contact</li>
        </Link> */}
      </ul>
    </nav>
  );
}

export default Nav;
