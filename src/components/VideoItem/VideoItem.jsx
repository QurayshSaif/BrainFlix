import "./VideoItem.scss";

export default function VideoItem({
  id,
  image,
  title,
  subtitle,
  onClickVideoHandler,
}) {
  return (
    <article className="video-item" onClick={() => onClickVideoHandler(id)}>
      <div className="video-item__image-container">
        <img className="video-item__image" src={image} alt={title} />
      </div>
      <div className="video-item__container">
        <h3 className="video-item__title">{title}</h3>
        <span className="video-item__sub-title">{subtitle}</span>
      </div>
    </article>
  );
}
