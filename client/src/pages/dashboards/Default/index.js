import React from "react";
import { Container, Row, Col } from "reactstrap";

import OmdbContainer from "../../pages/teoyubepromises/OmdbContainer";

import Calendar from "./Calendar";
import Header from "./Header";
import Feed from "./Feed";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import Statistics from "./Statistics";
import Clients from "./Clients";
import WorldMap from "./WorldMap";

const Analytics = () => (
  <Container fluid className="p-0">
    <Header />
    <Row>
      <Col lg="6" xl="7" className="d-flex">
        <WorldMap />
      </Col>
      <Col lg="6" xl="5" className="d-flex">
        {/* <Statistics /> */}
        <RadarChart />
      </Col>
    </Row>
    <Row>
      <Col lg="4" className="d-flex">
        <Calendar />
      </Col>
      <Col lg="4" className="d-flex">
        <PieChart />
      </Col>
      <Col lg="4" className="d-flex">
        <Feed />
      </Col>
    </Row>
    <Row>
      <Col lg="5" xl="4" className="d-flex">
        <OmdbContainer />
      </Col>
      <Col lg="7" xl="8" className="d-flex">
        <Clients />
      </Col>
    </Row>
  </Container>
);

export default Analytics;
