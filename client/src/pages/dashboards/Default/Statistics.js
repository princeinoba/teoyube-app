import React from "react";
import { Col, Card, CardBody, CardHeader, Progress, Row } from "reactstrap";

import avatar8 from "../../../assets/img/avatars/avatar-8.jpg";
import avatar15 from "../../../assets/img/avatars/avatar-15.jpg";
import avatar13 from "../../../assets/img/avatars/avatar-13.jpg";
import avatar7 from "../../../assets/img/avatars/avatar-7.jpg";

const Statistics = () => (
  <div className="w-100">
    <Row>
      <Col sm="6">        
        <Card className="flex-fill">
          <CardHeader>
            <span className="float-right">
              <img
                src={avatar13}
                alt="Stacie Hall"
                className="img-fluid rounded-circle mb-1"
                width="45"
                height="25"
              /> 
            </span>
            <h5 className="card-title mb-0">Visitors</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  17.212
                </h2>
              </Col>
              <Col xs="4" className="text-right">
                <span className="text-muted">57%</span>
              </Col>
            </Row>

            <Progress
              color="primary"
              value={57}
              className="progress-sm shadow-sm mb-1"
            />
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="float-right">              
              <img
                src={avatar7}
                alt="Stacie Hall"
                className="img-fluid rounded-circle mb-1"
                width="45"
                height="25"
              /> </span>
            <h5 className="card-title mb-0">Bounce</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  2.364
                </h2>
              </Col>
              <Col xs="4" className="text-right">
                <span className="text-muted">82%</span>
              </Col>
            </Row>

            <Progress
              color="warning"
              value={82}
              className="progress-sm shadow-sm mb-1"
            />
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className="float-right">
              <img
                src={avatar8}
                alt="Stacie Hall"
                className="img-fluid rounded-circle mb-1"
                width="45"
                height="25"
              /> 
            </span>
            <h5 className="card-title mb-0">Real-Time</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h2 className="d-flex align-items-center mb-0 font-weight-light">
                  1.856
                </h2>
              </Col>
              <Col xs="4" className="text-right">
                <span className="text-muted">64%</span>
              </Col>
            </Row>

            <Progress
              color="info"
              value={64}
              className="progress-sm shadow-sm mb-1"
            />
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="flex-fill">
          <CardHeader>
            <span className=" float-right">
              <img
                src={avatar15}
                alt="Stacie Hall"
                className="img-fluid rounded-circle mb-1"
                width="45"
                height="25"
              />              
            </span>
            <h5 className="card-title mb-0">Activity</h5>
          </CardHeader>
          <CardBody className="my-2">
            <Row className="d-flex align-items-center mb-4">
              <Col xs="8">
                <h3 className="d-flex align-items-center mb-0 font-weight-light">
                  57.300
                </h3>
              </Col>
              <Col xs="4" className="text-right">
                <span className="text-muted">32%</span>
              </Col>
            </Row>

            <Progress
              color="success"
              value={32}
              className="progress-sm shadow-sm mb-1"
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Statistics;
