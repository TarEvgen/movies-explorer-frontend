import { Route, Routes, Link } from "react-router-dom";

import "./Header.css";

import HeaderMovies from "../HeaderMovies/HeaderMovies";

function Header({ openMenu }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <header className="header">
            <div className="logo"></div>
            <ul className="header__link-list">
              <li>
                <Link className="header__link" to="/sign-up">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link className="header__link header__link_out" to="/sign-in">
                  Войти
                </Link>
              </li>
            </ul>
          </header>
        }
      />
      <Route path="/movies" element={<HeaderMovies openMenu={openMenu} />} />
      <Route
        path="/saved-movies"
        element={<HeaderMovies openMenu={openMenu} />}
      />

      <Route
        path="/profile"
        element={
          <>
            <HeaderMovies openMenu={openMenu} />
          </>
        }
      />
    </Routes>
  );
}

export default Header;
