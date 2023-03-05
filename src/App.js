import "./App.scss";
import JsonVideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

import { useState } from "react";
import Header from "./components/Header/header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const [activeVideo, setActiveVideo] = useState(JsonVideoDetails[0]);
  const onClickVideoHandler = (id) => {
    //Determine the first object that matches the id
    const selectedVideo = JsonVideoDetails.find((video) => {
      return id === video.id;
    });
    console.log(selectedVideo);
    //set this particular usestate with the selected object
    // if no object is found, it will response with {}
    setActiveVideo(selectedVideo);
  };
  return (
    <>
      <Header />
      <VideoPlayer image={activeVideo?.image || ""} />
      <VideoDetails {...activeVideo} />
      <VideoList
        onClickVideoHandler={onClickVideoHandler}
        videoList={Videos}
        activeVideo={activeVideo}
      />
    </>
  );
}

export default App;
