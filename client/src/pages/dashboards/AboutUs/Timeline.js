import React from "react";
import { Row, Col, Button, Card, CardBody, Media } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import avatar7 from "../../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../../assets/img/avatars/avatar-8.jpg";
import avatar12 from "../../../assets/img/avatars/avatar-12.jpg";
import avatar13 from "../../../assets/img/avatars/avatar-13.jpg";
import avatar15 from "../../../assets/img/avatars/avatar-15.jpg";

import unsplash7 from "../../../assets/img/photos/unsplash-7.jpg";
import unsplash18 from "../../../assets/img/photos/unsplash-18.jpg";
import unsplash10 from "../../../assets/img/photos/unsplash-10.jpg";

const Activity = () => (
  <Card className="flex-fill">
    <CardBody>
      <Media>
        <img
          src={avatar7}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Godium Teoyube"
        />
        <Media body>
          <small className="float-right text-navy">5m ago</small>
          <p className="mb-2">
            <strong>Godium Teoyube</strong>
          </p>
          <p>
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,
          </p>

          <Row noGutters className="mt-1">
            <Col xs="6">
              <img src={unsplash18} className="img-fluid pr-1" alt="Unsplash" />
            </Col>
            <Col xs="6">
              <img src={unsplash7} className="img-fluid pl-1" alt="Unsplash" />
            </Col>
          </Row>

          <small className="text-muted">Today 7:51 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>

          <Media className="mt-3">
            <div className="pr-2">
              <img
                src={avatar8}
                width="36"
                height="36"
                className="rounded-circle mr-2"
                alt="Justus Christ"
              />
            </div>
            <Media body>
              <p className="text-muted">
                <strong>Godium Teoyube</strong>: The eyes of your understanding being enlightened that ye may know what 
                is the hope of your calling and what the riches of the glory of his 
                inheritance in the saints,
              </p>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar13}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Justus Christ"
        />
        <Media body>
          <small className="float-right text-navy">30m ago</small>
          <p className="mb-2">
            <strong>Justus Christ</strong>
          </p>
          <p>
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,
          </p>
          <small className="text-muted">Today 7:21 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar7}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Justus Christ"
        />
        <Media body>
          <small className="float-right text-navy">3h ago</small>
          <p className="mb-2">
            <strong>Lordium Christ</strong>
          </p>

          <img src={unsplash10} className="img-fluid" alt="Unsplash" />

          <small className="text-muted">Today 5:12 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>

          <Media className="mt-3">
            <div className="pr-2">
              <img
                src={avatar15}
                width="36"
                height="36"
                className="rounded-circle mr-2"
                alt="Lordium Christ"
              />
            </div>
            <Media body>
              <p className="text-muted">
                <strong>Lordium Christ</strong>: The eyes of your understanding being enlightened that ye may know what 
                  is the hope of your calling and what the riches of the glory of his 
                  inheritance in the saints,
              </p>
            </Media>
          </Media>
        </Media>
      </Media>

      <hr />
      <Media>
        <img
          src={avatar12}
          width="56"
          height="56"
          className="rounded-circle mr-3"
          alt="Lordium Christ"
        />
        <Media body>
          <small className="float-right text-navy">4h ago</small>
          <p className="mb-2">
            <strong>Lordium Christ</strong>
          </p>
          <p>
            The eyes of your understanding being enlightened that ye may know what 
            is the hope of your calling and what the riches of the glory of his 
            inheritance in the saints,
          </p>
          <small className="text-muted">Today 4:21 pm</small>
          <br />
          <Button size="sm" color="danger" className="mt-1">
            <FontAwesomeIcon icon={faHeart} fixedWidth /> Like
          </Button>
        </Media>
      </Media>
    </CardBody>
  </Card>
);

export default Activity;
