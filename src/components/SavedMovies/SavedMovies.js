import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function SavedMovies({ cards, onSearchMovies,  text, status, isCardsMoviesSave }) {


/*
  useEffect(()=>{
   
    getCardSaveMovies() 
  },[])
  */
  

  console.log(isCardsMoviesSave , 'isCardsMoviesSave')
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} />
      <MoviesCardList isCardsMoviesSave={isCardsMoviesSave}/>
    </>
  );
}

export default SavedMovies;
