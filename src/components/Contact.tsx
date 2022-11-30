import React from "react";
import "../styles/Contact.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { showContactState } from "../Atoms";
export const Contact = (): JSX.Element => {
  const showContact = useRecoilValue(showContactState);
  console.log(showContact);

  return (
    <div className="contact">
      {showContact && (
        <div>
          <p>Contact</p>
          <p>Contact</p>
          <p>Contact</p>
        </div>
      )}
    </div>
  );
};
