import React from "react";

import { ProjectCard } from "./ProjectCard";
export const ConnectTheSpots = (): JSX.Element => {
  const descriptionText =
    "This full-stack hypermedia system connects users through music.";
  const promptText = "Final Project for CS1951V";
  return (
    <ProjectCard
      title={"ConnectTheSpots"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/N096S8v.png"}
      contentUrl={""}
      prompt={promptText}
    ></ProjectCard>
  );
};
