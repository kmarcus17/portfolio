import React from "react";
import "../styles/NavBar.css";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export const NavBar = (): JSX.Element => {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            {/* <div className="logo">
              <h1>Navbar</h1>
            </div> */}
            <div className="menu-items">
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/projects">projects</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
                {/* <li>
                  <a href="#contact">contact</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
