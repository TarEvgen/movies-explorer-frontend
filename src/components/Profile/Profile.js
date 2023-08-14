import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <form className="form form_profile">
    
    <h2 className="form__name form__name_profile">Привет, Виталий!</h2>
     
     
     
     
      <label className="form__edit-name">
        Имя
        <input className="form__edit-input" id="name" placeholder="Виталий" />
         
    </label>


    <label className="form__edit-name">
    <nobr>E-mail</nobr>
        <input className="form__edit-input" id="name" placeholder="pochta@yandex.ru" />
         
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
  );
}

export default Profile;