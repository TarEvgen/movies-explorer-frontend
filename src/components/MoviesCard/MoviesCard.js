import "./MoviesCard.css";

function MoviesCard({ handleSaveClick, isSave, cardData }) {
 

  const minutes = cardData.duration 
  const hourDurationMovies =   Math.floor (minutes/60)
  const minutesDurationMovies = minutes- hourDurationMovies*60
  const timeConverter = hourDurationMovies >=1 ? `${hourDurationMovies}ч${minutesDurationMovies}м` : `${minutesDurationMovies}м`;


  return (
    <li className="card">
      <a className="card__link" href={cardData.trailerLink} target="_blank" rel="noreferrer"><img
        className="card__img"
        src={`https://api.nomoreparties.co${cardData.image.url}`}
        alt="Картинка фильма"
      /></a>
      <h2 className="card__title-movies">{cardData.nameRU
}</h2>

      <button
        className={`card__save-button ${isSave && "card__save-button_active"}`}
        onClick={handleSaveClick}
        type="button"
      ></button>
      <p className="card__duration-movies">{timeConverter}</p>
    </li>
  );
}

export default MoviesCard;
