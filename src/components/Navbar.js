import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ color: "white" }}>
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active active" aria-current="page" to="/" style={{ color: "white"}}>     
                    Home
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/business" style={{ color: "white" }}>
                    Business
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/entertainment" style={{ color: "white" }}>
                    Entertainment
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/general" style={{ color: "white" }}>
                    General
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/health" style={{ color: "white" }}>
                    Health
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/science" style={{ color: "white" }}>
                    Science
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/sports" style={{ color: "white" }}>
                    Sports
                  </Link>
                </li>
                <li className="nav=link">
                  <Link className="nav-link active" to="/technology" style={{ color: "white" }}>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
