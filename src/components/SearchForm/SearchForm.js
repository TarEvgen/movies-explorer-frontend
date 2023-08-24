import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";


function SearchForm({onSearchMovies, text}) {
  const [isIndex, setIndex] = useState("");



  function handleSearchIndex(evt) {

    localStorage.removeItem('index') 

    setIndex(evt.target.value);
  }

  console.log(isIndex, 'uu')

  function handleSubmit(e) {
    e.preventDefault();
    console.log("запрос отправлен", isIndex)
    onSearchMovies(isIndex);
    
  }


  return (
    <section className="search-form">
      <form className="search-form__search-bar"
      onSubmit={handleSubmit}
      >
        <input
          className="search-form__field-search"
          placeholder="Фильм"
          required
          onChange={handleSearchIndex}
          value={isIndex  }
        ></input>
        <button className="search-form__button" type="submit"></button>
      </form>
      <div className="search-form__checkbox">
        <FilterCheckbox />
      </div>
      <div className="line"></div>
    </section>
  );
}

export default SearchForm;
