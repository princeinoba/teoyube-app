import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

import CreatePostForm from "./teoyubeblog/CreatePostForm";
import PostsList from "./teoyubeblog/PostsList";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import FavoritesList from "./pages/FavoritesList";
import NoMatch from "./pages/NoMatch";

import {
  Col,
  Row,
  Container,
} from "reactstrap";

function TeoyubeBlog() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Container fluid>
            <Row>
              <Col md="4" xl="7">
                <CreatePostForm />
              </Col>
              <Col md="8" xl="5">
                <PostsList />
              </Col>
            </Row>
          </Container>
          <Switch>
            <Route exact path="/pages/TeoyubeBlog" teoyubeblog={Home} />
            <Route exact path="/pages/TeoyubeBlog" teoyubeblog={Home} />
            <Route exact path="/pages/favorites" teoyubeblog={FavoritesList} />
            <Route exact path="/pages/posts/:id" teoyubeblog={Detail} />
            <Route teoyubeblog={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default TeoyubeBlog;
