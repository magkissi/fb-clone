import React, { useState } from "react";
import "./messageSender.css";
import UserIcon from "../navbar/UserIcon";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleInput2 = (e) => {
    const value = e.target.value;
    setImgUrl(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imgUrl);
    db.collection("post").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    });

    setInput("");
    setImgUrl("");
  };
  return (
    <div className="msgSender">
      <div className="msgSender_top">
        <UserIcon src={user.photoURL} />
        <form>
          <input
            placeholder={`What's on your mind?, ${user.displayName}`}
            onChange={handleInput}
            value={input}
          />
          <input
            placeholder="image URL (Optional)"
            onChange={handleInput2}
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
