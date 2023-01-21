import React from "react";

import { ProjectCard } from "./ProjectCard";
export const Personas = (): JSX.Element => {
  const descriptionText =
    "Millions of people everyday pay with credit or debit cards. The cards and card readers have evolved over time, and now offer many different ways to pay. One very common credit card machine Interface, described below, is used frequently. For this project, I define two personas using research I collected through observation and interviews. I propose a storyboard portraying the process of using a card machine at the CVS on Thayer Street.";
  const promptText =
    "Step into a user’s shoes. Individually, you will observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of your personas";

  const img4 = "https://i.imgur.com/zKKEWVY.png";
  const img3 = "https://i.imgur.com/00HNMWz.png";
  const img2 = "https://i.imgur.com/sFQXhK4.png";

  return (
    <ProjectCard
      title={"Personas"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/hqc9XAO.png"}
      contentUrl={"https://sleepy-ocean-62618.herokuapp.com/"}
      contentUrl2={""}
      prompt={promptText}
      imgUrl2={img2}
      imgUrl3={img3}
      imgUrl4={img4}
      imgUrl5={"https://imgur.com/fqSBEp1.jpg"}
      imgUrl6={"https://imgur.com/97dWeLJ.jpg"}
    ></ProjectCard>
  );
};
