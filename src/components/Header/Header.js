import { Route, Routes, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Routes>
        <Route
          path="/"
          element={
            <ul className="header__link-list">
              <li>
                <Link className="header__link-list" to="/sign-up">Регистрация</Link>
              </li>
              <li>
                <Link className="header__link-list header__link-list_out" to="/sign-in">Войти</Link>
              </li>
            </ul>
          }
        />
      </Routes>

      {/*
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <>
              <p className="header__link header__link_login">sdfsdsfsg</p>
              <Link
                className="header__link header__link_out"
                to="/sign-in"
                
              >
                Выйти
              </Link>
            </>
          }
        />
      </Routes>

        */}
    </header>
  );
}

export default Header;
