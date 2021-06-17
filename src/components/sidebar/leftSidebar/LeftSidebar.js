import React from "react";
import "./leftSidebar.css";
import UserIcon from "../../navbar/UserIcon";

function LeftSidebar({ left_src, Icon, title }) {
  return (
    <div className="leftSidebar">
      {left_src && <UserIcon src={left_src} />}
      {Icon && <Icon />}
      <div className="leftSidebar_title">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default LeftSidebar;
