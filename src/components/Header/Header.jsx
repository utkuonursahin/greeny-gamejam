import {useState} from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuIcon from "../MobileMenu/MobileMenuIcon/MobileMenuIcon";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <header className="header">
      <svg className="header__logo">
        <use href="assets/sprite.svg#logo"/>
      </svg>
      <MobileMenu isClicked={isClicked} setIsClicked={setIsClicked}/>
      <MobileMenuIcon isClicked={isClicked} setIsClicked={setIsClicked}/>
      <HeaderNav/>
    </header>
  );
};

export default Header;
