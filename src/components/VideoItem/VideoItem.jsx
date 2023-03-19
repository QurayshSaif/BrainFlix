import "./VideoItem.scss";
import { Link } from "react-router-dom";

export default function VideoItem({ id, image, title, subtitle }) {
  return (
    <Link className="video-item__link" to={`/videos/${id}`}>
      <article className="video-item">
        <div className="video-item__image-container">
          <img className="video-item__image" src={image} alt={title} />
        </div>
        <div className="video-item__container">
          <h3 className="video-item__title">{title}</h3>
          <span className="video-item__sub-title">{subtitle}</span>
        </div>
      </article>
    </Link>
  );
}
