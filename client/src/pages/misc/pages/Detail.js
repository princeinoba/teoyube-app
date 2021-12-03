import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "./teoyubeblog/Grid";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

import {
  Col, 
  Row, 
  Container,
  Card,
  CardHeader,
  CardImg,
  ListGroup,
  CardTitle
} from "reactstrap";

import unsplash3 from "../../../assets/img/photos/unsplash-3.jpg";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id
    });
  };

  return (
    <>{state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="md-8">
            <Card>
              <CardImg top width="100%" src={unsplash3} alt="Card image cap" />
              <CardHeader>
                <CardTitle tag="h5" className="mb-0">
                  Card with image and list
                </CardTitle>
              </CardHeader>
              <ListGroup flush>
                <h1>
                 {state.currentPost.title} by {state.currentPost.author}
                </h1>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.currentPost.body}</p>
            </article>
          </Col>
          {state.favorites.indexOf(state.currentPost) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </button>
          ) : (
            <button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
            </button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;