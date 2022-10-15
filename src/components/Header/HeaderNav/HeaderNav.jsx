import {NavLink} from "react-router-dom";
import {useWorkshops} from "../../../context/WorkshopsContext";
import WorkshopsPopup from "../WorkshopsPopup/WorkshopsPopup";
function HeaderNav() {
  const { isOpened, setIsOpened } = useWorkshops();
  return (
    <nav className="header__nav" aria-label="primary-navigation">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <NavLink to="/" className="header__nav-link">
            Ana Sayfa
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/sponsors" className="header__nav-link">
            Sponsorlar
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/terms" className="header__nav-link">
            Kurallar
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/signup" className="header__nav-link">
            İletişim ve Kayıt
          </NavLink>
        </li>
        <li className="header__nav-item" onClick={() => setIsOpened(prev => !prev)}>
          <NavLink to="#" className="header__nav-link highlight">
            Atölyeler
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;