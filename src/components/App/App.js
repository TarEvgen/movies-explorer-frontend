import "./App.css";
import { useState, useEffect,   } from "react";
import { Routes, Route, useNavigate, useLocation} from "react-router-dom";


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
//import { getValue } from "@testing-library/user-event/dist/utils";

import * as MainApi from "../../utils/MainApi";



//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
 // console.log(location, 'history')
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false); /////////////проверка логина, типа если вошел то тру)))

  const [isCardsMoviesSave, setCardsMoviesSave] = useState([]);/////////// Карточки которые сохранил пользователь

  const [statusMovies, setStatusMovies] = useState(false)


  console.log(isCardsMoviesSave, 'isCardsMoviesSave просто в апи')

  const [moviesAll, setMoviesAll] = useState(
    JSON.parse(localStorage.getItem("moviesAll")) || []
  );
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isServerRes, setServerRes ] = useState("");

  ////////////////////////// Кнопка еще
 


  //// получение списка фильмов с апи
 /* useEffect(() => {
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
*/




  useEffect(() => {
    
    if (isLoggedIn) {
      
      Promise.all([moviesApi
        .getAllMovies(), MainApi.loadDataUser()])
        .then(([dataMovies, dataUser]) => {
          console.log(dataMovies, 'dataMovies', dataUser, 'dataUser')
          
          setMoviesAll(dataMovies);
          setCurrentUser(dataUser);
          localStorage.setItem("moviesAll", JSON.stringify(dataMovies));

        })
        .catch((err) => alert(err));
        console.log("ошибка")
    }
  }, [isLoggedIn]);


  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi
        .getCheckToken(jwt)
        .then((res) => {
          if (res) {
            console.log(res, "рес при проверки токена")
            //setLoggedIn(true);
            setCurrentUser(res)
           // setUserEmail(res.email);
            //navigate('/');
          } else {
          // setLoggedIn(false);
          }
        })
        .catch((err) => alert(err));
    }
  };



  useEffect(() => {
    checkToken();
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoggedIn])








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

/////выход из акаунта
  const outProfile = (e) =>
 {
  console.log('нажал выйти')
  localStorage.removeItem('jwt')
  localStorage.removeItem('moviesAll')
  localStorage.removeItem('checked')
  localStorage.removeItem('valueInput')
  navigate("/");
 }


 ///////////////////////////////// сохранение фильмов

 function handleCardSave(card) {
  console.log(card, 'cardcardcardcardcardcardcardcardcard')
  console.log(currentUser._id
    , 'cardcardcardcardcardcardcardcardcard')

const userId = currentUser._id

  /*const isLiked = card.likes.some((i) => i === currentUser._id);*/
  MainApi
    .saveCard(card, userId)
    .then((newCard) => {
     debugger
      //setCardsMoviesSave((state) => state.filter((c) => c.id !== card.id))
      setCardsMoviesSave((state) =>
        state.map((c) => (c.id === card.id ? newCard : c)))
     
     
        console.log(newCard, 'новая карта')
      setStatusMovies({status:true, card: newCard})

      //setFilteredMovies()
      /*setCard((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );*/
    })
    .catch((err) => alert(err));
}

/////////////////////// уудаление сохраненных фильмов

function handleCardDelete (cardData) {
  console.log(cardData, 'карта для удаления')

  MainApi
      .deleteCard(cardData._id)
      .then((res) => {
        console.log(res, "спасибо карточка всётаки удалена")
        console.log((state) => state.filter((c) => c._id !== cardData._id), "спасибо карточка всётаки удалена")
       //debugger
        setCardsMoviesSave((state) => state.filter((c) => c._id !== cardData._id))
        setStatusMovies({status:false, card: res})
        //setCard((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => alert(err));



}




//////////////////// Вернуть все карточки
function getCardSaveMovies () {
MainApi.getSaveCardsMovies()
.then((cardsMoviesSave) => {
  
  setCardsMoviesSave(cardsMoviesSave)
  console.log(cardsMoviesSave, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})
}


useEffect(() => {
  getCardSaveMovies();

},[isLoggedIn, currentUser, location])


//////////////////////////////


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
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
       // setIsSuccess(false);
       // setIsInfoTooltipOpen(true);
      });
  };

////////////////////////////
  /////////////// обновление информации о пользователи
  function handleUpdateUser(dataUser) {
    MainApi
      .editProfile(dataUser)
      .then((res) => {
        setCurrentUser(res.data);
        setServerRes({message: "данные обновлены успешно"})
       console.log(res, 'res')
        //closeAllPopups();
      })
      .catch((err) => setServerRes({error: "При обновлении профиля произошла ошибка."}));
  }


  //////////////////////////////

  


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

 
console.log(currentUser,'currentUser')
  //// функция поиска фильмов
  function SearchMovies(searchBar) {
    localStorage.setItem("valueInput", searchBar);
    const newMovies = filterMovies(searchBar);
    setFilteredMovies(newMovies);
    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              <Movies cards={filteredMovies}  onSearchMovies={SearchMovies} onCardSave={handleCardSave} isCardsMoviesSave={isCardsMoviesSave} onCardDelete={handleCardDelete}
              
              statusMovies={statusMovies}
              
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies  cards={filteredMovies} onSearchMovies={SearchMovies} isCardsMoviesSave={isCardsMoviesSave} onCardDelete={handleCardDelete}/>
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile handleUpdateUser={handleUpdateUser} isServerRes={isServerRes} outProfile={outProfile}/>
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
     </CurrentUserContext.Provider>
  );
}

export default App;
