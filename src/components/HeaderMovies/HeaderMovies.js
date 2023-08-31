import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import "./HeaderMovies.css";

function HeaderMovies({ openMenu, isLoggedIn }) {
  const location = useLocation();

  return (
    <header
      className={`header header_movies ${
        isLoggedIn ? "header_movies_profile" : ""
      }`}
    >
      <Link className="logo" to="/"></Link>

      <ul className="header__link-list header__link-list_page-movies">
        <li>
          <Link
            className={`header__link-movies ${
              location.pathname === "/movies"
                ? "header__link-movies_active"
                : ""
            }`}
            to="/movies"
          >
            Фильмы
          </Link>
        </li>

        <li>
          <Link
            className={`header__link-movies ${
              location.pathname === "/saved-movies"
                ? "header__link-movies_active"
                : ""
            }`}
            to="/saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link className="header__link header__link_page-profile" to="/profile">
        Аккаунт
      </Link>
      <button
        className={`header__button-menu ${
          isLoggedIn ? "header__button-menu_profile" : ""
        }`}
        onClick={openMenu}
      ></button>
    </header>
  );
}

export default HeaderMovies;
