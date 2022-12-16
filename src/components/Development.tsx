import React from "react";

import { ProjectCard } from "./ProjectCard";
export const Development = (): JSX.Element => {
  const descriptionText =
    "The goal of this application is to encourage people to adopt pets by streamlining the process of finding the right fit. Information is available about each pet specifying their age, breed/size, characteristics, health status, and what type of home the pet would do well in. Users can add pets to a favorite list, which aggregates the adoption fees for the pets on the list. The value of the application is connecting people with animals who need homes instead of buying a dog through a breeder. By offering many categories to filter by and sort from, as well as sort in descending or ascending order, people have a better chance at finding the right pet for them. This makes the process overall more efficient, as well as hopefully preventing 'search burnout' that some adopters have when faced with so many factors when rescuing a pet.";
  const promptText =
    "This is your chance to develop an interactive interface, use interface components, and tie the components to an internal data state. Get even more comfortable with React by creating a list-based interface! Basically, an interface for users to select items out of a list, which then aggregates them.";
  return (
    <ProjectCard
      title={"Development"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/xRvnSDM.png"}
      contentUrl={"https://limitless-ridge-25630.herokuapp.com/"}
      prompt={promptText}
    ></ProjectCard>
  );
};
