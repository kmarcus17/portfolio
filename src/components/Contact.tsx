import React from "react";
import "../styles/Contact.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showContactState } from "../Atoms";
import { NavBar } from "./NavBar";
import { RiPencilRuler2Fill } from "react-icons/ri";

export const Contact = (): JSX.Element => {
  // const showContact = useRecoilValue(showContactState);
  // console.log(showContact);

  return (
    <div className="contact">
      <p>
        This page is <b>under construction</b>
      </p>
      <p>(for anonymity)</p>
      <p>
        <RiPencilRuler2Fill />
      </p>
    </div>
  );
};
