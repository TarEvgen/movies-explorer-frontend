import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import * as MainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [isCardsMoviesSave, setCardsMoviesSave] = useState([]);

  const [statusMovies, setStatusMovies] = useState(false);

  const [isLoading, setLoading] = useState(
    localStorage.getItem("jwt") ? false : true
  );

  const [isStatusError, setStatusError] = useState(false);

  const [moviesAll, setMoviesAll] = useState(
    JSON.parse(localStorage.getItem("moviesAll")) || []
  );
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isServerRes, setServerRes] = useState("");

  useEffect(() => {
    checkToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([moviesApi.getAllMovies(), MainApi.loadDataUser()])
        .then(([dataMovies, dataUser]) => {
          setMoviesAll(dataMovies);
          setCurrentUser(dataUser);
          localStorage.setItem("moviesAll", JSON.stringify(dataMovies));
          setLoading(true);
        })
        .catch((err) => alert(err));
    }
  }, [isLoggedIn]);

  const checkToken = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      MainApi.getCheckToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);

            navigate(location);
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => alert(err));
    }
  };

  function openMenuNavigation() {
    setOpenMenuNavigation(true);
  }

  function closeMenuNavigation() {
    setOpenMenuNavigation(false);
  }

  const handelRegister = ({ name, email, password }) => {
    return MainApi.register(name, email, password)
      .then((res) => {
        handleLogin({ email: email, password: password });

        navigate("/movies");
      })
      .catch(() => {
        setStatusError(true);
      });
  };

  const outProfile = (e) => {
    setLoggedIn(false);
    localStorage.clear();

    navigate("/");
  };

  function handleCardSave(card) {
    const userId = currentUser._id;

    MainApi.saveCard(card, userId)
      .then((newCard) => {
        setCardsMoviesSave(isCardsMoviesSave.concat(newCard));

        setStatusMovies({ status: true, card: newCard });
      })
      .catch((err) => alert(err));
  }

  function handleCardDelete(cardData) {
    MainApi.deleteCard(cardData._id)
      .then((res) => {
        setCardsMoviesSave((state) =>
          state.filter((c) => c._id !== cardData._id)
        );

        setStatusMovies({ status: false, card: res });
      })
      .catch((err) => alert(err));
  }

  function getCardSaveMovies() {
    if (isLoggedIn && currentUser._id) {
      MainApi.getSaveCardsMovies().then((cardsMoviesSave) => {
        const cardsMoviesSaveUser = cardsMoviesSave.filter(
          (cardMovie) => cardMovie.owner === currentUser._id
        );

        setCardsMoviesSave(cardsMoviesSaveUser);
        setStatusMovies({ status: false });
      });
    }
  }

  useEffect(() => {
    getCardSaveMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, currentUser, location]);

  const handleLogin = ({ email, password }) => {
    MainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
        setStatusError(true);
      });
  };

  function handleUpdateUser(dataUser) {
    MainApi.editProfile(dataUser)
      .then((res) => {
        setCurrentUser(res.data);
        setServerRes({ message: "данные обновлены успешно" });
      })
      .catch((err) =>
        setServerRes({ error: "При обновлении профиля произошла ошибка." })
      );
  }

  const filterMovies = (searchBar) => {
    if (searchBar.length === 0) {
      if (location.pathname === "/movies") {
        return [];
      } else {
        const checkedlocalStorage = JSON.parse(
          localStorage.getItem("checkedSave")
        );
        if (checkedlocalStorage) {
          const moviesFilter = isCardsMoviesSave.filter(
            ({ nameRU, nameEN }) =>
              nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
              nameEN.toLowerCase().includes(searchBar.toLowerCase())
          );

          return moviesFilter.filter(({ duration }) => duration < 40);
        }

        return isCardsMoviesSave;
      }
    } else {
      const checkedlocalStorage =
        location.pathname === "/movies"
          ? JSON.parse(localStorage.getItem("checked"))
          : JSON.parse(localStorage.getItem("checkedSave"));

      if (checkedlocalStorage) {
        const moviesFilter = (
          location.pathname === "/movies" ? moviesAll : isCardsMoviesSave
        ).filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );

        return moviesFilter.filter(({ duration }) => duration < 40);
      } else {
        return (
          location.pathname === "/movies" ? moviesAll : isCardsMoviesSave
        ).filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );
      }
    }
  };

  function SearchMovies(searchBar) {
    location.pathname === "/movies"
      ? localStorage.setItem("valueInput", searchBar)
      : localStorage.setItem("valueInputSave", searchBar);

    const newMovies = filterMovies(searchBar);

    setFilteredMovies(newMovies);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header
          openMenu={openMenuNavigation}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
        />
        <Routes>
          <Route
            path="/"
            element={
              !isLoading ? (
                <Preloader />
              ) : (
                <>
                  <Main />
                  <Footer />
                </>
              )
            }
          />
          <Route
            path="/movies"
            element={
              !isLoading ? (
                <Preloader />
              ) : (
                <ProtectedRoute
                  element={Movies}
                  cards={filteredMovies}
                  onSearchMovies={SearchMovies}
                  onCardSave={handleCardSave}
                  isCardsMoviesSave={isCardsMoviesSave}
                  onCardDelete={handleCardDelete}
                  statusMovies={statusMovies}
                  isLoggedIn={isLoggedIn}
                ></ProtectedRoute>
              )
            }
          />
          <Route
            path="/saved-movies"
            element={
              !isLoading ? (
                <Preloader />
              ) : (
                <ProtectedRoute
                  element={SavedMovies}
                  cards={filteredMovies}
                  onSearchMovies={SearchMovies}
                  isCardsMoviesSave={filteredMovies}
                  onCardDelete={handleCardDelete}
                  statusMovies={statusMovies}
                  isLoggedIn={isLoggedIn}
                ></ProtectedRoute>
              )
            }
          />
          <Route
            path="/profile"
            element={
              !isLoading ? (
                <Preloader />
              ) : (
                <ProtectedRoute
                  element={Profile}
                  handleUpdateUser={handleUpdateUser}
                  isServerRes={isServerRes}
                  outProfile={outProfile}
                  isLoggedIn={isLoggedIn}
                ></ProtectedRoute>
              )
            }
          />

          <Route
            path="/sign-up"
            element={
              <Register
                handelRegister={handelRegister}
                isStatusError={isStatusError}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login handleLogin={handleLogin} isStatusError={isStatusError} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Navigation
          isOpen={isOpenMenuNavigation}
          closeMenu={closeMenuNavigation}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
