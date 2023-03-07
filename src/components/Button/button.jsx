import "./button.scss";

export default function Button({ text, img }) {
  return (
    <div className="button">
      <img className="button__icon" src={img} alt="upload icon" />
      <span className="button__text">{text}</span>
    </div>
  );
}
