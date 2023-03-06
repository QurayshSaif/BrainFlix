import "./Comments.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import UserComments from "../UserComments/UserComments";

export default function Comments({ video }) {
  return (
    <div className="comments">
      <h3>{video.comments.length} Comments</h3>
      <CommentsForm />
      <UserComments commentsList={video.comments} />
    </div>
  );
}
