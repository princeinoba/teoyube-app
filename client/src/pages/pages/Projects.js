import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Progress,
  Row,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import avatar7 from "../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../assets/img/avatars/avatar-8.jpg";
import avatar9 from "../../assets/img/avatars/avatar-9.jpg";

import unsplash7 from "../../assets/img/photos/unsplash-7.jpg";
import unsplash8 from "../../assets/img/photos/unsplash-8.jpg";
import unsplash9 from "../../assets/img/photos/unsplash-9.jpg";
import unsplash6 from "../../assets/img/photos/unsplash-6.jpg";
import unsplash12 from "../../assets/img/photos/unsplash-12.jpg";
import unsplash15 from "../../assets/img/photos/unsplash-15.jpg";
import unsplash16 from "../../assets/img/photos/unsplash-16.jpg";
import unsplash18 from "../../assets/img/photos/unsplash-18.jpg";

const Project = ({ name, state, color, percentage, description, image }) => (
  <Card>
    {image ? <CardImg top src={image} alt="Card image cap" /> : ""}
    <CardHeader className="px-4 pt-4">
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
        {name}
      </CardTitle>
      <Badge className="my-2" color={color}>
        {state}
      </Badge>
    </CardHeader>
    <CardBody className="px-4 pt-2">
      <p>{description}</p>

      <img
        src={avatar7}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
      <img
        src={avatar8}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
      <img
        src={avatar9}
        width="28"
        height="28"
        className="rounded-circle mr-2"
        alt="Avatar"
      />
    </CardBody>
    <ListGroup flush>
      <ListGroupItem className="px-4 pb-4">
        <p className="mb-2 font-weight-bold">
          Progress<span className="float-right">{percentage}%</span>
        </p>
        <Progress className="progress-sm" value={percentage} />
      </ListGroupItem>
    </ListGroup>
  </Card>
);

const Projects = () => (
  <Container fluid className="p-0">
    <Button color="primary" className="float-right mt-n1">
      <FontAwesomeIcon icon={faPlus} /> New project
    </Button>
    <h1 className="h3 mb-3">Projects</h1>

    <Row>
      <Col md="6" lg="3">
        <Project
          name="Landing page redesign"
          state="Finished"
          color="success"
          percentage="100"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash7}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Company posters"
          state="In progress"
          color="warning"
          percentage="75"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash8}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Product page design"
          state="Finished"
          color="success"
          percentage="100"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash12}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Upgrade CRM software"
          state="In progress"
          color="warning"
          percentage="50"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash6}
        />
      </Col>

      <Col md="6" lg="3">
        <Project
          name="Fix form validation"
          state="In progress"
          color="warning"
          percentage="65"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash9}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="New company logo"
          state="On hold"
          color="danger"
          percentage="20"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash15}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Upgrade to latest Maps API"
          state="Finished"
          color="success"
          percentage="100"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash16}
        />
      </Col>
      <Col md="6" lg="3">
        <Project
          name="Refactor backend templates"
          state="On hold"
          color="danger"
          percentage="0"
          description="The eyes of your understanding being enlightened that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
          image={unsplash18}
        />
      </Col>
    </Row>
  </Container>
);

export default Projects;
