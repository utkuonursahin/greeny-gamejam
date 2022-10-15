import {NavLink} from "react-router-dom";
import {useWorkshops} from "../../context/WorkshopsContext";
function MobileMenu({isClicked,setIsClicked}) {
  const {setIsOpened} = useWorkshops();
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
        <li className="mobile-menu__item">
          <a className="mobile-menu__link" to="#" onClick={() => setIsOpened(prev => !prev)}>Atölyeler</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;