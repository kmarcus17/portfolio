import React from "react";
import "../styles/Dashboard.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showDashboardState } from "../Atoms";
import { NavBar } from "./NavBar";
import { Outlet, Link } from "react-router-dom";

export const Dashboard = (): JSX.Element => {
  const showDashboard = useRecoilValue(showDashboardState);
  console.log(showDashboard);
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <Link to="/projects/personas">
          <div
            className="projectGridItem"
            id="personas"
            style={{ backgroundColor: "#DEF5E5" }}
          >
            <p>
              <b>Personas</b>
            </p>
          </div>
        </Link>
        <Link to="/projects/redesign">
          <div
            className="projectGridItem"
            id="responsiveRedesign"
            style={{ backgroundColor: "#BCEAD5" }}
          >
            <p>
              {" "}
              <b>Responsive Redesign</b>
            </p>
          </div>
        </Link>
        <Link to="/projects/development">
          <div
            className="projectGridItem"
            id="development"
            style={{ backgroundColor: "#9ED5C5" }}
          >
            <p>
              {" "}
              <b>Development</b>
            </p>
          </div>
        </Link>
        <Link to="/projects/connectthespots">
          <div
            className="projectGridItem"
            id="ConnectTheSpots"
            style={{ backgroundColor: "#8EC3B0" }}
          >
            <p>
              {" "}
              <b>ConnectTheSpots</b>
            </p>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
