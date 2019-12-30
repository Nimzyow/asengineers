import React, { Fragment, useEffect } from "react";
import NavBar from "./components/ui/navbar/NavBar";
import Footer from "./components/ui/footer/Footer";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <NavBar />
      <div className="body">
        <div className="message">
          <h3>AS Engineers website currently under construction</h3>
          <h6>
            If you're planning on improving your home through renovation,
            extensions, loft conversions, or whatever else, please email us at
            info@cengineers.co.uk or call us on 0208 598 1998
          </h6>
        </div>
      </div>
      <div className="main">
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
