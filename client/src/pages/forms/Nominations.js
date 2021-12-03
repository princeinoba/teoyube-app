import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BookProvider } from "./teoyubereact/utils/BookContext";
import Books from "./teoyubereact/pages/Books";
import Detail from "./teoyubereact/pages/Detail";
import NoMatch from "./teoyubereact/pages/NoMatch";
import Nav from "./teoyubereact/components/Nav";

function App() {
  return (
    <BookProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/forms/Nominations", "/books"]}>
              <Books />
            </Route>
            <Route exact path="/forms/Nominations/books/:id">
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

export default App;
