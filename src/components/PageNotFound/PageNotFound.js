import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className="page__not-found">
      <h3 className="page__title">404</h3>
      <p className="page__subtitle">Страница не найдена</p>
      <button className="page__button-back" onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
