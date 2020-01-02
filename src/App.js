import React, { Fragment, useEffect } from "react";
import NavBar from "./components/ui/navbar/NavBar";
import Footer from "./components/ui/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Home from "./components/pages/home/Home";
import Architectural from "./components/pages/architectural/Architectural";
import Structural from "./components/pages/structural/Structural";
import Contact from "./components/pages/contact/Contact";

const App = () => {
  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/architectural" component={Architectural} />
            <Route exact path="/structural" component={Structural} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <div className="main">
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
