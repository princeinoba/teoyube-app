import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  FormGroup,
  CustomInput,
  UncontrolledCarousel,
  Input,
  Label,
} from "reactstrap";

import {
  Briefcase,
  Home,
  MapPin,
} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import unsplash4 from "../../../../assets/img/photos/unsplash-4.jpg";
import unsplash3 from "../../../../assets/img/photos/unsplash-3.jpg";
import unsplash10 from "../../../../assets/img/photos/unsplash-10.jpg";
import unsplash5 from "../../../../assets/img/photos/unsplash-5.jpg";

const slides = [
  {
    src: unsplash4,
    key: "1"
  },
  {
    src: unsplash3,
    key: "2"
  },
  {
    src: unsplash10,
    key: "3"
  },
  {
    src: unsplash5,
    key: "4"
  }
];

function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <Card>
      <Card>
        <CardHeader>
          <CardTitle tag="h5">Your Personal BlogVideos</CardTitle>
        </CardHeader>
        <CardBody className="pt-0">
          <UncontrolledCarousel
            items={slides}
            indicators={true}
            controls={true}
          />
        </CardBody>
      </Card>

      <hr className="my-0" />

      <CardBody>
        <CardTitle tag="h5">Skills</CardTitle>
        <Badge color="primary" className="mr-1 my-1">
          HTML
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          JavaScript
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Sass
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Angular
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Vue
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          React
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          Redux
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          UI
        </Badge>
        <Badge color="primary" className="mr-1 my-1">
          UX
        </Badge>
      </CardBody>

      <hr className="my-0" />
      <CardBody>
        <CardTitle tag="h5">About</CardTitle>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
           <Home width={14} height={14} className="mr-1" /> Lives in{" "}
           <Link to="/dashboard/default">San Francisco, SA</Link>
          </li>

          <li className="mb-1">
            <Briefcase width={14} height={14} className="mr-1" /> Works at{" "}
            <Link to="/dashboard/default">GitHub</Link>
          </li>
          <li className="mb-1">
            <MapPin width={14} height={14} className="mr-1" /> From{" "}
            <Link to="/dashboard/default">Boston</Link>
          </li>
        </ul>
      </CardBody>
      <hr className="my-0" />
      <CardBody>
        <Form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
          <FormGroup row>
            <Label sm={2} className="text-sm-right">
              Title
            </Label>
            <Col sm={10}>
             <Input type="text" name="input" required ref={titleRef} placeholder="Input" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} className="text-sm-right">
              Description
            </Label>
            <Col sm={10}>
             <Input type="text" name="input" ref={authorRef} placeholder="Description" /> 
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} className="text-sm-right">
              Body
            </Label>
            <Col sm={10}>
             <Input
                type="textarea"
                required ref={bodyRef} 
                placeholder="Body"
                rows="3"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} className="text-sm-right pt-sm-0">
              Radios
            </Label>
            <Col sm={10}>
              <div className="custom-controls-stacked">
                <CustomInput
                  type="radio"
                  id="radio1"
                  name="customRadio"
                  label="Godium"
                  className="mb-2"
                  defaultChecked
                />
                <CustomInput
                  type="radio"
                  id="radio2"
                  name="customRadio"
                  label="Lordium"
                  className="mb-2"
                />
              </div>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Save Post
              </Button>
            </Col>
          </FormGroup>
          <hr className="my-0" />
          <CardTitle tag="h5">Post Elsewhere</CardTitle>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <FontAwesomeIcon icon={faGlobe} fixedWidth className="mr-1" />
              <Link to="/dashboard/default">PrinceInoba.co</Link>
            </li>
            <li className="mb-1">
              <FontAwesomeIcon icon={faTwitter} fixedWidth className="mr-1" />
              <Link to="/dashboard/default">Twitter</Link>
            </li>
            <li className="mb-1">
              <FontAwesomeIcon icon={faFacebook} fixedWidth className="mr-1" />
              <Link to="/dashboard/default">Facebook</Link>
            </li>
            <li className="mb-1">
              <FontAwesomeIcon icon={faInstagram} fixedWidth className="mr-1" />
              <Link to="/dashboard/default">Instagram</Link>
            </li>
            <li className="mb-1">
              <FontAwesomeIcon icon={faLinkedin} fixedWidth className="mr-1" />
              <Link to="/dashboard/default">LinkedIn</Link>
            </li>
          </ul>                   
        </Form>        
      </CardBody>
    </Card>
  );
}

export default CreatePostForm;

