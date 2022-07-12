import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="row navbar nav-bg">
        <div>
          <img src="school_logo.png" alt="school_logo"></img>
        </div>

        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i class="fa fa-user" aria-hidden="true"></i> Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Assignments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contracts
              </a>
            </li>
          </ul>
        </div>

        <div className="searchBar">
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
