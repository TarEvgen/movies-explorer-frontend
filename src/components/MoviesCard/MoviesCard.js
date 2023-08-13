import "./MoviesCard.css";


function MoviesCard () {
    return (
      
      <li className="card">
         <img
        className="card__img"
        src="https://i.postimg.cc/bwmYKKBf/foto.png"
        alt="Картинка фильма"
        
      />
      <h2 className="card__title-movies">33 слова о дизайне</h2>
      <p className="card__duration-movies">1ч42м</p>
      <input className="card__button-save"
        
        type="checkbox"
      ></input>
      
      
        </li>
    
      
    );
  }
  
  export default MoviesCard;