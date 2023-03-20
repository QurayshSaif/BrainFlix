import Comments from "../Comments/Comments";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import "./Video.scss";

const Video = ({ activeVideo, videos, setActiveVideo }) => {
  return (
    <>
      <VideoPlayer image={activeVideo?.image || ""} />
      <div className="desktop">
        <div className="desktop__details-side">
          <VideoDetails
            title={activeVideo.title}
            channel={activeVideo.channel}
            views={activeVideo.views}
            timestamp={activeVideo.timestamp}
            likes={activeVideo.likes}
            description={activeVideo.description}
          />
          <Comments activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
        </div>
        <div className="desktop__aside">
          <VideoList videoList={videos} activeVideo={activeVideo} />
        </div>
      </div>
    </>
  );
};

export default Video;
