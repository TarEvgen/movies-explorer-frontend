import { useMediaQuery } from "@uidotdev/usehooks";

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const desctopRowCardCount = 4;
const tabletRowCardCount = 2;
const mobileRowCardCount = 2;

const desctopInittalFilmCount = 16;
const tabletInittalFilmCount = 8;
const mobileInittalFilmCount = 5;

function MoviesCardList({
  cards,
  onCardSave,
  isCardsMoviesSave,
  onCardDelete,
  statusMovies,
}) {
  const location = useLocation();

  const desctop = useMediaQuery("(min-width: 1280px)");
  const tablet = useMediaQuery("(min-width: 768px)");
  const mobile = useMediaQuery("(min-width: 480px)");

  const initialCardCount = desctop
    ? desctopInittalFilmCount
    : tablet
    ? tabletInittalFilmCount
    : mobile
    ? mobileInittalFilmCount
    : mobileInittalFilmCount;

  const [visibleMoviesCount, setVisibleMoviesCount] =
    useState(initialCardCount);

  const handleClick = () => {
    calculateFilmCount();
  };

  const calculateFilmCount = () => {
    if (desctop) {
      return setVisibleMoviesCount(visibleMoviesCount + desctopRowCardCount);
    }
    if (tablet) {
      return setVisibleMoviesCount(visibleMoviesCount + tabletRowCardCount);
    } else {
      return setVisibleMoviesCount(visibleMoviesCount + mobileRowCardCount);
    }
  };

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {location.pathname === "/movies" ? (
          cards.length === 0 && localStorage.getItem("valueInput") ? (
            <p>Ничего не найдено</p>
          ) : (
            cards
              ?.slice(0, visibleMoviesCount)
              .map((card) => (
                <MoviesCard
                  cardData={card}
                  key={card.id}
                  onCardSave={onCardSave}
                  isCardsMoviesSave={isCardsMoviesSave}
                  onCardDelete={onCardDelete}
                  statusMovies={statusMovies}
                />
              ))
          )
        ) : isCardsMoviesSave.length === 0 &&
          localStorage.getItem("valueInput") ? (
          <p>Ничего не найдено</p>
        ) : (
          isCardsMoviesSave.map((card) => (
            <MoviesCard
              cardSave={card}
              key={card.id}
              cards={cards}
              isCardsMoviesSave={isCardsMoviesSave}
              onCardDelete={onCardDelete}
            />
          ))
        )}
      </ul>
      <button
        className={`button-still ${
          location.pathname === "/movies"
            ? visibleMoviesCount <= cards.length
              ? ""
              : "button-still_inactive"
            : "button-still_inactive"
        }`}
        onClick={handleClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
