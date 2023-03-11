import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";

export default function VideoList({ videoList, activeVideo }) {
  const inactiveVideo = videoList?.filter((video) => {
    return video.id !== activeVideo.id;
  });

  return (
    <section className="video-list">
      <div className="video-list__container">
        <h2 className="video-list__title">NEXT VIDEOS</h2>
        {inactiveVideo?.map((video) => {
          return (
            <VideoItem
              key={video.id}
              id={video.id}
              image={video.image}
              title={video.title}
              subtitle={video.channel}
            />
          );
        })}
      </div>
    </section>
  );
}
