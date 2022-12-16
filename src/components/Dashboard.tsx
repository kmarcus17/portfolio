import React from "react";
import "../styles/Dashboard.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showDashboardState } from "../Atoms";
import { NavBar } from "./NavBar";

export const Dashboard = (): JSX.Element => {
  const showDashboard = useRecoilValue(showDashboardState);
  console.log(showDashboard);
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <div
          className="projectGridItem"
          id="personas"
          style={{ backgroundColor: "#DEF5E5" }}
        >
          <p>
            <b>Personas</b>
          </p>
        </div>
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
      </div>
    </div>
  );
};
