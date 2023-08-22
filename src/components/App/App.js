import "./App.css";
import { Routes, Route, } from "react-router-dom";
import { useState,  useEffect } from "react";
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

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);
  const [cards, setCard] = useState([]);

  const [isIndex, setIndex] = useState([]);

  function openMenuNavigation() {
    setOpenMenuNavigation(true);
  }

  function closeMenuNavigation() {
    setOpenMenuNavigation(false);
  }


  function SearchMovies (index) {

    console.log(index, 'index долетело')

  
  moviesApi.getAllCards()
.then((res) => {


  setCard(res)
  setIndex(index)
 

})
.catch((err) => alert(err));



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
              <Movies cards={ cards } isIndex={isIndex} onSearchMovies={SearchMovies} />
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
