import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <form className="form">
        <div className="logo logo__form"></div>
        <h2 className="form__name">Добро пожаловать!</h2>

        <label className="form__input-name">
          Имя
          <input className="form__input" id="name" />
          <span className="form__imput-error"></span>
        </label>

        <label className="form__input-name">
          E-mail
          <input className="form__input" id="e-mail" />
          <span className="form__imput-error"></span>
        </label>

        <label className="form__input-name">
          Пароль
          <input type="password" className="form__input" id="password" />
          <span className="form__imput-error"></span>
        </label>

        <button className="form__button" type="submit">
          Зарегистрироваться
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
