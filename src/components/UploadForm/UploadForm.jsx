import Button from "../Button/button";
import "./UploadForm.scss";
import Publish from "../../assets/icons/publish.svg";
import UploadImg from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

export default function UploadForm() {
  return (
    <section className="upload-form">
      <h1 className="upload-form__title">Upload Video</h1>
      <div className="upload-form__form-container">
        <div className="upload-form__img-container">
          <span className="upload-form__input-label">VIDEO THUMBNAIL</span>
          <img
            className="upload-form__image"
            src={UploadImg}
            alt="riding bike thumbnail"
          />
        </div>
        <form className="upload-form__form">
          <div class="upload-form__input-container">
            <label className="upload-form__input-label" for="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload-form__input-text upload-form__input-text--name"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
            />
          </div>

          <div className="upload-form__input-container">
            <label class="upload-form__input-label" for="comment">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload-form__input-text upload-form__input-text--area"
              name="comment"
              id="comment"
              placeholder="Add a description of your video"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="upload-form__btn-container">
        <Link className="upload-form__link upload-form__link--publish" to="/">
          <button className="upload-form__btn-submit" type="submit">
            <Button text="PUBLISH" img={Publish} />
          </button>
        </Link>
        <Link className="upload-form__link" to="/">
          <div className="upload-form__cancel">CANCEL</div>
        </Link>
      </div>
    </section>
  );
}
