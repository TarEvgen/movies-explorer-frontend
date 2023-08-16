import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import "./Navigation.css";

function Navigation({ isOpen, closeMenu }) {
  const location = useLocation();

  return (
    <>
      <div className={`navigation ${isOpen ? "navigation_active" : ""}`}>
        <div className="navigation-menu">
          <button className="close" onClick={closeMenu}></button>

          <ul className="navigation__link-list">
            <li>
              <Link
                className={`navigation__link ${
                  location.pathname === "/" ? "navigation__link_active" : ""
                }`}
                to="/"
                onClick={closeMenu}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className={`navigation__link ${
                  location.pathname === "/movies"
                    ? "navigation__link_active"
                    : ""
                }`}
                to="/movies"
                onClick={closeMenu}
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                className={`navigation__link ${
                  location.pathname === "/saved-movies"
                    ? "navigation__link_active"
                    : ""
                }`}
                to="/saved-movies"
                onClick={closeMenu}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link
            className="navigation__link navigation__link_profile"
            to="/profile"
            onClick={closeMenu}
          >
            Аккаунт
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
