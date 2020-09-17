import React from "react";

import "./HeaderbarSt.css";

function HeaderBar() {
  return (
    <div className="container-fluid page">
      <div className="row">
        <div className="col-sm">
          <img src="logo.png" alt="logo" className="rounded" width="250"/>
        </div>

        <div className="col-sm mt-4" align="center">
          <form action="#" method="get">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <input type="submit" hidden />
          </form>
        </div>

        <div className="col-sm mt-4" align="right">
          <a href="#">
           
          </a>
          <a href="#">
            
          </a>
        </div>
      </div>

      <div>
        <nav className="navbar navbar-expand-lg bg-success container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Riders</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Prescriptions</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-bar-item" href="#">
                <span className="navbar-brand">Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderBar;