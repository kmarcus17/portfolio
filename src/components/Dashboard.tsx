import React from "react";
import "../styles/Dashboard.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showDashboardState } from "../Atoms";

export const Dashboard = (): JSX.Element => {
  const showDashboard = useRecoilValue(showDashboardState);
  console.log(showDashboard);
  return (
    <div>
      {showDashboard && (
        <div className="dashboard">
          <div className="projectGridItem">
            <p>Personas</p>
          </div>
          <div className="projectGridItem">
            <p>Responsive Redesign</p>
          </div>
          <div className="projectGridItem">
            <p>Development</p>
          </div>
          <div className="projectGridItem">
            <p>Other</p>
          </div>
        </div>
      )}
    </div>
  );
};
