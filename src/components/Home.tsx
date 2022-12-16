import React from "react";
import "../styles/Home.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showDashboardState } from "../Atoms";
import { NavBar } from "./NavBar";
export const Homepage = (): JSX.Element => {
  // const showDashboard = useRecoilValue(showDashboardState);
  // console.log(showDashboard);
  return (
    <div>
      <div className="homePageDiv">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};
