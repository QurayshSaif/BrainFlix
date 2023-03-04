// import Search from "../../assets/icons/search.svg";
import MohanIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../../assets/logo/logo.svg";
import Button from '../Button/button'
import Upload from '../../assets/icons/upload.svg'

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container"><img className="header__logo" src={Logo} alt="brainflix logo" /></div>
      <div className="header__container">
        <input className="header__search" placeholder="Search"></input>
          <img className="header__image" src={MohanIcon} alt="Mohan's Image" />
          
      <Button text="UPLOAD" img={Upload} />
      </div>
    </header>
  );
};

export default Header;
