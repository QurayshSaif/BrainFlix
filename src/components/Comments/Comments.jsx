import "./Comments.scss";
import CommentsForm from "../CommentsForm/CommentsForm";
import UserComments from "../UserComments/UserComments";

export default function Comments({ activeVideo }) {
  return (
    <div className="comments">
      <h3 className="comments__title">
        {activeVideo?.comments?.length} Comments
      </h3>
      <CommentsForm id={activeVideo.id} />
      <UserComments commentsList={activeVideo?.comments} />
    </div>
  );
}
