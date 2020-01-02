import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBarItem = () => {
  return (
    <Fragment>
      <li>
        <Link to="/architectural">
          <span className="black-text text-darken-2">Architectural</span>
        </Link>
      </li>
      <li>
        <Link to="/structural">
          <span className="black-text text-darken-2">Structural</span>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <span className="black-text text-darken-2">Contact</span>
        </Link>
      </li>
    </Fragment>
  );
};

export default NavBarItem;
