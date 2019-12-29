import React, { useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });
  return <div className="App">Site under construction</div>;
};

export default App;
