import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="left_header">
        <div className="logo">
          <img src="/img/fb-logo.svg" />
        </div>

        <div className="search">
          <img className="search_icon" src="/img/search.png" />
          <input
            className="search_input"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="middle_header">
        <div className="header_option header_option--active">
          <img src="/img/home.png" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/flag.png" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/video.jpg" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/storefront.png" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/people.jpg" alt="" />
        </div>
      </div>
      <div className="right_header">
        <div className="header_option">
          <img src="/img/avatar.jpg" alt="" />
          <h4>Mag Kissi</h4>
        </div>
        <div className="header_option">
          <img src="/img/plus.png" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/forum.png" alt="" />
        </div>
        <div className="header_option">
          <img src="/img/notification.png" alt="" />
        </div>
        <div className="header_option down_arrow">
          <img src="/img/downArrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
