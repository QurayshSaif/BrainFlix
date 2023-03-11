import "./HomePage.scss";
// import JsonVideoDetails from "../../data/video-details.json";
// import Videos from "../../data/videos.json";

import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/Video/Video";

function HomePage({ videos }) {
  const [activeVideo, setActiveVideo] = useState({});

  useEffect(() => {
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${firstVideo.id}?api_key=b1525f0b-9828-4377-bb48-efb4b801d035`
        )
        .then((result) => {
          setActiveVideo(result.data);
        })
        .catch((error) => console.error(error));
    }
  }, [videos]);

  return <Video activeVideo={activeVideo} videos={videos} />;
}

export default HomePage;
