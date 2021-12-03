import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

import Gallery from '../src/pages/Gallery'
import Wrapper from '../src/components/Wrapper'

import { Badge, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const LineChart = ({ theme }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.primary,
        data: [
          2015,
          1465,
          1487,
          1796,
          1387,
          2123,
          2866,
          2548,
          3902,
          4938,
          3917,
          4927
        ]
      },
      {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.tertiary,
        borderDash: [4, 4],
        data: [
          928,
          734,
          626,
          893,
          921,
          1202,
          1396,
          1232,
          1524,
          2102,
          1506,
          1887
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }
      ]
    }
  };

  return (
    <Card className="flex-fill w-100">
      <CardHeader>
        <Badge color="primary" className="float-right">
          Active
        </Badge>
        <CardTitle tag="h5" className="mb-0">
          Teoyube Videos
        </CardTitle>
        <Wrapper>
          <Gallery />
          <Gallery />
        </Wrapper>
      </CardHeader>
      {/* <CardBody>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Responsive embed video 16:9"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/Rt0oX-4Hbxc?autohide=0&showinfo=0&controls=0"
          ></iframe>
        </div>
      </CardBody> */}
    </Card>
  );
};

export default connect(store => ({
  theme: store.theme.currentTheme
}))(LineChart);
