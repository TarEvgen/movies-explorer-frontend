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
  let moviesLocalStorage = JSON.parse(localStorage.getItem("moviesAll"));
  let valueInput = JSON.parse(localStorage.getItem("valueInput"));

  console.log(moviesLocalStorage)


  const [moviesAll, setMoviesAll] = useState(moviesLocalStorage || []);

  console.log(moviesAll, 'moviesAll')

  const [searchString, setSearchString] = useState([]);



  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);

  
  
  ///////////

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

/*
  function search (evt) {
    searchString()
  }
*/

 


  function openMenuNavigation() {
    setOpenMenuNavigation(true);
  }

  function closeMenuNavigation() {
    setOpenMenuNavigation(false);
  }

  const filterMovies = (index ) => {
   
   console.log(index,"сработал фильтр" )




  return moviesAll.filter(({ nameRU }) =>
    nameRU.toLowerCase().includes(index.toLowerCase()))


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


  
  function SearchMovies(index) {
    console.log(index, "index долетело");
    localStorage.setItem("valueInput", JSON.stringify(index));
    const g = filterMovies(index)
    console.log(g, 'g')
    setSearchString(g );

    localStorage.setItem("moviesFilter", JSON.stringify(g ));
  }

  if (valueInput.length !==0) {

    console.log(valueInput, 'valeo')
   
  
  
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
                cards={searchString}
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
