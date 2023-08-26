import { useMediaQuery } from "@uidotdev/usehooks"

import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

  ////// переменные сколько карточек добавлять добавлять
  const desctopRowCardCount = 4;
  const tabletRowCardCount = 2;
  const mobileRowCardCount = 2;

  ///// переменные сколько карточек отображать
  const desctopInittalFilmCount = 16;
  const tabletInittalFilmCount = 8;
  const mobileInittalFilmCount = 5;


function MoviesCardList({cards, c}) {
  const [isSave, setIsSave] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true)

  ///// слушаем разрешения экрана
  const desctop = useMediaQuery("(min-width: 1280px)");
  const tablet = useMediaQuery("(min-width: 768px)");
  const mobile = useMediaQuery("(min-width: 480px)");


  
    
    const initialCardCount  =  desctop ? desctopInittalFilmCount : tablet ? tabletInittalFilmCount : mobile ? mobileInittalFilmCount : mobileInittalFilmCount 




 
 


const [visibleMoviesCount, setVisibleMoviesCount] = useState(
  initialCardCount
);   //////////количество видимых карточек




  function changeState() {
    isSave ? setIsSave(false) : setIsSave(true);
  }


  const handleClick = () => {
    calculateCardCount();
    
  };

  
  const status =()=>{
    
  }
  

  const calculateCardCount = () => {

    if (desctop) {
      return setVisibleMoviesCount(visibleMoviesCount+desctopRowCardCount)
      
    }
    if (tablet) {
      return setVisibleMoviesCount(visibleMoviesCount+tabletRowCardCount)
    } else {
      return setVisibleMoviesCount(visibleMoviesCount+mobileRowCardCount)
    }
    
  }

  


  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {

cards?.slice(0, visibleMoviesCount).map((card) => (<MoviesCard cardData={card}  handleSaveClick={changeState} isSave={isSave}   />))
       
   
        }
       
      </ul>
      <button className={`button-still ${buttonStatus ?"button-still_inactive":"" }`} onClick={handleClick}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
