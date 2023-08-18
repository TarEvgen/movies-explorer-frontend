import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <>
      <form className="form">
        <Link className="logo logo_form" to="/"></Link>
        <h2 className="form__name">Добро пожаловать!</h2>

        <label className="form__input-name">
          Имя
          <input className="form__input" id="name" required/>
          <span className="form__imput-error"></span>
        </label>

        <label className="form__input-name">
          E-mail
          <input className="form__input" id="e-mail" required/>
          <span className="form__imput-error"></span>
        </label>

        <label className="form__input-name">
          Пароль
          <input type="password" className="form__input" id="password" required/>
          <span className="form__imput-error"></span>
        </label>

        <button className="form__button" type="submit">
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
