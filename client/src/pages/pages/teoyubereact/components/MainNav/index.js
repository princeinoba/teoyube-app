import React from "react";
import { Link } from "react-router-dom";
import logo from "./bookie-logo.svg";
import "./style.css";

import {
  Navbar,
  Nav
} from "reactstrap";

function MainNav() {
  return (
    <Navbar className="border-bottom py-0" id="main-nav">
      <Navbar.Brand href="/" className="py-3 px-3" id="nav-brand">
        <img
          src={logo}
          className="d-inline-block align-top mr-3"
          width={30}
          height={30}
          alt="Bookie logo"
        />
        Bookie
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="nav-link mr-3">
          Search
        </Link>
        <Link to="/recommended" className="nav-link">
          Recommended Books
        </Link>
      </Nav>
    </Navbar>
  );
}

export default MainNav;
