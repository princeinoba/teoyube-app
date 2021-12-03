import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PendingProvider } from "./teoyubenominate/utils/PendingContext";
import Nav from "./teoyubenominate/components/Nav";
import Home from "./teoyubenominate/pages/Home";
import Nominations from "./teoyubenominate/pages/Nominations";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <Router>
      <Nav />
      <PendingProvider>
        <Switch>
          <Route exact path="/pages/Nominate" component={Home} />
          <Route exact path="/forms/Nominations" component={Nominations} />
        </Switch>
      </PendingProvider>
    </Router>
  );
}

export default App;