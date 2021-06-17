import React from "react";
import "./navbar.css";

function UserIcon({ src }) {
  return (
    <div>
      <img id="avatar" src={src} alt="" />
    </div>
  );
}

export default UserIcon;
