import React from "react";
import "../styles/Resume.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showResumeState } from "../Atoms";
import { NavBar } from "./NavBar";

export const Resume = (): JSX.Element => {
  const showResume = useRecoilValue(showResumeState);
  console.log(showResume);

  return (
    <div className="resume">
      <p>Resume</p>
    </div>
  );
};
