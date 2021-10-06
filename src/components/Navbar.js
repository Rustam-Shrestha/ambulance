import React from "react";
import PropTypes from "prop-types";
import "../App.css";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>

              {/* <Link className="nav-link" to="/blog">
                  {props.blog}
                </Link> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
                </button>
              </form> */}
            <div className="circle red" onClick={props.reddish}></div>
            <div className="circle green" onClick={props.greenish}></div>
            <div className="circle blue" onClick={props.bluish}></div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "#000" : "#ddd"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              ></label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
