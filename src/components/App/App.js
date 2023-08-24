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
import { getValue } from "@testing-library/user-event/dist/utils";

//import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isOpenMenuNavigation, setOpenMenuNavigation] = useState(false);
  const [cards, setCard] = useState([]);

  const [c, setC] = useState([]);

  const [text, setText] = useState('');

useEffect(()=>{
    if (localStorage.getItem('movies') ) {
      const film = JSON.parse(localStorage.getItem('movies'))
      const requestText = JSON.parse(localStorage.getItem('index'))
     console.log(film, 'movies!!!!!')
     console.log(requestText, 'requestText!!!!!')
     setC(film)
     setText(requestText)
     
    }else{
      console.log('нет в хранилище')
      
    }
   
  },[])
   
  console.log(c, 'cccc')
  

  function openMenuNavigation() {
    setOpenMenuNavigation(true);
  }

  function closeMenuNavigation() {
    setOpenMenuNavigation(false);
  }

  const filterMovies = (res, index) => {


   return res.filter(({nameRU}) =>nameRU.toLowerCase().includes(index.toLowerCase()))

  }
  
  
  

  function SearchMovies (index) {

    console.log(index, 'index долетело')

  
  moviesApi.getAllCards()
.then((res) => {

 
  

  
   
const movies = filterMovies(res, index)


  



  setCard(movies)
  
  
  localStorage.setItem('movies', JSON.stringify(movies))
  localStorage.setItem('index', JSON.stringify(index))
 
 
  

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
              <Movies cards={ cards } c={c}  onSearchMovies={SearchMovies} text={text} />
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
