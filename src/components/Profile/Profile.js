import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../Hook/useFormWithValidation";
import { useState, useEffect } from "react";

function Profile({ handleUpdateUser, isServerRes, outProfile }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);
  console.log(currentUser);

  const [isUserName, setUserName] = useState(currentUser.name);
  const [isUserEmail, UserEmail] = useState(currentUser.email);

  useEffect(() => {
    setUserName(currentUser.name);
    UserEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    setUserName(values.name);

    UserEmail(values.email);
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = values.name || currentUser.name;
    const email = values.email || currentUser.email;
    handleUpdateUser({ name, email });
    resetForm();
  };

  return (
    <form className="form form_profile" onSubmit={handleSubmit}>
      <h2 className="form__name form__name_profile">{`Привет, ${currentUser.name}!`}</h2>
      <label className="form__edit-name">
        Имя
        <input
          className="form__edit-input"
          id="name"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={isUserName}
          onChange={handleChange}
          required
        />
      </label>
      <span className="form__edit-error">{errors["name"]}</span>
      <div className="line line_profile"></div>
      <label className="form__edit-name">
        <nobr>E-mail</nobr>
        <input
          className="form__edit-input"
          id="email"
          name="email"
          placeholder="E-mail"
          value={isUserEmail}
          required
          type="email"
          onChange={handleChange}
        />
      </label>
      <span className="form__edit-error">{errors["email"]}</span>
      <span
        className={`form__edit-message ${
          isServerRes.error
            ? "form__edit-message_error"
            : "form__edit-message_success"
        }`}
      >
        {isServerRes.error ? isServerRes.error : isServerRes.message}
      </span>
      <button className="button-edit" type="submit" disabled={!isValid}>
        Редактировать
      </button>
      <button
        className="button-edit button-edit_out"
        type="button"
        onClick={outProfile}
      >
        Выйти из аккаунта
      </button>
    </form>
  );
}

export default Profile;
