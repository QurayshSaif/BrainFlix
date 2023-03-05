import "./VideoDetails.scss";

export default function VideoDetails({
  title,
  subtitle,
  views,
  date,
  likes,
  description,
}) {
  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <article className="video-details__info">
        <div className="video-details__primary-container">
          <span className="video-details__subtitle">{subtitle}</span>
          <span className="video-details__text">{views}</span>
        </div>
        <div className="video-details__secondary-container">
          <span className="video-details__text">{date}</span>
          <span className="video-details__text">{likes}</span>
        </div>
      </article>

      <p>{description}</p>
    </section>
  );
}
