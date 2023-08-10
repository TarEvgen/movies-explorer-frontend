import "./SearchForm.css";


function SearchForm() {
  return (
    <section className="search-form">
      
      <form className="search-form__search">
        <input className="search-form__field-search" placeholder="Фильм"
></input>
        <button className="search-form__button"></button>


      </form>
     
    </section>
  );
}

export default SearchForm