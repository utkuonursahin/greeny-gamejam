import {NavLink} from "react-router-dom";
function MobileMenu({isClicked,setIsClicked}) {
  return (
    <nav className={`mobile-menu ${isClicked ? "mobile-menu--active" : ''}`}>
      <ul className="mobile-menu__list" onClick={() => setIsClicked(prev => !prev)} >
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/">Ana Sayfa</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/sponsors">Sponsorlar</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/terms">Kurallar</NavLink>
        </li>
        <li className="mobile-menu__item">
          <NavLink className="mobile-menu__link" to="/signup">İletişim ve Kayıt</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;