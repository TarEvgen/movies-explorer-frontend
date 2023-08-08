import "./Portfolio.css";
import ImgLink from "../../images/link-img.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__name">
          <a
            className="portfolio__link"
            href="https://github.com/TarEvgen/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              className="portfolio__link-img"
              src={ImgLink}
              alt="Изображение стрелки"
            ></img>
          </a>
        </li>
        <li className="portfolio__name">
          <a
            className="portfolio__link"
            href="https://github.com/TarEvgen/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              className="portfolio__link-img"
              src={ImgLink}
              alt="Изображение стрелки"
            ></img>
          </a>
        </li>
        <li className="portfolio__name">
          <a
            className="portfolio__link"
            href="https://github.com/TarEvgen/react-mesto-auth"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              className="portfolio__link-img"
              src={ImgLink}
              alt="Изображение стрелки"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
