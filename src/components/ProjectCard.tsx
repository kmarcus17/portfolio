import React from "react";

export interface IProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  contentUrl: string;
  prompt: string;
}
export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const { title, description, imgUrl, contentUrl, prompt } = props;
  return (
    <div>
      <p></p>
    </div>
  );
};
