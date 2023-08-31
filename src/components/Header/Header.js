import React from "react";

import { Route, Routes, Link } from "react-router-dom";

//import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Header.css";

import HeaderMovies from "../HeaderMovies/HeaderMovies";

function Header({ openMenu, isLoggedIn, isLoading }) {
  //const currentUser = React.useContext(CurrentUserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isLoading ? (
            <></>
          ) : (
            <>
              {isLoggedIn ? (
                <HeaderMovies openMenu={openMenu} isLoggedIn={isLoggedIn} />
              ) : (
                <>
                  <header className="header">
                    <div className="logo"></div>
                    <ul className="header__link-list">
                      <li>
                        <Link className="header__link" to="/sign-up">
                          Регистрация
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="header__link header__link_out"
                          to="/sign-in"
                        >
                          Войти
                        </Link>
                      </li>
                    </ul>
                  </header>
                </>
              )}
            </>
          )
        }
      />
      <Route path="/movies" element={
      
      !isLoading ? (
        <></>
      ) :
      <HeaderMovies openMenu={openMenu} />
      
      
      
      } />
      <Route
        path="/saved-movies"
        element={
        
          !isLoading ? (
            <></>
          ) :
        
        <HeaderMovies openMenu={openMenu} />}
      />

      <Route
        path="/profile"
        element={
          

          !isLoading ? (
            <></>
          ) :


            <HeaderMovies openMenu={openMenu} />
          
        }
      />
    </Routes>
  );
}

export default Header;
