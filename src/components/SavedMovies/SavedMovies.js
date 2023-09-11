import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({
  onSearchMovies,
  text,
  status,
  isCardsMoviesSave,
  onCardDelete,
  statusMovies,
}) {
  return (
    <>
      <SearchForm
        onSearchMovies={onSearchMovies}
        text={text}
        status={status}
        statusMovies={statusMovies}
      />
      <MoviesCardList
        isCardsMoviesSave={isCardsMoviesSave}
        onCardDelete={onCardDelete}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
