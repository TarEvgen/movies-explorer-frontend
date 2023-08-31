import "./FilterCheckbox.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function FilterCheckbox({ shortFilmFilter }) {
  const location = useLocation();

  const [checked, setChecked] = useState(
    location.pathname === "/movies"
      ? JSON.parse(localStorage.getItem("checked")) || false
      : JSON.parse(localStorage.getItem("checkedSave")) || false
  );

  function onChanged() {
    setChecked(!checked);

    if (location.pathname === "/movies") {
      localStorage.setItem("checked", JSON.stringify(!checked));
    } else {
      localStorage.setItem("checkedSave", JSON.stringify(!checked));
    }

    shortFilmFilter();
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
