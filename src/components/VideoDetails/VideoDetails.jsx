import "./VideoDetails.scss";
import ViewIcon from "../../assets/icons/views.svg";
import LikeIcon from "../../assets/icons/likes.svg";

export default function VideoDetails({
  title,
  channel,
  views,
  timestamp,
  likes,
  description,
}) {
  // function that converts Unix timestamp to MM/DD/YYYY format
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedDate = `${formattedMonth}/${formattedDay}/${year}`;
    return formattedDate;
  }
  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <article className="video-details__info">
        <div className="video-details__info-container">
          <span className="video-details__text video-details__text--subtitle">
            By {channel}
          </span>
          <span className="video-details__text">{formatDate(timestamp)}</span>
        </div>
        <div className="video-details__info-container">
          <div className="video-details__icon-container video-details__icon-container--view">
            <img
              className="video-details__icon video-details__icon--view"
              src={ViewIcon}
              alt="View Icon"
            />
            <span className="video-details__text">{views}</span>
          </div>
          <div className="video-details__icon-container">
            <img className="video-details__icon" src={LikeIcon} alt="" />
            <span className="video-details__text">{likes}</span>
          </div>
        </div>
      </article>

      <p>{description}</p>
    </section>
  );
}
