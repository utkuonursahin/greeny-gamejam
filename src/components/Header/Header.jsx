import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <svg className="header__logo">
        <use href="assets/sprite.svg#logo"/>
      </svg>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" className="header__nav-link" activeClassName="header__nav-link--active">
              Ana Sayfa
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/sponsors" className="header__nav-link" activeClassName="header__nav-link--active">
              Sponsorlar
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/terms" className="header__nav-link" activeClassName="header__nav-link--active">
              Kurallar
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/signup" className="header__nav-link" activeClassName="header__nav-link--active">
              İletişim ve Kayıt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
