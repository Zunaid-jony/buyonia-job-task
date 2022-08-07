import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/asdfd">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/information">
                  Information
                </Link>
              </li>
             

              {/*  */}
              <li className="nav-item">
                <Link className="nav-link" to="/scholar">
                  Scholar Schedule
                </Link>
              </li>
              
              {/*  */}
              <li className="nav-item">
                <Link className="nav-link" to="/donation">
                  Donation
                </Link>
              </li>
             

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
