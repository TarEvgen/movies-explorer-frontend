import { Route, Routes, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <header className="header">
      <div className="logo"></div>
            <ul className="header__link-list">
              <li>
                <Link className="header__link" to="/sign-up">Регистрация</Link>
              </li>
              <li>
                <Link className="header__link header__link_out" to="/sign-in">Войти</Link>
              </li>
            </ul>
            </header>
    
          }
        />
        <Route
        path="/movies"
        element={
          <header className="header header_movies">
          <div className="logo"></div>
          
            <ul className="header__link-list header__link-list_page-movies">
              <li><Link className="header__link header__link_page-movies" to="/movies">Фильмы</Link></li>
              <li><Link className="header__link header__link_page-save-movies" to="/saved-movies">Сохранённые фильмы</Link></li>
            </ul>
            <Link className="header__link header__link_page-profile" to="/profile">Аккаунт</Link>
          
          </header>
        }
        
        />


      </Routes>
      
    
  );
}

export default Header;
