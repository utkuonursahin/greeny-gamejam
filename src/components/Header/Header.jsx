import {useState} from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuIcon from "../MobileMenu/MobileMenuIcon/MobileMenuIcon";
import HeaderNav from "./HeaderNav/HeaderNav";
import {Link} from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <header className="header">
      <div className="header__logos">
        <Link to="/">
          <img className="header__logos--mascot" src="assets/main-logo.svg" alt="mascot logo"/>
        </Link>
        <Link to="/">
          <svg className="header__logos--text">
            <use href="assets/sprite.svg#logo"/>
          </svg>
        </Link>
      </div>
      <MobileMenu isClicked={isClicked} setIsClicked={setIsClicked}/>
      <MobileMenuIcon isClicked={isClicked} setIsClicked={setIsClicked}/>
      <HeaderNav/>
    </header>
  );
};

export default Header;
