import "./VideoPlayer.scss";

export default function VideoPlayer({ image, onClickVideoHandler }) {
  return (
    <section className="video">
      <video controls className="video__player" poster={image}></video>
    </section>
  );
}
