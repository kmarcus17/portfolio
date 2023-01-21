import React from "react";

import { ProjectCard } from "./ProjectCard";
export const Development = (): JSX.Element => {
  const descriptionText =
    "For this project, I designed a web application used to help people find the right pet to rescue. While these are not actually adopatable pets, it was a great way for me to learn more React and Javascript. My goal for this project was implementing a clean, intuitive front-end with filtering and sorting capabilities.";

  const promptText =
    "This is your chance to develop an interactive interface, use interface components, and tie the components to an internal data state. Get even more comfortable with React by creating a list-based interface! Basically, an interface for users to select items out of a list, which then aggregates them.";

  return (
    <ProjectCard
      title={"Development"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/xRvnSDM.png"}
      contentUrl={"https://limitless-ridge-25630.herokuapp.com/"}
      contentUrl2={""}
      prompt={promptText}
      imgUrl2={"https://i.imgur.com/OYCebBP.png"}
      imgUrl3={"https://imgur.com/muD6h7c.jpg"}
      imgUrl4={"https://imgur.com/sKjdiFr.jpg"}
      imgUrl5={"https://imgur.com/3Z3jL2h.jpg"}
      imgUrl6={"https://imgur.com/vgq5rB1.jpg"}
    ></ProjectCard>
  );
};
