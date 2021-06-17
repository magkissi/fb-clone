import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import UserIcon from "./UserIcon";

import "./navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="left_header">
        <div className="logo">
          <img src="/img/fb-logo.svg" alt="" />
        </div>

        <div className="search">
          <SearchIcon />
          <input
            className="search_input"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="middle_header">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="right_header">
        <div className="header_option">
          <UserIcon src="/img/avatar.jpg" />
          <h4>Mag Kissi</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
