import "./UserComments.scss";
import formatDate from "../../utils/formatDate";
import { API_URL } from "../../utils/api";
import axios from "axios";

export default function UserComments({ commentsList, id }) {
  const handleDelete = (commentId) => {
    const fetchComments = () => {
      axios.get(`${API_URL}/${id}`).catch((error) => console.error(error));
    };
    axios
      .delete(`${API_URL}/${id}/comments/${commentId}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => fetchComments())
      .catch((error) => console.error(error));
  };

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
              <div
                className="comments__delete-btn"
                onClick={() => handleDelete(comment.id)}
              >
                DELETE
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
