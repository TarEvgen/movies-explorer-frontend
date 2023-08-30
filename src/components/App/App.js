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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"; 
//import { getValue } from "@testing-library/user-event/dist/utils";

import * as MainApi from "../../utils/MainApi";



//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false); /////////////проверка логина, типа если вошел то тру)))

  const [isCardsMoviesSave, setCardsMoviesSave] = useState([]);/////////// Карточки которые сохранил пользователь

  const [statusMovies, setStatusMovies] = useState(false)


  
  

  const [moviesAll, setMoviesAll] = useState(
    JSON.parse(localStorage.getItem("moviesAll")) || []
  );
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isServerRes, setServerRes ] = useState("");

  ////////////////////////// Кнопка еще
 
  useEffect(() => {
    checkToken();
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


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
          
          
          
          setMoviesAll(dataMovies);
          setCurrentUser(dataUser);
          localStorage.setItem("moviesAll", JSON.stringify(dataMovies));

        })
        .catch((err) => alert(err));
     
        
    }
  }, [isLoggedIn]);


  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
 
    if (jwt) {
  
      
      MainApi
        .getCheckToken(jwt)
        .then((res) => {
          if (res) {
            
            setLoggedIn(true);
            setCurrentUser(res)
            
         
           navigate(location);
          } else {

          setLoggedIn(false);
          }
        })
        .catch((err) => alert(err));
    }
  };



  








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
    
    
    return MainApi
      .register(name, email, password)
      .then((res) => {

        handleLogin  ({email: email, password: password })



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
  setLoggedIn(false)

  
  localStorage.removeItem('jwt')
  localStorage.removeItem('moviesAll')
  localStorage.removeItem('checked')
  localStorage.removeItem('valueInput')
  navigate("/");
 }


 ///////////////////////////////// сохранение фильмов

 function handleCardSave(card) {

  

const userId = currentUser._id

  /*const isLiked = card.likes.some((i) => i === currentUser._id);*/
  MainApi
    .saveCard(card, userId)
    .then((newCard) => {
     //debugger
      //setCardsMoviesSave((state) => state.filter((c) => c.id !== card.id))
     /* setCardsMoviesSave((state) =>

        state.map((c) => (c.id === card.id ? newCard : c)))*/
        setCardsMoviesSave(isCardsMoviesSave.concat(newCard)) 
        //setFilteredMovies
    
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
 
  

  MainApi
      .deleteCard(cardData._id)
      .then((res) => {
      
        
       
        setCardsMoviesSave((state) => state.filter((c) => c._id !== cardData._id))


        setStatusMovies({status:false, card: res})
        //setCard((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => alert(err));



}




//////////////////// Вернуть все карточки
function getCardSaveMovies () {

if (isLoggedIn && currentUser._id) {
  MainApi.getSaveCardsMovies()
.then((cardsMoviesSave) => {
  
  const cardsMoviesSaveUser = cardsMoviesSave.filter((cardMovie) => cardMovie.owner === currentUser._id)


  setCardsMoviesSave(cardsMoviesSaveUser)
  setStatusMovies({status:false})
  

})

}


}


useEffect(() => {
  getCardSaveMovies();

},[isLoggedIn, currentUser, location])


//////////////////////////////


  ///////////////////////////////////

  ///////////////////// авторизация
  const handleLogin = ({email, password}) => {
   
    
    MainApi
      .authorize(email, password)
      .then((res) => {
       // setUserEmail(email);
    
       
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
     
        
        //closeAllPopups();
      })
      .catch((err) => setServerRes({error: "При обновлении профиля произошла ошибка."}));
  }


  //////////////////////////////

  


  //// функция фильтраци по строке поиска и чекбоксу

  const filterMovies = (searchBar) => {
   
   
    if (searchBar.length === 0) {
     
     if (location.pathname === "/movies" )
     
     {
      
      
      return []
    
    
    } 
     
     
     
     else  {
      //debugger
      const checkedlocalStorage = JSON.parse(localStorage.getItem("checkedSave"))
      if (checkedlocalStorage) {

        const moviesFilter = isCardsMoviesSave.filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );

        return moviesFilter.filter(({ duration }) => duration < 40);


      }
      
      return isCardsMoviesSave


      }
   
   
    } else {



      const checkedlocalStorage =    location.pathname === "/movies" ?   JSON.parse(localStorage.getItem("checked")) : JSON.parse(localStorage.getItem("checkedSave"))



      if (checkedlocalStorage) {
        const moviesFilter = (location.pathname === "/movies" ?moviesAll: isCardsMoviesSave).filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())
        );

        return moviesFilter.filter(({ duration }) => duration < 40);
      } else {


        return (location.pathname === "/movies" ?moviesAll: isCardsMoviesSave).filter(
          ({ nameRU, nameEN }) =>
            nameRU.toLowerCase().includes(searchBar.toLowerCase()) ||
            nameEN.toLowerCase().includes(searchBar.toLowerCase())



        );
      }
    }
  
  
  
  };

 

  
  //// функция поиска фильмов
  function SearchMovies(searchBar) {

    location.pathname === "/movies" ? localStorage.setItem("valueInput", searchBar) : localStorage.setItem("valueInputSave", searchBar)

    

    
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
            <ProtectedRoute
            element={Movies}
            cards={filteredMovies}  
            onSearchMovies={SearchMovies} 
            onCardSave={handleCardSave} 
            isCardsMoviesSave={isCardsMoviesSave}
            onCardDelete={handleCardDelete}
            statusMovies={statusMovies}
            isLoggedIn={isLoggedIn}>
            </ProtectedRoute>
          }
          

        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={ SavedMovies } 
              cards={filteredMovies} 
              onSearchMovies={SearchMovies} 
              isCardsMoviesSave={filteredMovies} 
              onCardDelete={handleCardDelete}
              statusMovies={statusMovies}
              isLoggedIn={isLoggedIn}
              >
         
         </ProtectedRoute>
     }

           

          
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
          
          element={
            
              Profile 
           
          }
          handleUpdateUser={handleUpdateUser} 
          isServerRes={isServerRes} 
          outProfile={outProfile}
          isLoggedIn={isLoggedIn}

          >

          </ProtectedRoute>

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
