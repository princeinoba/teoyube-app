import React from "react";
import { Radar } from "react-chartjs-2";
import { connect } from "react-redux";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";

import unsplash22 from "../../../assets/img/photos/unsplash-22.jpg";

import { MoreHorizontal } from "react-feather";

const RadarChart = ({ theme }) => {
  const data = {
    labels: ["Technology", "Sports", "Media", "Gaming", "Arts"],
    datasets: [
      {
        label: "Interests",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: theme.info,
        pointBackgroundColor: theme.info,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: theme.info,
        data: [70, 53, 82, 60, 33]
      }
    ]
  };

  const options = { maintainAspectRatio: false };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <div className="card-actions float-right">
          <UncontrolledDropdown>
            <DropdownToggle tag="a">
              <MoreHorizontal />
            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>Watch Again</DropdownItem>
              <DropdownItem>Add To Favourite</DropdownItem>
              <DropdownItem>Download</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <CardTitle tag="h5" className="mb-0">
          Weekly Videos
        </CardTitle>
      </CardHeader>
      <CardBody className="d-flex">
        <img src={unsplash22} className="flex-fill w-100" alt="Unsplash" style={{ height: 320 }} />
        {/* <div className="align-self-center w-100">
          <div className="chart">
            <img src={unsplash10} className="flex-fill w-100" alt="Unsplash" style={{ height: 280 }} />
            <Radar data={data} options={options} />
          </div>
        </div> */}
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(RadarChart);
