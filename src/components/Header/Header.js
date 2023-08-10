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
                <Link className="header__link-list" to="/sign-up">Регистрация</Link>
              </li>
              <li>
                <Link className="header__link-list header__link-list_out" to="/sign-in">Войти</Link>
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
          </header>
        }
        
        />


      </Routes>
      
    
  );
}

export default Header;
