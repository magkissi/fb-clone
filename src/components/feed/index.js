import React, { useState, useEffect } from "react";
import MessageSender from "../msgSender";
import StoryReel from "../storyReel";
import "./feed.css";
import Post from "../posts";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          username={post.data.username}
          timeStamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
  /*StoryReel*/
  /*messagesender*/
}

export default Feed;
