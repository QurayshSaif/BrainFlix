import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Video from "../../components/Video/Video";
import { API_URL, API_KEY } from "../../utils/api";

export default function VideoPage({ videos }) {
  const { id } = useParams();
  const [activeVideo, setActiveVideo] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}/${id}?api_key=${API_KEY}`)
      .then((result) => {
        setActiveVideo(result.data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      <Video activeVideo={activeVideo} videos={videos} />
    </>
  );
}
