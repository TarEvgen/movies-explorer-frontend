import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cards, onSearchMovies,  c, text}) { 
  
  return (
    <>
      <SearchForm onSearchMovies={onSearchMovies} text={text}/>
      <MoviesCardList cards={cards} c={c} />
    </>
  );
}



export default Movies;
