import React from "react";
import "../styles/About.css";

import { NavBar } from "./NavBar";
import { RiPencilRuler2Fill } from "react-icons/ri";

export const About = (): JSX.Element => {
  return (
    <div className="about">
      <div className="about-header">
        <p>
          <b>Hi, I'm Katherine</b>
        </p>
      </div>
      <div className="about-body">
        <p>I'm a senior at Brown University studying computer science</p>
        <p>
          I'm passionate about accesibility, hypertext/hypermedia systems, and design
          thinking
        </p>
        <p>I am an incoming software engineer @ Microsoft</p>
      </div>

      {/* <p>
          This page is <b>under construction.</b>
        </p>
        <p>
          <RiPencilRuler2Fill />
        </p> */}
    </div>
  );
};
