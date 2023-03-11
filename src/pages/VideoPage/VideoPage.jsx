import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./VideoPage.scss";
import Video from "../../components/Video/Video";

export default function VideoPage({ videos }) {
  const { id } = useParams();
  const [activeVideo, setActiveVideo] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=b1525f0b-9828-4377-bb48-efb4b801d035`
      )
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
