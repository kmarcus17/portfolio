import React from "react";
import "../styles/ProjectCard.css";
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
    <div className="projectCard">
      <div className="projectCardInfo">
        <p style={{ fontSize: "60px", marginBottom: "0px" }}>
          <b>{title}</b>
        </p>
        <p style={{ fontSize: "22px" }}>
          <i>Prompt: {prompt}</i>
        </p>
        <p style={{ fontSize: "22px" }}>{description}</p>
        <p style={{ fontSize: "22px" }}>
          Check It Out{" "}
          <a href={contentUrl} target="_blank">
            Here
          </a>
          :
        </p>
      </div>
      <div className="projectCardImage">
        <img src={imgUrl} width={750} />
      </div>
    </div>
  );
};
