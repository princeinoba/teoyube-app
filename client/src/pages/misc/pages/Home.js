import React from "react";
import CreatePostForm from "../teoyubeblog/CreatePostForm";
import PostsList from "../teoyubeblog/PostsList";

import {
  Col,
  Row,
  Container,
} from "reactstrap";

const Home = () => {
  return (
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
  );
};

export default Home;





