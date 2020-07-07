import React from "react";

import zmagis from "../Images/zmagisRounded.png";

function Nav() {
  return (
    <nav>
      <a className="" href="#greeting">
        <img className="brand" src={zmagis} alt="logo Zmagis" />
      </a>
      <ul className="">
        <li className="">
          <a className="nav-item" href="#projects">
            Projects
          </a>
        </li>

        <li className="">
          <a className="nav-item" href="#about">
            About
          </a>
        </li>
        <li className="">
          <a className="nav-item" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
