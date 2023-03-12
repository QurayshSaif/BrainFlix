import { useNavigate } from "react-router-dom";
import "./VideoItem.scss";

export default function VideoItem({ id, image, title, subtitle }) {
  const navigate = useNavigate();
  return (
    <article
      className="video-item"
      onClick={() => {
        navigate(`../videos/${id}`, { replace: true });
        window.scrollTo(0, 0);
      }}
    >
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
