import React from "react";
import "./storyReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/flower.jpg"
      />
      <Story profileSrc="/img/avatar.jpg" title="benji" image="/img/ship.jpg" />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/Kwame-Nkrumah.jpg"
      />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/steve.jpg"
      />
      <Story profileSrc="/img/avatar.jpg" title="benji" image="/img/doll.jpg" />
    </div>
  );
}

export default StoryReel;
