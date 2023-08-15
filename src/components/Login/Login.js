import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <form className="form">
        <Link className="logo logo__form" to="/"></Link>
        <h2 className="form__name">Рады видеть!</h2>
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
        <button className="form__button form__button_login" type="submit">
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
