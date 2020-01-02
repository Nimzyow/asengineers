import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer black darken-3" data-test="component-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">AS Engineers</h5>
            <div>© 2019 Copyright</div>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Address</h5>

            <h6>22 Kingswood road</h6>
            <h6>Ilford, IG3 8UE</h6>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container"></div>
      </div>
    </footer>
  );
};

export default Footer;
