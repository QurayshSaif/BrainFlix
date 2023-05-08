import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/Video/Video";
import { API_URL } from "../../utils/api";
import ReactLoading from "react-loading";

function HomePage({ videos }) {
  const [activeVideo, setActiveVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videos && videos.length > 0) {
      const firstVideo = videos[0];
      axios
        .get(`${API_URL}/${firstVideo.id}`)
        .then((result) => {
          setActiveVideo(result.data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  }, [videos]);

  if (loading) {
    return <ReactLoading type={"spin"} color={"#0095FF"} className="loading" />;
  }

  return <Video activeVideo={activeVideo} videos={videos} />;
}

export default HomePage;
