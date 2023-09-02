import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";

import { useFormWithValidation } from "../../Hook/useFormWithValidation";
import { REGEX_EMAIL } from "../../utils/Constants";

function Login({ handleLogin, isStatusError }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [isBlockingSending, setBlockingSending] = useState(false);
  const [isStatusMessageError, setStatusMessageError] = useState(false);

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
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
      <form className="form" onSubmit={handleSubmit}>
        <Link className="logo logo_form" to="/"></Link>
        <h2 className="form__name">Рады видеть!</h2>
        <label className="form__input-name">
          E-mail
          <input
            type="email"
            className="form__input"
            id="email"
            pattern={REGEX_EMAIL}
            required
            name="email"
            onChange={handleChange}
          />
          <span className="form__imput-error">{errors["email"]}</span>
        </label>
        <label className="form__input-name">
          Пароль
          <input
            type="password"
            className="form__input"
            id="password"
            required
            name="password"
            onChange={handleChange}
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
          className="form__button form__button_login"
          type="submit"
          disabled={!isValid || isBlockingSending}
        >
          Войти
        </button>
        <div className="form__signin">
          <p className="form__signin-question">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="form__login-link">
            Регистрация
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
