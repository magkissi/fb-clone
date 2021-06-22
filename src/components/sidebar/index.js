import React from "react";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import "./sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <LeftSidebar left_src={user.photoURL} title={user.displayName} />
      <LeftSidebar
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <LeftSidebar Icon={EmojiFlagsIcon} title="Pages" />
      <LeftSidebar Icon={PeopleIcon} title="Friends" />
      <LeftSidebar Icon={ChatIcon} title="Messenger" />
      <LeftSidebar Icon={StorefrontIcon} title="Marketplace" />
      <LeftSidebar Icon={VideoLibraryIcon} title="Videos" />
      <LeftSidebar Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
