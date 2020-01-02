import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Fragment>
      <Link to="/" className="brand-logo">
        <span className="black-text text-darken-2">AS Engineers</span>
      </Link>
    </Fragment>
  );
};

export default Logo;
