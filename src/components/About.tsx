import React from "react";
import "../styles/About.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showAboutState, showDashboardState } from "../Atoms";
import { NavBar } from "./NavBar";

export const About = (): JSX.Element => {
  return (
    <div className="about-wrapper ">
      <img src="https://i.imgur.com/s3YLTHS.png" width={400} height={400} />
      <div className="about">
        <p>Hi!</p>
        <p>I'm a student at Brown University studying computer science.</p>
        <p>
          I'm passionate about accesibility, good design, and design thinking
        </p>
      </div>
    </div>
  );
};
