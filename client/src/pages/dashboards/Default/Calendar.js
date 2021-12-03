import React from "react";
import {
  Card,
  Row,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import { MoreHorizontal } from "react-feather";

import DateTime from "react-datetime";

const Calendar = () => (
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
        Calendar
      </CardTitle>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Responsive embed video 16:9"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
        ></iframe>
      </div>
      <div className="align-self-center w-100">
        <DateTime
          input={false}
          defaultValue={DateTime.moment()}
          dateFormat="L"
          timeFormat={false}
        />
      </div>
    </CardHeader>
    {/* <CardBody className="d-flex">
      <div className="align-self-center w-100">
        <DateTime
          input={false}
          defaultValue={DateTime.moment()}
          dateFormat="L"
          timeFormat={false}
        />
      </div>
    </CardBody> */}
  </Card>
);

export default Calendar;
