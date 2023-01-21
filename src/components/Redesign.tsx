import React from "react";

import { ProjectCard } from "./ProjectCard";
export const Redesign = (): JSX.Element => {
  const descriptionText =
    "For my UI/UX class, we were tasked with practicing the workflow of redesigning a simple website. I chose a restaurant in my hometown because I always thought its website was difficult to use and hard on the eyes. I picked the home page of their website and analyzed it based on usability and accessibility standards. I then redesigned and built a new version of this webpage.";
  const promptText =
    "The goal of this assignment is for you to practice the workflow of redesigning a simple website. You should take away the skills necessary to analyze and identify flaws in an existing interface, create low-fidelity and high-fidelity prototypes for various screen sizes, and build a responsive website based on those prototypes.";
  return (
    <ProjectCard
      title={"Redesign"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/unBTgqJ.jpg"}
      contentUrl={"https://lit-stream-02003.herokuapp.com/home.html"}
      prompt={promptText}
      contentUrl2={""}
      // imgUrl2={"https://imgur.com/ByZQvGS.jpg"}
      imgUrl2={"https://imgur.com/wUugScU.jpg"}
      imgUrl3={"https://imgur.com/ftU3UBS.jpg"}
      imgUrl4={"https://imgur.com/sJLMhiv.jpg"}
      imgUrl5={"https://imgur.com/W23VUVo.jpg"}
      imgUrl6={"https://imgur.com/I2mlLeA.jpg"}
    ></ProjectCard>
  );
};
