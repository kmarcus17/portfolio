import React from "react";

import { ProjectCard } from "./ProjectCard";
export const ConnectTheSpots = (): JSX.Element => {
  const descriptionText =
    "Millions of people everyday pay with credit or debit cards. The cards and card readers have evolved over time, and now offer many different ways to pay. One very common credit card machine Interface, described below, is used frequently. For this project, I define two personas using research I collected through observation and interviews. I propose a storyboard portraying the process of using a card machine at the CVS on Thayer Street.";
  const promptText =
    "Step into a user’s shoes. Individually, you will observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of your personas";
  return (
    <ProjectCard
      title={"ConnectTheSpots"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/N096S8v.png"}
      contentUrl={"https://sleepy-ocean-62618.herokuapp.com/"}
      prompt={promptText}
    ></ProjectCard>
  );
};
