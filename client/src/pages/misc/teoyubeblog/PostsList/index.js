import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  UncontrolledDropdown
} from "reactstrap";

import {
  MoreHorizontal
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import avatar7 from "../../../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../../../assets/img/avatars/avatar-8.jpg";
import avatar10 from "../../../../assets/img/avatars/avatar-10.jpg";
import avatar11 from "../../../../assets/img/avatars/avatar-11.jpg";
import avatar13 from "../../../../assets/img/avatars/avatar-13.jpg";

import unsplash7 from "../../../../assets/img/photos/unsplash-7.jpg";
import unsplash18 from "../../../../assets/img/photos/unsplash-18.jpg";


function PostsList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="card-actions float-right">
          <UncontrolledDropdown>
            <DropdownToggle tag="a">
              <MoreHorizontal />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <CardTitle tag="h5" className="mb-0">
          All Blog Posts
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Media>
          <img
            src={avatar7}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Lordium Christ"
          />
          <Media body>
            <small className="float-right text-navy">5m ago</small>
            <strong>Lordium Christ</strong> started following{" "}
            <strong>Godium Teoyube</strong>
            <br />
            <small className="text-muted">Today 7:51 pm</small>
            <br />
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar8}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Lordium Christ"
          />
          <Media body>
            <small className="float-right text-navy">30m ago</small>
            <strong>Lordium Christ</strong> posted something on{" "}
            <strong>Godium Teoyube</strong>'s timeline
            <br />
            <small className="text-muted">Click on a post to view</small>
            <div className="border text-sm text-muted p-2 mt-1">
              The eyes of your understanding being enlightened; that ye may know 
              what is the hope of his calling, and what the riches of the glory of
              his inheritance in the saints.
            </div>
            <Button size="sm" color="danger" className="mt-1">
              <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
            </Button>
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar7}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Lordium Christ"
          />
          <Media body>
            <small className="float-right text-navy">1h ago</small>
            <strong>Lordium Christ</strong> posted a new blog
            <br />
            <small className="text-muted">Today 6:35 pm</small>
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar10}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Justus Christ"
          />
          <Media body>
            <small className="float-right text-navy">3h ago</small>
            <strong>Justus Christ</strong> posted two photos on{" "}
            <strong>Godium Teoyube</strong>'s timeline
            <br />
            <small className="text-muted">Today 5:12 pm</small>
            <div className="row no-gutters mt-1">
              <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <img src={unsplash18} className="img-fluid pr-2" alt="Unsplash" />
              </div>
              <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <img src={unsplash7} className="img-fluid pr-2" alt="Unsplash" />
              </div>
            </div>
            <Button size="sm" color="danger" className="mt-1">
              <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
            </Button>
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar11}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Lordium Christ"
          />
          <Media body>
            <small className="float-right text-navy">1d ago</small>
            <strong>Lordium Christ</strong> started following{" "}
            <strong>Godium Teoyube</strong>
            <br />
            <small className="text-muted">Yesterday 3:12 pm</small>
            <Media className="mt-1">
              <img
                src={avatar8}
                width="36"
                height="36"
                className="rounded-circle mr-2"
                alt="Lordium Christ"
              />
              <Media body className="pl-3">
                <div className="border text-sm text-muted p-2 mt-1">                The eyes of your understanding being enlightened; 
                  that ye may know what is the hope of his calling, and what 
                  the riches of the glory of his inheritance in the saints.
                </div>
              </Media>
            </Media>
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar7}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Justus Christ"
          />
          <Media body>
            <small className="float-right text-navy">1d ago</small>
            <strong>Justus Christ</strong> posted a new blog
            <br />
            <small className="text-muted">Yesterday 2:43 pm</small>
          </Media>
        </Media>

        <hr />
        <Media>
          <img
            src={avatar13}
            width="36"
            height="36"
            className="rounded-circle mr-2"
            alt="Godium Teoyube"
          />
          <Media body>
            <small className="float-right text-navy">1d ago</small>
            <strong>Godium Teoyube</strong> started following{" "}
            <strong>Lordium Christ</strong>
            <br />
            <small className="text-muted">Yesterdag 1:51 pm</small>
          </Media>
        </Media>

        <hr />
        <Button color="primary" block>
          Load more
        </Button>
      </CardBody>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removePost(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h5>You haven't added any posts yet!</h5>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </Card>
  );
}

export default PostsList;


