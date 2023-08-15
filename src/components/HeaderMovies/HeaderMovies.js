import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import "./HeaderMovies.css";

function HeaderMovies({ openMenu }) {
  const location = useLocation();

  return (
    <header className="header header_movies">
      <Link className="logo" to="/"></Link>

      <ul className="header__link-list header__link-list_page-movies">
        <li>
          <Link
            className={`header-movies__link ${
              location.pathname === "/movies"
                ? "header-movies__link_active"
                : ""
            }`}
            to="/movies"
          >
            Фильмы
          </Link>
        </li>

        <li>
          <Link
            className={`header-movies__link ${
              location.pathname === "/saved-movies"
                ? "header-movies__link_active"
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
      <button className="header__button-menu" onClick={openMenu}></button>
    </header>
  );
}

export default HeaderMovies;
