import React from "react";

import { ProjectCard } from "./ProjectCard";
export const ConnectTheSpots = (): JSX.Element => {
  const descriptionText =
    "This full-stack hypermedia system connects users through music. This project is a combination of YouTube and Soundcloud. Like YouTube, you can comment on songs, like songs, and filter by likes or date created. Like SoundCloud, timestamps are utilized in some comments, and following a link with a timestamp (if you are logged into Spotify) will change the song and seek to that timestamp. Links can be bidirectional. You can also add songs to any of your playlists, or create a new playlist (if logged into Spotify).";
  const promptText = "Final Project for CS1951V";
  return (
    <ProjectCard
      title={"ConnectTheSpots"}
      description={descriptionText}
      imgUrl={"https://i.imgur.com/N096S8v.png"}
      contentUrl={"https://connect-the-spots-auth.web.app/"}
      contentUrl2={"https://editable-nodes-hypermedia.web.app/"}
      prompt={promptText}
      imgUrl2={"https://imgur.com/LvSRgwM.jpg"}
      imgUrl3={"https://imgur.com/Jd7viym.jpg"}
      imgUrl4={"https://imgur.com/Aghby8C.jpg"}
      imgUrl5={"https://imgur.com/SBhPhHs.jpg"}
      imgUrl6={"https://imgur.com/c0mquUJ.jpg"}
    ></ProjectCard>
  );
};
