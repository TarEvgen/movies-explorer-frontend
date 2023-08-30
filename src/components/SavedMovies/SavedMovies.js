import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

function SavedMovies({ cards, onSearchMovies,  text, status, isCardsMoviesSave, onCardDelete }) {


/*
  useEffect(()=>{
   
    getCardSaveMovies() 


  },[])
  */

  console.log({ cards, onSearchMovies,  text, status, isCardsMoviesSave, onCardDelete}, "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu" )
  



  console.log(isCardsMoviesSave , 'isCardsMoviesSave')
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} />
      <MoviesCardList isCardsMoviesSave={isCardsMoviesSave} onCardDelete={onCardDelete}/>
      <Footer />
      
    </>
  );
}

export default SavedMovies;
