import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <>
    <div className="navigation">
    <div className="navigation-menu">
      <button className="close__button"></button>
      
        <ul className="navigation__link-list">
          <li>
            <Link className="navigation__link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="navigation__link" to="/movies">
              Фильмы
            </Link>
          </li>
          <li>
            <Link className="navigation__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link className="navigation__link" to="/profile">
          Аккаунт
        </Link>
      </div>
      </div>
    </>
  );
}

export default Navigation;
