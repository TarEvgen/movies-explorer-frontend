import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

function MoviesCardList() {
  const [isSave, setIsSave] = useState(false);

  function changeState() {
    isSave ? setIsSave(false) : setIsSave(true);
  }

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        <MoviesCard handleSaveClick={changeState} isSave={isSave} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className="button-still">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
