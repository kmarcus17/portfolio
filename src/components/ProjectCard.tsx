import React from "react";
import "../styles/ProjectCard.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export interface IProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  contentUrl: string;
  contentUrl2?: string;
  prompt: string;
  imgUrl2?: string;
  imgUrl3?: string;
  imgUrl4?: string;
  imgUrl5?: string;
  imgUrl6?: string;
}
export const ProjectCard = (props: IProjectCardProps): JSX.Element => {
  const {
    title,
    description,
    imgUrl,
    contentUrl,
    prompt,
    imgUrl2,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    contentUrl2,
  } = props;

  // const imgLength = imgUrl5?.length ?? 0;
  // const image5: boolean = imgLength !== 0;
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
        {contentUrl == "" && (
          <div>
            <p style={{ fontSize: "22px" }}>
              This project hasn't been deployed yet!
            </p>
          </div>
        )}
        {contentUrl2 !== "" && (
          <div>
            <p style={{ fontSize: "22px" }}>
              {" "}
              <a
                href={contentUrl2}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                (<i>Another HyperMedia System I Made</i>)
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="carouselDiv">
        <Carousel>
          <div className="projectCardImage">
            <img src={imgUrl} width={650} />
          </div>
          <div className="projectCardImage">
            <img src={imgUrl2} width={650} />
          </div>

          <div className="projectCardImage">
            <img src={imgUrl3} width={650} />
          </div>
          <div className="projectCardImage">
            <img src={imgUrl4} width={650} />
          </div>
          <div className="projectCardImage">
            <img src={imgUrl5} width={650} />
          </div>
          <div className="projectCardImage">
            <img src={imgUrl6} width={650} />
          </div>
          {/* <React.Fragment>
          {imgUrl2 && (
            <div className="projectCardImage">
              <img src={imgUrl2} width={650} />
            </div>
          )}
        </React.Fragment>
        <React.Fragment>
          {imgUrl3 && (
            <div className="projectCardImage">
              <img src={imgUrl3} width={650} />
            </div>
          )}
        </React.Fragment>
        <React.Fragment>
          {imgUrl4 && (
            <div className="projectCardImage">
              <img src={imgUrl4} width={650} />
            </div>
          )}
        </React.Fragment>
        <React.Fragment>
          {imgUrl5 && (
            <div className="projectCardImage">
              <img src={imgUrl5} width={650} />
            </div>
          )}
        </React.Fragment> */}
        </Carousel>
      </div>
    </div>
  );
};
