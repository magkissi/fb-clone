import React from "react";
import MessageSender from "../msgSender";
import StoryReel from "../storyReel";
import "./feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
  /*StoryReel*/
  /*messagesender*/
}

export default Feed;
