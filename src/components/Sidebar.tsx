import React from "react";
// import ri from ri
import { RiRainbowFill } from "react-icons/ri";

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

  const handleShowDashboard = () => {
    setShowDashboard(true);

    if (showDashboard) {
      setShowAbout(false);
      setShowResume(false);
      setShowContact(false);
    }
  };

  const handleShowAbout = () => {
    setShowAbout(!showAbout);

    if (showAbout) {
      setShowDashboard(false);
      setShowResume(false);
      setShowContact(false);
    } else {
      setShowDashboard(true);
    }
  };

  const handleShowResume = () => {
    setShowResume(!showResume);

    if (showResume) {
      setShowDashboard(false);
      setShowAbout(false);
      setShowContact(false);
    } else {
      setShowDashboard(true);
    }
  };

  const handleShowContact = () => {
    setShowContact(!showContact);

    if (showContact) {
      setShowDashboard(false);
      setShowResume(false);
      setShowAbout(false);
    } else {
      setShowDashboard(true);
    }
  };

  return (
    <div className="sideBar">
      <h2 onClick={handleShowDashboard}>Work</h2>
      <h2 onClick={handleShowAbout}>About</h2>
      {/* <h2>
        <RiRainbowFill />
      </h2> */}
      <h2 onClick={handleShowResume}>Resume</h2>
      <h2 onClick={handleShowContact}>Contact</h2>
    </div>
  );
};
