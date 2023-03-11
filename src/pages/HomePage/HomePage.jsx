import "./HomePage.scss";
import JsonVideoDetails from "../../data/video-details.json";
// import Videos from "../../data/videos.json";

import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";

function HomePage() {
  const [activeVideo, setActiveVideo] = useState(JsonVideoDetails[0]);
  const [videos, setVideos] = useState([]);
  const onClickVideoHandler = (id) => {
    //Determine the first object that matches the id
    const selectedVideo = JsonVideoDetails.find((video) => {
      return id === video.id;
    });
    //sets this particular usestate with the selected object, if no object is found, it will response with {}
    setActiveVideo(selectedVideo);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=b1525f0b-9828-4377-bb48-efb4b801d035"
      )
      .then((result) => {
        setVideos(result.data);
      })
      .catch((error) => console.error(error));
  });
  return (
    <>
      <Header />
      <VideoPlayer image={activeVideo?.image || ""} />
      <div className="desktop">
        <div className="desktop__details-side">
          <VideoDetails {...activeVideo} />
          <Comments video={activeVideo} />
        </div>
        <div className="desktop__aside">
          <VideoList
            onClickVideoHandler={onClickVideoHandler}
            videoList={videos}
            activeVideo={activeVideo}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
