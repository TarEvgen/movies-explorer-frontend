import "./Portfolio.css";
import ImgLink from "../../images/link-img.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__name">
          <a className="portfolio__link" href="https://github.com/TarEvgen/how-to-learn">Статичный сайт</a>
          <img className="portfolio__link-img" src={ImgLink} alt="Изображение стрелки"></img>
        </li>
        <li className="portfolio__name">
          <a className="portfolio__link" href="https://github.com/TarEvgen/russian-travel">Адаптивный сайт</a>
          <img className="portfolio__link-img" src={ImgLink} alt="Изображение стрелки"></img>
        </li>
        <li className="portfolio__name">
          <a className="portfolio__link" href="https://github.com/TarEvgen/react-mesto-auth">Одностраничное приложение</a>
          <img className="portfolio__link-img" src={ImgLink} alt="Изображение стрелки"></img>
        </li>
      </ul>
      
      
    </section>
  );
}

export default Portfolio;