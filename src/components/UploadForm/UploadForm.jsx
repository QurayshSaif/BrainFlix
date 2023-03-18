import Button from "../Button/button";
import "./UploadForm.scss";
import Publish from "../../assets/icons/publish.svg";
import UploadImg from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../../utils/api";
import axios from "axios";

export default function UploadForm({ fetchVideo }) {
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);

    const title = e.target.title.value;
    const description = e.target.description.value;

    axios
      .post(`${API_URL}`, {
        title: title,
        description: description,
      })
      .then(() => {
        fetchVideo();
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

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
        <form className="upload-form__form" onSubmit={handleSubmit}>
          <div class="upload-form__input-container">
            <label className="upload-form__input-label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload-form__input-text upload-form__input-text--name"
              required
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
            />
          </div>

          <div className="upload-form__input-container">
            <label class="upload-form__input-label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              required
              className="upload-form__input-text upload-form__input-text--area"
              name="description"
              id="description"
              placeholder="Add a description of your video"
            ></textarea>
            <div className="upload-form__btn-container">
              <div className="upload-form__link upload-form__link--publish">
                <button className="upload-form__btn-submit">
                  <Button text="PUBLISH" img={Publish} />
                </button>
              </div>

              <Link className="upload-form__link" to="/">
                <div className="upload-form__cancel">CANCEL</div>
              </Link>
            </div>
          </div>
          {successMessage && (
            <div className="upload-form__success">
              Video successfully uploaded!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
