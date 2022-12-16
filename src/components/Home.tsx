import React from "react";
import "../styles/Home.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showDashboardState } from "../Atoms";
import { NavBar } from "./NavBar";
import { Outlet, Link } from "react-router-dom";

export const Homepage = (): JSX.Element => {
  // const showDashboard = useRecoilValue(showDashboardState);
  // console.log(showDashboard);
  return (
    <div>
      <div className="homePageDiv">
        <div className="welcomeHomePage">
          <h1>Welcome</h1>
        </div>
        <div className="welcomeHomePage">
          <h2>To My Portfolio</h2>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <h3>check out my projects!</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
