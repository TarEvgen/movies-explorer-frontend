import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards, onSearchMovies,  text, status, onCardSave, isCardsMoviesSave, onCardDelete, statusMovies}) { 
  
  console.log(isCardsMoviesSave, 'isCardsMoviesSave')

  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} statusMovies={statusMovies} />
      <MoviesCardList cards={cards} onCardSave={onCardSave} isCardsMoviesSave={isCardsMoviesSave} onCardDelete={onCardDelete} statusMovies={statusMovies} />
    </>
  );
}



export default Movies;
