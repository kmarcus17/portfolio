import React from "react";
import "../styles/About.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showAboutState, showDashboardState } from "../Atoms";
export const About = (): JSX.Element => {
  const showAbout = useRecoilValue(showAboutState);

  return (
    <div className="about">
      {showAbout && (
        <div>
          <p>Hi! I'm Katherine</p>
          <p>I'm a student at Brown University studying computer science.</p>
          <p>
            I'm passionate about accesibility, good design, and design thinking
          </p>
        </div>
      )}
    </div>
  );
};
