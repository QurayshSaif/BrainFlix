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
    const selectedVideo = JsonVideoDetails.find((video) => {
      return id === video.id;
    });
    console.log(selectedVideo);
    setActiveVideo(selectedVideo);
  };
  return (
    <>
      <Header />
      <VideoPlayer image={activeVideo.image} />
      <VideoDetails
        title={activeVideo.title}
        subtitle={activeVideo.channel}
        views={activeVideo.views}
        date={activeVideo.timestamp}
        likes={activeVideo.likes}
        description={activeVideo.description}
      />
      <VideoList
        onClickVideoHandler={onClickVideoHandler}
        videoList={Videos}
        activeVideo={activeVideo}
      />
    </>
  );
}

export default App;
