import React from "react";
import "../styles/Resume.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showResumeState } from "../Atoms";
export const Resume = (): JSX.Element => {
  const showResume = useRecoilValue(showResumeState);
  console.log(showResume);

  return (
    <div className="resume">
      {showResume && (
        <div>
          <p>Resume</p>
        </div>
      )}
    </div>
  );
};
