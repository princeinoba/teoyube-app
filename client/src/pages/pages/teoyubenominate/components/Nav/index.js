import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <section className="bg-light">
      <div className="container-fluid px-lg-5 px-md-3">
        <nav className="navbar navbar-light px-0">
          <Link className="navbar-brand" to="/pages/Nominate">
            Nominate it!
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/forms/Nominations">
                <Button theme="dark">
                  < FontAwesomeIcon icon={faMedal} />Nominations
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Nav;
