import React from "react";
import logo from "./bookie-logo.svg";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/forms/Nominations">
        <img
          src={logo}
          className="d-inline-block align-top mr-3"
          width={30}
          height={30}
          alt="Bookie logo"
        />
        Bookie
        React Reading List
      </a>
    </nav>
  );
}

export default Nav;
