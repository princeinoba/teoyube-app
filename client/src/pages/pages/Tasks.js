import App from './App';
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown
} from "reactstrap";

import dragula from "react-dragula";

import { MoreHorizontal } from "react-feather";

import avatar7 from "../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../assets/img/avatars/avatar-8.jpg";
import avatar9 from "../../assets/img/avatars/avatar-9.jpg";
import avatar10 from "../../assets/img/avatars/avatar-10.jpg";
import avatar11 from "../../assets/img/avatars/avatar-11.jpg";
import avatar12 from "../../assets/img/avatars/avatar-12.jpg";
import avatar13 from "../../assets/img/avatars/avatar-13.jpg";
import avatar15 from "../../assets/img/avatars/avatar-15.jpg";

class Lane extends React.Component {
  handleContainerLoaded = container => {
    if (container) {
      this.props.onContainerLoaded(container);
    }
  };

  render() {
    const { name, children } = this.props;

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
          <CardTitle tag="h5">{name}</CardTitle>
          <h6 className="card-subtitle text-muted">
          The eyes of your understanding being enlightened,
          </h6>
        </CardHeader>
        <CardBody className="p-3">
          <div ref={this.handleContainerLoaded}>{children}</div>
          <Button color="primary" block>
            Add new task
          </Button>
        </CardBody>
      </Card>
    );
  }
}

const Task = ({ id, checked, text, avatar }) => (
  <Card className="mb-3 bg-light cursor-grab border">
    <CardBody className="p-3">
      <div className="float-right mr-n2">
        <CustomInput
          type="checkbox"
          id={"exampleCustomCheckbox" + id}
          defaultChecked={checked ? true : false}
        />
      </div>
      <p>{text}</p>
      <div className="float-right mt-n1">
        <img
          src={avatar}
          width="32"
          height="32"
          className="rounded-circle"
          alt="Avatar"
        />
      </div>
      <Button color="primary" size="sm">
        View
      </Button>
    </CardBody>
  </Card>
);

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.containers = [];
  }

  onContainerReady = container => {
    this.containers.push(container);
  };

  componentDidMount() {
    dragula(this.containers);
  }

  render = () => (
    <Container fluid className="p-0">

      <App />
      <h1 className="h3 mb-3">My Todo List:</h1>

      <Row>
        <Col lg="6" xl="3">
          <Lane name="Upcoming" onContainerLoaded={this.onContainerReady}>
            <Task
              id="1"
              avatar={avatar7}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
              checked
            />
            <Task
              id="2"
              avatar={avatar8}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
              checked
            />
            <Task
              id="3"
              avatar={avatar9}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="4"
              avatar={avatar10}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="5"
              avatar={avatar11}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="In Progress" onContainerLoaded={this.onContainerReady}>
            <Task
              id="6"
              avatar={avatar12}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="7"
              avatar={avatar13}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="8"
              avatar={avatar15}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="On Hold" onContainerLoaded={this.onContainerReady}>
            <Task
              id="9"
              avatar={avatar13}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="10"
              avatar={avatar8}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="11"
              avatar={avatar11}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="12"
              avatar={avatar13}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
          </Lane>
        </Col>
        <Col lg="6" xl="3">
          <Lane name="Completed" onContainerLoaded={this.onContainerReady}>
            <Task
              id="13"
              avatar={avatar12}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="14"
              avatar={avatar9}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="15"
              avatar={avatar13}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="16"
              avatar={avatar11}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
            <Task
              id="17"
              avatar={avatar13}
              text="The eyes of your understanding being enlightened, that ye may know what is the hope of your calling and what the riches of the glory of his inheritance in the saints,"
            />
          </Lane>
        </Col>
      </Row>
    </Container>
  );
}

export default Tasks;
