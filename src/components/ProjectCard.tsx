import React from "react";
import "../styles/ProjectCard.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
        {/* <p style={{ fontSize: "60px", marginBottom: "0px" }}>
          <b>{title}</b>
        </p> */}
        <h1 style={{ fontSize: "60px", marginBottom: "0px" }}>{title}</h1>
        <p style={{ fontSize: "22px" }}>
          <i>Prompt: {prompt}</i>
        </p>
        <p style={{ fontSize: "20px" }}>{description}</p>
        {contentUrl != "" && (
          <div>
            <p style={{ fontSize: "22px" }}>
              Check It Out{" "}
              <a
                href={contentUrl}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                Here
              </a>
              :
            </p>
          </div>
        )}
      </div>
      <Carousel>
        <div className="projectCardImage">
          <img src={imgUrl} width={650} />
        </div>
        <div className="projectCardCarosel">
          <p>Hello</p>
          <p>Design Considered</p>
        </div>
      </Carousel>
    </div>
  );
};
