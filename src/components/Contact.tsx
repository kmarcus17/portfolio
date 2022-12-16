import React from "react";
import "../styles/Contact.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showContactState } from "../Atoms";
import { NavBar } from "./NavBar";

export const Contact = (): JSX.Element => {
  // const showContact = useRecoilValue(showContactState);
  // console.log(showContact);

  return (
    <div className="contact">
      <p>Contact</p>
      <p>Contact</p>
      <p>Contact</p>
    </div>
  );
};
