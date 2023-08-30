import { Link } from "react-router-dom";
import "./Login.css";

import {useFormWithValidation} from "../../Hook/useFormWithValidation"

function Login({ handleLogin }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation()

  

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleLogin(values);
    
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <Link className="logo logo_form" to="/"></Link>
        <h2 className="form__name">Рады видеть!</h2>
        <label className="form__input-name">
          E-mail
          <input type="email" className="form__input" id="email" required name="email" onChange={handleChange}/>
          <span className="form__imput-error">{errors['email']}</span>
        </label>
        <label className="form__input-name">
          Пароль
          <input type="password" className="form__input" id="password" required name="password" onChange={handleChange}/>
          <span className="form__imput-error">{errors['password']}</span>
        </label>
        <button className="form__button form__button_login" type="submit" disabled={!isValid}>
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
