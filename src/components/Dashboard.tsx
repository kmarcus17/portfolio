import React from "react";
import "../styles/Dashboard.css";

import { NavBar } from "./NavBar";
import { Outlet, Link } from "react-router-dom";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <Link to="/projects/development" style={{ textDecoration: "none" }}>
          <div
            className="projectGridItem"
            id="development"
            style={{ backgroundColor: "#CFF5E7" }}
          >
            <p>
              {" "}
              <b>Development</b>
            </p>
          </div>
        </Link>
        <Link to="/projects/connectthespots" style={{ textDecoration: "none" }}>
          <div
            className="projectGridItem"
            id="ConnectTheSpots"
            style={{ backgroundColor: "#A0E4CB" }}
            // style={{ backgroundColor: "#8EC3B0" }}
          >
            <p>
              {" "}
              <b>ConnectTheSpots</b>
            </p>
          </div>
        </Link>

        <Link to="/projects/personas" style={{ textDecoration: "none" }}>
          <div
            className="projectGridItem"
            id="personas"
            style={{ backgroundColor: "#59C1BD" }}
          >
            <p>
              <b>Personas</b>
            </p>
          </div>
        </Link>
        <Link to="/projects/redesign" style={{ textDecoration: "none" }}>
          <div
            className="projectGridItem"
            id="responsiveRedesign"
            style={{ backgroundColor: "#0D4C92" }}
          >
            <p>
              {" "}
              <b>Responsive Redesign</b>
            </p>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
