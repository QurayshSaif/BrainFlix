import "./UserComments.scss";
import formatDate from "../../utils/formatDate";

export default function UserComments({ commentsList }) {
  return (
    <section className="comments">
      {commentsList?.map((comment) => (
        <article key={comment.id} className="comments__container">
          <div className="comment_icon-container">
            <div className="comments__icon"></div>
          </div>
          <div className="comments__main-container">
            <div className="comments__secondary-container">
              <h4 className="comments__name">{comment.name}</h4>
              <span className="comments__date">
                {formatDate(comment.timestamp)}
              </span>
            </div>
            <div className="comments__third-container">
              <p className="comments__text">{comment.comment}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
