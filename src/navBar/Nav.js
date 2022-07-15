import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="head-nav">
      <nav className="row navbar nav-bg">
        <div className="col-3">
          <img className="nav_img" src="school_logo.png" alt="school_logo"></img>
        </div>

        <div className="col-6">
          <ul className="nav justify-content-center">
          <li className="nav-item">
              <Link to="/homepage">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/teachers">
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/assignments">
                Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contracts">
                Contracts
              </Link>
            </li>
          </ul>
        </div>

        <div className="searchBar col-3 d-flex justify-content-end">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>



    </div>
  );
}
