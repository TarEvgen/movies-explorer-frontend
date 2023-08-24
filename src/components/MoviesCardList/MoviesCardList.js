import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from "react";

function MoviesCardList({cards, c}) {
  const [isSave, setIsSave] = useState(false);

  function changeState() {
    isSave ? setIsSave(false) : setIsSave(true);
  }

  /*
  console.log(cards, 'isIndex')
  console.log(cards.map((card) =>(card.nameRU.includes(isIndex)))  )
*/
 //const v = cards.find({isIndex})

  


  //console.log(v
   // )z


console.log(c, 'c!')
console.log(cards.length, 'cards!')


  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {

      
       
     cards.length === 0 ? 
 
     c.map((card) => (<MoviesCard cardData={card}  handleSaveClick={changeState} isSave={isSave}  />))
         : 
        
        
        cards.map((card) => (<MoviesCard cardData={card}   />))
        
        }
       
      </ul>
      <button className="button-still">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
