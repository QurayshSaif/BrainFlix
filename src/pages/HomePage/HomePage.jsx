import "./HomePage.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/Video/Video";
import { API_URL, API_KEY } from "../../utils/api";

function HomePage({ videos }) {
  const [activeVideo, setActiveVideo] = useState({});

  useEffect(() => {
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      axios
        .get(`${API_URL}/${firstVideo.id}?api_key=${API_KEY}`)
        .then((result) => {
          setActiveVideo(result.data);
        })
        .catch((error) => console.error(error));
    }
  }, [videos]);

  return <Video activeVideo={activeVideo} videos={videos} />;
}

export default HomePage;
