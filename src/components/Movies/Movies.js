import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards }) {
  return (
    <>
      <SearchForm  />
      <MoviesCardList cards={cards} />
    </>
  );
}

export default Movies;
