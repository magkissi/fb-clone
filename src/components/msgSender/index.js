import React, { useState } from "react";
import "./messageSender.css";
import UserIcon from "../navbar/UserIcon";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleInput = (e) => {
    const value = e.target.vale;
    setInput(value);
    setImgUrl(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setImgUrl("");
  };
  return (
    <div className="msgSender">
      <div className="msgSender_top">
        <UserIcon src="/img/avatar.jpg" />
        <form>
          <input
            placeholder={`What's on your mind?`}
            onChange={handleInput}
            value={input}
          />
          <input
            placeholder="image URL (Optional)"
            onChange={handleInput}
            value={imgUrl}
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="msgSender_bottom">
        <div className="msgSender_options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="msgSender_options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="msgSender_options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
