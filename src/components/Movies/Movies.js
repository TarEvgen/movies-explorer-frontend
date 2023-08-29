import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards, onSearchMovies,  text, status, onCardSave, isCardsMoviesSave}) { 
  
  console.log(isCardsMoviesSave, 'isCardsMoviesSave')

  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status}  />
      <MoviesCardList cards={cards} onCardSave={onCardSave} isCardsMoviesSave={isCardsMoviesSave}  />
    </>
  );
}



export default Movies;
