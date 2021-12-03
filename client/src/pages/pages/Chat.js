import React from "react";

import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  ListGroupItem,
  Media,
  Row
} from "reactstrap";

import avatar7 from "../../assets/img/avatars/avatar-7.jpg";
import avatar8 from "../../assets/img/avatars/avatar-8.jpg";
import avatar9 from "../../assets/img/avatars/avatar-9.jpg";
import avatar10 from "../../assets/img/avatars/avatar-10.jpg";
import avatar11 from "../../assets/img/avatars/avatar-11.jpg";
import avatar12 from "../../assets/img/avatars/avatar-12.jpg";
import avatar13 from "../../assets/img/avatars/avatar-13.jpg";
import avatar15 from "../../assets/img/avatars/avatar-15.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Phone, Video, MoreHorizontal } from "react-feather";

const ChatMessage = ({ position, avatar, name, children, time }) => (
  <div className={`chat-message-${position} pb-4`}>
    <div>
      <img
        src={avatar}
        className="rounded-circle mr-1"
        alt={name}
        width="40"
        height="40"
      />
      <div className="text-muted small text-nowrap mt-2">{time}</div>
    </div>
    <div
      className={`flex-shrink-1 bg-light rounded py-2 px-3 ${
        position === "right" ? "mr-3" : "ml-3"
      }`}
    >
      <div className="font-weight-bold mb-1">{name}</div>
      {children}
    </div>
  </div>
);

const Chat = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Messages</h1>

    <Card>
      <Row noGutters>
        <Col lg={5} xl={3} className="border-right">
          <div className="px-4 d-none d-md-block">
            <Media className="align-items-center">
              <Media body>
                <Input type="text" className="my-3" placeholder="Search..." />
              </Media>
            </Media>
          </div>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Badge color="success" className="float-right">
              5
            </Badge>
            <Media>
              <img
                src={avatar7}
                className="rounded-circle mr-1"
                alt="Lordium Christ"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Lordium Christ
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Badge color="success" className="float-right">
              2
            </Badge>
            <Media>
              <img
                src={avatar8}
                className="rounded-circle mr-1"
                alt="Godium Teoyube"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                 Godium Teoyube
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar9}
                className="rounded-circle mr-1"
                alt="Justus Christ"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                Justus Christ
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-online" />{" "}
                  Online
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar10}
                className="rounded-circle mr-1"
                alt="Lordium Christ"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Lordium Christ
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar11}
                className="rounded-circle mr-1"
                alt="Godium Teoyube"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Godium Teoyube
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar12}
                className="rounded-circle mr-1"
                alt="Justus Christ"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Justus Christ
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar13}
                className="rounded-circle mr-1"
                alt="Godium Teoyube"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Godium Teoyube
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>
          <ListGroupItem action tag="a" href="#" className="border-0">
            <Media>
              <img
                src={avatar15}
                className="rounded-circle mr-1"
                alt="Lordium Christ"
                width="40"
                height="40"
              />
              <Media body className="ml-3">
                  Lordium Christ
                <div className="small">
                  <FontAwesomeIcon icon={faCircle} className="chat-offline" />{" "}
                  Offline
                </div>
              </Media>
            </Media>
          </ListGroupItem>

          <hr className="d-block d-lg-none mt-1 mb-0" />
        </Col>
        <Col lg={7} xl={9}>
          <div className="py-2 px-4 border-bottom d-none d-lg-block">
            <Media className="align-items-center py-1">
              <div className="position-relative">
                <img
                  src={avatar13}
                  className="rounded-circle mr-1"
                  alt="Godium Teoyube"
                  width="40"
                  height="40"
                />
              </div>
              <Media body className="pl-3">
                <strong>Godium Teoyube</strong>
                <div className="text-muted small">
                  <em>Typing...</em>
                </div>
              </Media>
              <div>
                <Button size="lg" color="primary" className="px-3 mr-2">
                  <Phone className="feather" />
                </Button>
                <Button rel="noreferrer noopener" target="_blank" href={'https://github.com/princeinoba/teoyube-pics/blob/main/unsplash-10.jpg?raw=true'}
                  size="lg"
                  color="info"
                  className="mr-2 px-3 d-none d-md-inline-block"
                >
                  <Video className="feather" />
                </Button>
                <Button size="lg" color="light" className="px-3 border">
                  <MoreHorizontal className="feather" />
                </Button>
              </div>
            </Media>
          </div>

          <div className="position-relative">
            <div className="chat-messages p-4">
              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:33 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:34 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:35 am"
              >
                The eyes of your understanding being enlightened;
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:36 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling and what the riches of the glory of 
                his inheritance in the saints,
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:37 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:38 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:39 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:40 am"
              >
                The eyes of your understanding being enlightened;
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:41 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling and what the riches of the glory of 
                his inheritance in the saints,
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:42 am"
              >
                The eyes of your understanding being enlightened that ye may know 
                what is the hope of your calling and what the riches of the glory of 
                his inheritance in the saints,
              </ChatMessage>

              <ChatMessage
                position="right"
                name="You"
                avatar={avatar7}
                time="2:43 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>

              <ChatMessage
                position="left"
                name="Godium Teoyube"
                avatar={avatar13}
                time="2:44 am"
              >
                The eyes of your understanding being enlightened; that ye may know 
                what is the hope of your calling
              </ChatMessage>
            </div>
          </div>

          <div className="flex-grow-0 py-3 px-4 border-top">
            <InputGroup>
              <Input type="text" placeholder="Type your message" />
              <InputGroupAddon addonType="append">
                <Button color="primary">Send</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Card>
  </Container>
);

export default Chat;
