import "./MoviesCard.css";

function MoviesCard({ handleSaveClick, isSave, cardData }) {
  return (
    <li className="card">
      <img
        className="card__img"
        src={`https://api.nomoreparties.co${cardData.image.url}`}
        alt="Картинка фильма"
      />
      <h2 className="card__title-movies">33 слова о дизайне</h2>

      <button
        className={`card__save-button ${isSave && "card__save-button_active"}`}
        onClick={handleSaveClick}
        type="button"
      ></button>
      <p className="card__duration-movies">{`${Math.floor(cardData.duration/60)}`    }</p>
    </li>
  );
}

export default MoviesCard;
