import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-3" data-test="component-navbar">
      <a href="#" className="brand-logo">
        AS Engineers
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Architectural</a>
        </li>
        <li>
          <a href="badges.html">Structural</a>
        </li>
        <li>
          <a href="collapsible.html">Other</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
