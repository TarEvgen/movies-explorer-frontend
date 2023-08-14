import { Link } from "react-router-dom";

import "./HeaderMovies.css";

function HeaderMovies({openMenu}) {


 

  return (
    
          <header className="header header_movies">
          <div className="logo"></div>
          
            <ul className="header__link-list header__link-list_page-movies">
              
              <li><Link className="header__link header__link_page-movies" to="/movies">Фильмы</Link></li>
              <li><Link className="header__link header__link_page-save-movies" to="/saved-movies">Сохранённые фильмы</Link></li>
            </ul>
            <Link className="header__link header__link_page-profile" to="/profile">Аккаунт</Link>
            <button className="header__button-menu" onClick={openMenu}></button>
          
          </header>
        
    
  );
}

export default HeaderMovies;
