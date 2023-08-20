import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

function MoviesCardList({cards}) {
  const [isSave, setIsSave] = useState(false);

  function changeState() {
    isSave ? setIsSave(false) : setIsSave(true);
  }

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {cards.map((card) => (<MoviesCard cardData={card} handleSaveClick={changeState} isSave={isSave} />))}
       
      </ul>
      <button className="button-still">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
