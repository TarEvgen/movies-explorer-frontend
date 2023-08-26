import "./App.css";
import { Routes, Route } from "react-router-dom";
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

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);
 
 
  const [moviesAll, setMoviesAll] = useState(JSON.parse(localStorage.getItem("moviesAll")) || []);
  const [filteredMovies, setFilteredMovies] = useState([]);

  

 
  



//// получение списка фильмов с апи
  useEffect(() => {
    if (moviesAll.length === 0 ){
    moviesApi
      .getAllMovies()
      .then((dataMovies) => {
        localStorage.setItem("moviesAll", JSON.stringify(dataMovies));
        setMoviesAll(dataMovies)  
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


  const checkboxStatus =JSON.parse(localStorage.getItem('checked')) 
 
  const [checkboxStatusа, setcheckboxStatus] = useState(checkboxStatus);
  

  if (checkboxStatusа) {
    console.log('переключатель включен')
  } else {
    console.log('переключатель выыыключен')
  }






//// функция фильтраци по строке поиска и чекбоксу

const filterMovies = (searchBar) => {



   
  

if(searchBar.length===0) {
  console.log(searchBar.length, 'стоп!!!')

  return([])

}else{

const g =JSON.parse(localStorage.getItem('checked'))

  /*
if(JSON.parse(localStorage.getItem('checked'))){
  console.log('h!!!!!!!!!!!!')

}else{
  console.log('&&&&&&&&')
}
 */

if (g) {
  const h = moviesAll.filter(({ nameRU, nameEN
  }) =>

    nameRU.toLowerCase().includes(searchBar.toLowerCase())|| nameEN
    .toLowerCase().includes(searchBar.toLowerCase()))
    
    console.log(h, '111111111111111111111')
    console.log(moviesAll, '111111111111111111111')

    return h.filter(({ duration }) => duration < 40);

}else{


 return moviesAll.filter(({ nameRU, nameEN
 }) =>

 

  nameRU.toLowerCase().includes(searchBar.toLowerCase()) || nameEN
  .toLowerCase().includes(searchBar.toLowerCase()))

}
 


   

  }
  /*  if (JSON.parse(localStorage.getItem("checked"))) {*
      console.log("чекбокс тру");
      const moviesF = moviesLocalStorage.filter(({ duration }) => duration < 60);
      return moviesF.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(index.toLowerCase())
      );
    } else {
      console.log("чекбокс лож");
      return moviesLocalStorage.filter(({ nameRU }) =>
        nameRU.toLowerCase().includes(index.toLowerCase())
      );
    }
*/

  };


//// функция поиска фильмов
  function SearchMovies(searchBar) {
    localStorage.setItem("valueInput", (searchBar));
    const newMovies = filterMovies(searchBar)
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
              <Movies
                cards={filteredMovies}
                onSearchMovies={SearchMovies}
                
                
              />
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
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
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
