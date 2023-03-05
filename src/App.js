import "./App.scss";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

import { useState } from "react";
import Header from "./components/Header/header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [activeVideo, setActiveVideo] = useState(VideoDetails[0]);
  const onClickVideoHandler = (id) => {
    const selectedVideo = VideoDetails.find((video) => {
      return id === video.id;
    });
    console.log(selectedVideo);
    setActiveVideo(selectedVideo);
  };
  return (
    <>
      <Header />
      <VideoPlayer image={activeVideo.image} />
      <VideoList
        onClickVideoHandler={onClickVideoHandler}
        videoList={Videos}
        activeVideo={activeVideo}
      />
    </>
  );
}

export default App;
