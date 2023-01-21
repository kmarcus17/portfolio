import React from "react";
import "../styles/Contact.css";

import { NavBar } from "./NavBar";
import { RiRainbowFill } from "react-icons/ri";

export const Contact = (): JSX.Element => {
  return (
    <div className="contact">
      <p>
        Email me at:{" "}
        <a href="mailto:katherine_marcus@brown.edu">
          <i>katherine_marcus@brown.edu</i>
        </a>
      </p>
      <p>
        Connect with me on{" "}
        <a
          href={"https://www.linkedin.com/in/katherine-marcus/"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          LinkedIn!
        </a>
      </p>
      <p>
        <RiRainbowFill />
      </p>
    </div>
  );
};
