import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Register.css";
import { useFormWithValidation } from "../../Hook/useFormWithValidation";
import { REGEX_EMAIL } from "../../utils/Constants";

function Register({ handelRegister, isStatusError }) {
  const location = useLocation();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [isBlockingSending, setBlockingSending] = useState(false);
  const [isStatusMessageError, setStatusMessageError] = useState(false);

  console.log(isStatusError, "isStatusError");

  const handleSubmit = (e) => {
    e.preventDefault();
    handelRegister(values);
    setBlockingSending(true);
  };

  useEffect(() => {
    setBlockingSending(false);
  }, [isStatusError, values]);

  useEffect(() => {
    setStatusMessageError(true);
  }, [isStatusError]);

  useEffect(() => {
    setStatusMessageError(false);
  }, [location]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <Link className="logo logo_form" to="/"></Link>
        <h2 className="form__name">Добро пожаловать!</h2>

        <label className="form__input-name">
          Имя
          <input
            pattern="^[а-яА-ЯёЁa-zA-Z0-9\s\-]+$"
            className="form__input"
            type="text"
            id="name"
            name="name"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            required
          />
          <span className="form__imput-error">{errors["name"]}</span>
        </label>

        <label className="form__input-name">
          E-mail
          <input
            className="form__input"
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            pattern={REGEX_EMAIL}
            required
          />
          <span className="form__imput-error">{errors["email"]}</span>
        </label>

        <label className="form__input-name">
          Пароль
          <input
            type="password"
            className="form__input"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
          <span className="form__imput-error">{errors["password"]}</span>
        </label>
        <span
          className={`form__error ${
            isStatusMessageError ? "form__error_active" : ""
          }`}
        >
          Произошла ошибка, попробуй еще
        </span>
        <button
          className="form__button"
          type="submit"
          disabled={!isValid || isBlockingSending}
        >
          Зарегистрироваться
        </button>

        <div className="form__signin">
          <p className="form__signin-question">Уже зарегистрированы?</p>
          <Link to="/sign-in" className="form__login-link">
            Войти
          </Link>
        </div>
      </form>
    </>
  );
}

export default Register;
