import "./Profile.css";

function Profile() {
  return (
    <form className="form form_profile">
      <h2 className="form__name form__name_profile">Привет, Виталий!</h2>
      <label className="form__edit-name">
        Имя
        <input className="form__edit-input" id="name" placeholder="Виталий" />
      </label>
      <div className="search-form__line search-form__line_profile"></div>
      <label className="form__edit-name">
        <nobr>E-mail</nobr>
        <input
          className="form__edit-input"
          id="E-mail"
          placeholder="pochta@yandex.ru"
        />
      </label>
      <button className="button__edit-profile" type="submit">
        Редактировать
      </button>
      <button
        className="button__edit-profile button__edit-profile_out"
        type="submit"
      >
        Выйти из аккаунта
      </button>
    </form>
  );
}

export default Profile;
