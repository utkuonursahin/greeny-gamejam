import {NavLink} from "react-router-dom";
function MobileMenu({isClicked,setIsClicked}) {
  return (
    <nav className={isClicked ? "mobile-menu mobile-menu--active" : "mobile-menu mobile-menu--disabled"}>
      <ul className="mobile-menu__list" onClick={() => setIsClicked(prev => !prev)} >
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/" activeClassName="mobile-menu__link--active">Ana Sayfa</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/sponsors" activeClassName="mobile-menu__link--active">Sponsorlar</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/terms" activeClassName="mobile-menu__link--active">Kurallar</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/signup" activeClassName="mobile-menu__link--active">İletişim ve Kayıt</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;