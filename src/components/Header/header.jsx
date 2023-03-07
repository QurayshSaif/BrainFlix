import MohanIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../../assets/logo/logo.svg";
import Button from "../Button/button";
import Upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <img className="header__logo" src={Logo} alt="brainflix logo" />
        </div>
      </Link>
      <div className="header__container">
        <input className="header__search" placeholder="Search"></input>
        <img className="header__image" src={MohanIcon} alt="Mohan's Img" />
        <Link className="button__link" to="/upload">
          <Button text="UPLOAD" img={Upload} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
