import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Navigation from "../Navigation/Navigation";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { moviesApi } from "../../utils/MoviesApi";
import { getValue } from "@testing-library/user-event/dist/utils";

import * as MainApi from "../../utils/MainApi";



//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  const [moviesAll, setMoviesAll] = useState(
    JSON.parse(localStorage.getItem("moviesAll")) || []
  );
  const [filteredMovies, setFilteredMovies] = useState([]);

  ////////////////////////// Кнопка еще
 


  //// получение списка фильмов с апи
  useEffect(() => {
    if (moviesAll.length === 0) {
      moviesApi
        .getAllMovies()
        .then((dataMovies) => {
          localStorage.setItem("moviesAll", JSON.stringify(dataMovies));
          setMoviesAll(dataMovies);
        })
        .catch((err) => alert(err));
    }
  }, []);

  ///// открытие бургер менб
  function openMenuNavigation() {
    setOpenMenuNavigation(true);
  }

  //// закрытие бургер меню
  function closeMenuNavigation() {
    setOpenMenuNavigation(false);
  }

  ///////////////////////////////// регистрация

  const handelRegister = ({name ,email, password}) => {
    console.log({name ,email, password}, 'hkhkh!!!!!')
    return MainApi
      .register(name, email, password)
      .then((res) => {
       // setIsSuccess(true);
       // setIsInfoTooltipOpen(true);
        navigate("/movies");
      })
      .catch(() => {
        //setIsInfoTooltipOpen(true);
        //setIsSuccess(false);
      });
  };



  ///////////////////////////////////

  ///////////////////// авторизация
  const handleLogin = ({email, password}) => {
    console.log(email, password, 'email, password')
    MainApi
      .authorize(email, password)
      .then((res) => {
       // setUserEmail(email);
       console.log(res, 'res')
        localStorage.setItem("jwt", res.token);
       // setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
       // setIsSuccess(false);
       // setIsInfoTooltipOpen(true);
      });
  };

////////////////////////////
  



  //// функция фильтраци по строке поиска и чекбоксу

  const filterMovies = (searchBar) => {
    if (searchBar.length === 0) {
      return [];
    } else {
      const checkedlocalStorage = JSON.parse(localStorage.getItem("checked"));

      if (checkedlocalStorage) {
        const moviesFilter = moviesAll.filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );

        return moviesFilter.filter(({ duration }) => duration < 40);
      } else {
        return moviesAll.filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );
      }
    }
  };

 

  //// функция поиска фильмов
  function SearchMovies(searchBar) {
    localStorage.setItem("valueInput", searchBar);
    const newMovies = filterMovies(searchBar);
    setFilteredMovies(newMovies);
    
  }

  return (
    <div className="App">
      <Header openMenu={openMenuNavigation} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies cards={filteredMovies} onSearchMovies={SearchMovies} />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />
        <Route path="/sign-up" element={<Register handelRegister={handelRegister} />} />
        <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Navigation
        isOpen={isOpenMenuNavigation}
        closeMenu={closeMenuNavigation}
      />
    </div>
  );
}

export default App;
