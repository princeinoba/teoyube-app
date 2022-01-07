import React from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";

import {
  CardBody,
  Card,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown
} from "reactstrap";

import unsplash20 from "../../../assets/img/photos/unsplash-20.jpg";
import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const PieChart = ({ theme }) => {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.primary,
          theme.warning,
          theme.danger,
          "#E8EAED"
        ],
        borderWidth: 5
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: false
    }
  };

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
          Monthly Videos
          <img src={unsplash20} className="flex-fill w-100" alt="Unsplash" style={{ height: 180 }} />
        </CardTitle>
      </CardHeader>
      <CardBody className="d-flex">
        <div className="align-self-center w-100">
          <Table className="mb-0">
            <thead>
              <tr>
                <th>VideoWeekly</th>
                <th className="text-right">Points</th>
                <th className="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-primary" />{" "}
                  Week1
                </td>
                <td className="text-right">$ 2602</td>
                <td className="text-right text-success">+43%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-warning" />{" "}
                  Week2
                </td>
                <td className="text-right">$ 1253</td>
                <td className="text-right text-success">+13%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-danger" />{" "}
                  Week3
                </td>
                <td className="text-right">$ 541</td>
                <td className="text-right text-success">+24%</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faSquare} className="text-dark" />{" "}
                  Week4
                </td>
                <td className="text-right">$ 1465</td>
                <td className="text-right text-success">+11%</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(PieChart);
