import React from "react";
import "../styles/Sidebar.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  showAboutState,
  showDashboardState,
  showResumeState,
  showContactState,
} from "../Atoms";
export const Sidebar = (): JSX.Element => {
  const [showResume, setShowResume] = useRecoilState(showResumeState);
  const [showContact, setShowContact] = useRecoilState(showContactState);

  const [showAbout, setShowAbout] = useRecoilState(showAboutState);

  const [showDashboard, setShowDashboard] = useRecoilState(showDashboardState);

  return (
    <div className="sideBar">
      <p
        onClick={() => {
          setShowDashboard(!showDashboard);
        }}
      >
        Projects
      </p>
      <p
        onClick={() => {
          setShowAbout(!showAbout);
        }}
      >
        About
      </p>
      <p
        onClick={() => {
          setShowResume(!showResume);
        }}
      >
        Resume
      </p>
      <p
        onClick={() => {
          setShowContact(!showContact);
        }}
      >
        Contact
      </p>
    </div>
  );
};
