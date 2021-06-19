import React from "react";
import MessageSender from "../msgSender";
import StoryReel from "../storyReel";
import "./feed.css";
import Post from "../posts";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="/img/avatar.jpg"
        username="magkissi"
        message="coding is greatttttttttt"
        timeStamp="time"
        image="/img/laptop1.jpg"
      />
      <Post
        profilePic="/img/avatar.jpg"
        username="magkissi"
        message="coding is greatttttttttt"
        timeStamp="time"
        image="/img/laptop2.jpg"
      />
      <Post
        profilePic="/img/avatar.jpg"
        username="magkissi"
        message="coding is greatttttttttt"
        timeStamp="time"
        image=""
      />
    </div>
  );
  /*StoryReel*/
  /*messagesender*/
}

export default Feed;
