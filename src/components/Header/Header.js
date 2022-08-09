import React from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { BiLogIn } from 'react-icons/bi';

const Header = () => {
  return (
    <div className=" shadow  bg-body rounded  fixed-top">
      <nav  className="navbar navbar-expand-lg navbar-light   container   ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img style={{width:'70px',height:'50px'}} src="https://i.ibb.co/zFn7x1j/24766669-indonesian-halal-logo-2022.jpg" alt="24766669-indonesian-halal-logo-2022" border="0"/>
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
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
                <Link  className="nav-link" to="/donation">
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ fontSize: '20px',marginTop:'-4px'}} className="nav-link" to="/login">
                 <BiLogIn></BiLogIn>
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
