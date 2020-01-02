import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="no-shadows">
        <div
          className="nav-wrapper color darken-3"
          data-test="component-navbar"
        >
          <Logo />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavBarItem />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
