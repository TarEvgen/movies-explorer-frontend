import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox() {
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checked')) || false);



  




  function onChange() {
    setChecked(!checked);
    localStorage.setItem('checked', JSON.stringify(!checked))
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
            onChange={onChange}
          ></input>
          <span className="checkbox__name">Короткометражки</span>
        </label>
      </div>
    </>
  );
}

export default FilterCheckbox;
