import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm() {
  return (
    <section className="search-form">
    
      <form className="search-form__search">
      <div className="search">
        <input className="search-form__field-search" placeholder="Фильм"
></input>
        <button className="search-form__button"></button>

        </div>
        <FilterCheckbox/>
      </form>
      
     
     
    </section>
  );
}

export default SearchForm