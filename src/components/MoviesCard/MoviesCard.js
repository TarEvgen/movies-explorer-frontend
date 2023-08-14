import "./MoviesCard.css";


function MoviesCard ({handleSaveClick, isSave }) {
    return (
      
      <li className="card">
         <img
        className="card__img"
        src="https://i.postimg.cc/bwmYKKBf/foto.png"
        alt="Картинка фильма"
        
      />
      <h2 className="card__title-movies">33 слова о дизайне</h2>
      
      
    
      <button
          className={`card__save-button ${
            isSave && "card__save-button_active"
          }`}
          onClick={handleSaveClick}
          type="button"
        ></button>
     
      <p className="card__duration-movies">1ч42м</p>
      
      
      
        </li>

        
    
      
    );
  }
  
  export default MoviesCard;