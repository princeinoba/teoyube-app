import React from "react";
import { Link } from "react-router-dom";

import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import Timeline from "../../../components/Timeline";
import TimelineItem from "../../../components/TimelineItem";

const Appointments = () => (
  <Card className="flex-fill w-100">
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
        Appointments
      </CardTitle>
    </CardHeader>
    <div className="p-4 bg-light">
      <h2>You have a meeting today!</h2>
      <p className="mb-0 text-sm">
        Your next meeting is in 2 hours. Check your{" "}
        <Link to="/dashboard/default">schedule</Link> to see the details.
      </p>
    </div>
    <CardBody className="d-flex">
      <Timeline>
        <TimelineItem>
          <strong>Chat with Carl and Ashley</strong>
          <span className="float-right text-muted text-sm">30m ago</span>
          <p>
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,...
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Responsive embed video 16:9"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
            ></iframe>
          </div>
        </TimelineItem>
        <TimelineItem>
          <strong>The big launch</strong>
          <span className="float-right text-muted text-sm">2h ago</span>
          <p>
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,...
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Responsive embed video 16:9"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
            ></iframe>
          </div>
        </TimelineItem>
        {/* <TimelineItem>
          <strong>Coffee break</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p className="mb-0">
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,...
          </p>
        </TimelineItem> */}
      </Timeline>
    </CardBody>
  </Card>
);

export default Appointments;

