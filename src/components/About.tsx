import React from "react";
import "../styles/About.css";

import { NavBar } from "./NavBar";
import { RiPencilRuler2Fill } from "react-icons/ri";

export const About = (): JSX.Element => {
  return (
    <div className="about-wrapper ">
      <div className="about">
        <p>
          <b>About Me</b>
        </p>
        <p>I'm a student at Brown University studying computer science.</p>
        <p>
          I'm passionate about accesibility, good design, and design thinking
        </p>
        <p>(This page is anonymous for now for grading)</p>
        {/* <p>
          This page is <b>under construction.</b>
        </p>
        <p>
          <RiPencilRuler2Fill />
        </p> */}
      </div>

      {/* <img
        src="https://destenouest-formation.com/wp-content/uploads/2015/09/destenouest-referent-photo2.jpg"
        width={500}
      /> */}
      {/* <img src="https://i.imgur.com/s3YLTHS.png" width={400} height={400} /> */}
      {/* https://destenouest-formation.com/wp-content/uploads/2015/09/destenouest-referent-photo2.jpg */}
    </div>
  );
};
