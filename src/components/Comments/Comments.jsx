import "./Comments.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import UserComments from "../UserComments/UserComments";

export default function Comments({ video }) {
  return (
    <div className="comments">
      <h3 className="comments__title">{video?.comments?.length} Comments</h3>
      <CommentsForm id={video.id} />
      <UserComments commentsList={video?.comments} />
    </div>
  );
}
