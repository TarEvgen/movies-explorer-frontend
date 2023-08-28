import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards, onSearchMovies,  text, status, onCardSave}) { 
  
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status}  />
      <MoviesCardList cards={cards} onCardSave={onCardSave}  />
    </>
  );
}



export default Movies;
