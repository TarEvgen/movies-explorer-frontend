import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ handleSaveClick, isSave, cardData, onCardSave, cardSave, isCardsMoviesSave, cards  }) {
 
  const location = useLocation()

  const routMovies = location.pathname === "/movies"

  const minutes = location.pathname === "/movies" ? cardData.duration : cardSave.duration
  const hourDurationMovies =   Math.floor (minutes/60)
  const minutesDurationMovies = minutes- hourDurationMovies*60
  const timeConverter = hourDurationMovies >=1 ? `${hourDurationMovies}ч${minutesDurationMovies}м` : `${minutesDurationMovies}м`;


const saveCard = isCardsMoviesSave.find((movie) => movie.movieId === cardData.id)
console.log( saveCard, '!!!!!!!!5s') 

console.log( isCardsMoviesSave, 'isCardsMoviesSave')

  function handleClickSave() {
    //console.log('ghjbpjikj cj,snbt d rfhl kbcn')

if(!saveCard) {

  onCardSave (cardData);

}
    



  }
  
console.log(cardData.id)

  return (
    <li className="card">
      <a className="card__link" href={location.pathname === "/movies" ? cardData.trailerLink : cardSave.trailerLink} target="_blank" rel="noreferrer"><img
        className="card__img"
        src={`https://api.nomoreparties.co${location.pathname === "/movies" ? cardData.image.url : cardSave.image}`}
        alt="Картинка фильма"
      /></a>
      <h2 className="card__title-movies">{location.pathname === "/movies" ? cardData.nameRU : cardSave.nameRU
}</h2>

      <button
        className={`card__save-button ${saveCard ? "card__save-button_active" : ""}`}
        onClick={handleClickSave}
        type="button"
      ></button>
      <p className="card__duration-movies">{timeConverter}</p>
    </li>
  );
}

export default MoviesCard;
