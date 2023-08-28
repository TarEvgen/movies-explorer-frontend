import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ cards, onSearchMovies,  text, status}) {
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} />
      <MoviesCardList cards={cards}/>
    </>
  );
}

export default SavedMovies;
