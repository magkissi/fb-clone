import React, { useState } from "react";
import "./post.css";
import UserIcon from "../navbar/UserIcon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutLineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";

function Post({ profilePic, image, username, timeStamp, message }) {
  const [like, setLike] = useState(0);

  const handleLikeClick = () => {
    setLike(like + 1);
  };

  return (
    <div className="post">
      <div className="post_top">
        <UserIcon className="post_avatar" src={profilePic} />

        <div className="post_topInfo">
          <div>
            <h3>{username}</h3>
          </div>
          <div>
            <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        {!image ? "" : <img src={image} alt="" />}
      </div>
      <div className="post_options">
        <div className="post_option" onClick={handleLikeClick}>
          {like === 0 ? "" : <p id="countLike">{like}</p>}

          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutLineIcon />
          <p>Comment</p>
        </div>
        <div className="post_option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
