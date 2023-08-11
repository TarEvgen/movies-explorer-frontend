import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <>
      <div className="checkbox-block">
        <label className="checkbox" for="checkbox-short-films">
          <input
            className="checkbox__input"
            id="checkbox-short-films"
            type="checkbox"
          ></input>
          <span className="checkbox__name">Короткометражки</span>
        </label>
      </div>
    </>
  );
}

export default FilterCheckbox;
