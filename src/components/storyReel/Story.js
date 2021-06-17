import React from "react";
import UserIcon from "../navbar/UserIcon";
import "./story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <div className="story_userIcon">
        <UserIcon src={profileSrc} />
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default Story;
