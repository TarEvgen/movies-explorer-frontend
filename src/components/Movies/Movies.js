import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ cards, onSearchMovies,  text, status, onCardSave, isCardsMoviesSave, onCardDelete, statusMovies}) { 
  
  console.log(isCardsMoviesSave, 'isCardsMoviesSave')

  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text} status={status} statusMovies={statusMovies} />
      <MoviesCardList cards={cards} onCardSave={onCardSave} isCardsMoviesSave={isCardsMoviesSave} onCardDelete={onCardDelete} statusMovies={statusMovies} />
      <Footer />
    </>
  );
}



export default Movies;
