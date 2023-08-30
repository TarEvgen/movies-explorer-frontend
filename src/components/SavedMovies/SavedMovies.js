import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function SavedMovies({ cards, onSearchMovies,  text, status, isCardsMoviesSave, onCardDelete, statusMovies }) {


/*
  useEffect(()=>{
   
    getCardSaveMovies() 


  },[])
  */

 
  




  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} statusMovies={statusMovies} />
      <MoviesCardList isCardsMoviesSave={isCardsMoviesSave} onCardDelete={onCardDelete}/>
      <Footer />
      
    </>
  );
}

export default SavedMovies;
