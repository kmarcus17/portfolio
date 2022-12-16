import React from "react";

import { ProjectCard } from "./ProjectCard";
export const Redesign = (): JSX.Element => {
  const descriptionText =
    "Millions of people everyday pay with credit or debit cards. The cards and card readers have evolved over time, and now offer many different ways to pay. One very common credit card machine Interface, described below, is used frequently. For this project, I define two personas using research I collected through observation and interviews. I propose a storyboard portraying the process of using a card machine at the CVS on Thayer Street.";
  const promptText =
    "The goal of this assignment is for you to practice the workflow of redesigning a simple website. You should take away the skills necessary to analyze and identify flaws in an existing interface, create low-fidelity and high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes.";
  return (
    <ProjectCard
      title={"Redesign"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/unBTgqJ.jpg"}
      contentUrl={"https://young-eyrie-18271.herokuapp.com/"}
      prompt={promptText}
    ></ProjectCard>
  );
};
