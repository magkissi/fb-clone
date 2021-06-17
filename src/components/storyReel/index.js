import React from "react";
import "./storyReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/laptop1.jpg"
      />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/laptop2.jpg"
      />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/laptop3.png"
      />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/laptop4.jpg"
      />
      <Story
        profileSrc="/img/avatar.jpg"
        title="benji"
        image="/img/laptop5.jpg"
      />
      {/*story*/}
      {/*story*/}
      {/*story*/}
      {/*story*/}
    </div>
  );
}

export default StoryReel;
