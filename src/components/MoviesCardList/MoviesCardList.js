import MoviesCard from '../MoviesCard/MoviesCard'
import "./MoviesCardList.css";



function MoviesCardList () {
    return (
      
      <section className="movies-cards">
        <ul className="card__list">
          <MoviesCard />
          
        </ul>
      </section>
      
    );
  }
  
  export default MoviesCardList;