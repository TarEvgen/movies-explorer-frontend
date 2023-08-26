import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";

function SearchForm({ onSearchMovies }) {
  const [isIndex, setIndex] = useState(
    localStorage.getItem("valueInput") || ""
  );


  function handleSearchIndex(evt) {
   const valueInput = evt.target.value;
   setIndex(valueInput)
   
  }


 
  function shortFilmFilter() {
    console.log('сработал чекбокс')
    onSearchMovies(isIndex);
  }




  useEffect(()=>{
    onSearchMovies(isIndex);
    
  },[])
  

  function handleSubmit(e) {
    e.preventDefault();
   onSearchMovies(isIndex);
  }

  return (
    <section className="search-form">
      <form className="search-form__search-bar" onSubmit={handleSubmit}>
        <input
          className="search-form__field-search"
          placeholder="Фильм"
          required
          onChange={handleSearchIndex}
          value={isIndex}
        ></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <div className="search-form__checkbox">
        <FilterCheckbox shortFilmFilter={shortFilmFilter} />
      </div>
      <div className="line"></div>
    </section>
  );
}

export default SearchForm;
