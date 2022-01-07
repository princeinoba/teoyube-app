import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookProvider } from "./teoyubereact/utils/BookContext";
import Books from "./teoyubereact/pages/Books";
import Detail from "./teoyubereact/pages/Detail";
import NoMatch from "./teoyubereact/pages/NoMatch";
import Nav from "./teoyubereact/components/Nav";

function Clients() {
  return (
    <BookProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/pages/Clients", "/books"]}>
              <Books />
            </Route>
            <Route exact path="/pages/Clients/books/:id">
              <Detail />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </BookProvider>
  );
}

export default Clients;
