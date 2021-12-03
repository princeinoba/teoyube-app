import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Media
} from "reactstrap";

import avatar7 from "../../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../../assets/img/avatars/avatar-8.jpg";
import avatar13 from "../../../assets/img/avatars/avatar-13.jpg";

const Feed = () => (
  <Card className="flex-fill w-100">
    <CardHeader>
      <Badge color="info" className="float-right">
        Today
      </Badge>
      <CardTitle tag="h5" className="mb-0">
        Daily feed
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar7}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Justus Christ"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <strong>Justus Christ</strong> started following{" "}
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
          alt="Godium Teoyube"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <strong>Godium Teoyube</strong> posted something on{" "}
          <strong>Lordium Christ</strong>'s timeline
          <br />
          <small className="text-muted">Today 7:21 pm</small>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Responsive embed video 16:9"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
          ></iframe>
        </div>
          {/* <div className="border text-sm text-muted p-2 mt-1">
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,...
          </div> */}
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar13}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Stacie Hall"
        />
        <Media body>
          <small className="float-right text-navy">1h ago</small>
          <strong>Justus Christ</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
        </Media>
      </Media>

      <hr />
      <Button color="primary" block>
        Load more
      </Button>
    </CardBody>
  </Card>
);

export default Feed;

