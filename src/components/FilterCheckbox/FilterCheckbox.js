import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox({shortFilmFilter}) {
  

  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checked')) || false);


  function onChanged() {
    setChecked(!checked);
    localStorage.setItem('checked', JSON.stringify(!checked))
    shortFilmFilter()

  }




  return (
    <>
      <div className="checkbox-block">
        <label className="checkbox" for="checkbox-short-films">
          <input
            className="checkbox__input"
            id="checkbox-short-films"
            type="checkbox"
            checked={checked}
            onChange={onChanged}
          ></input>
          <span className="checkbox__name">Короткометражки</span>
        </label>
      </div>
    </>
  );
}

export default FilterCheckbox;
