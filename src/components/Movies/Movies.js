import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards, onSearchMovies, isIndex}) { 
  
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} />
      <MoviesCardList cards={cards} isIndex={isIndex} />
    </>
  );
}



export default Movies;
