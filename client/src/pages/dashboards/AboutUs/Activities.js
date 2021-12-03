import React from "react";

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

import { MoreHorizontal } from "react-feather";

import avatar7 from "../../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../../assets/img/avatars/avatar-8.jpg";
import avatar9 from "../../../assets/img/avatars/avatar-9.jpg";
import avatar13 from "../../../assets/img/avatars/avatar-13.jpg";

import unsplash16 from "../../../assets/img/photos/unsplash-16.jpg";
import unsplash18 from "../../../assets/img/photos/unsplash-18.jpg";

const Activities = () => (
  <Card className="flex-fill mb-3">
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
      <CardTitle tag="h5" className="mb-0">Activities</CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar13}
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
          src={avatar7}
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
          <small className="text-muted">Today 7:21 pm</small>
          <div className="border text-sm text-muted p-2 mt-1">
            The eyes of your understanding being enlightened that ye may know 
            what is the hope of your calling and what the riches of the glory of 
            his inheritance in the saints,
          </div>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar9}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Justus Christ"
        />
        <Media body>
          <small className="float-right text-navy">1h ago</small>
          <strong>Justus Christ</strong> posted a new blog
          <br />
          <small className="text-muted">Today 6:35 pm</small>
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
          <small className="float-right text-navy">3h ago</small>
          <strong>Godium Teoyube</strong> posted two photos on{" "}
          <strong>Justus Christ</strong>'s timeline
          <br />
          <small className="text-muted">Today 5:12 pm</small>
          <div className="row no-gutters mt-1">
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash16} className="img-fluid pr-2" alt="Unsplash" />
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
              <img src={unsplash18} className="img-fluid pr-2" alt="Unsplash" />
            </div>
          </div>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar9}
          width="36"
          height="36"
          className="rounded-circle mr-2"
          alt="Lordium Christ"
        />
        <Media body>
          <small className="float-right text-navy">1d ago</small>
          <strong>Lordium Christ</strong> posted a new blog
          <br />
          <small className="text-muted">Yesterday 2:43 pm</small>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar7}
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
  </Card>
);

export default Activities;