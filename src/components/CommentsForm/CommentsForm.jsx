import "./CommentsForm.scss";
import MohanIcon from "../../assets/images/Mohan-muruge.jpg";
import CommentsIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/button";

export default function CommentsForm() {
  return (
    <div className="comments-form">
      <div className="comments-form__icon-container">
        <img
          className="comments-form__icon"
          src={MohanIcon}
          alt="Mohan's img"
        />
      </div>
      <div className="comments-form__container">
        <form className="comments-form__form">
          <div className="comments-form__input-container">
            <label className="comments-form__input-label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments-form__input-text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button type="button" className="comments-form__button">
            <Button img={CommentsIcon} text="COMMENT" />
          </button>
        </form>
      </div>
    </div>
  );
}
