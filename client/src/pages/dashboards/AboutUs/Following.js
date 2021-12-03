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
  UncontrolledDropdown,
  Media
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import avatar7 from "../../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../../assets/img/avatars/avatar-8.jpg";
import avatar13 from "../../../assets/img/avatars/avatar-13.jpg";

const Following = () => (
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
      <CardTitle tag="h5" className="mb-0">Following</CardTitle>
    </CardHeader>
    <CardBody>
      <Media>
        <img
          src={avatar7}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Lordium Christ"
        />
        <Media body>
          <p className="my-1">
            <strong>Lordium Christ</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>

      <hr className="my-2" />

      <Media>
        <img
          src={avatar8}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Justus Christ"
        />
        <Media body>
          <p className="my-1">
            <strong>Justus Christ</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>

      <hr className="my-2" />

      <Media>
        <img
          src={avatar13}
          width="56"
          height="56"
          className="rounded-circle mr-2"
          alt="Godium Teoyube"
        />
        <Media body>
          <p className="my-1">
            <strong>Godium Teoyube</strong>
          </p>
          <Button outline color="primary" size="sm">
            Unfollow
          </Button>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Following;
