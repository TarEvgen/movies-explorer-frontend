import { Link } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="page__not-found">
      <h3 className="page__title">404</h3>
      <p className="page__subtitle">Страница не найдена</p>
      <Link className="page__button-back" to="/">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
