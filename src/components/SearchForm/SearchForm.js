import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__search-bar">
        <input
          className="search-form__field-search"
          placeholder="Фильм"
        ></input>
        <button className="search-form__button"></button>
      </form>
      <div className="search-form__checkbox">
        <FilterCheckbox />
      </div>
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
