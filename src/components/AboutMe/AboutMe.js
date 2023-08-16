import "./AboutMe.css";

import Foto from "../../images/foto.png";

function AboutMe() {
  return (
    <section id="aboutme" className="about-me">
      <h2 className="title title_me">Студент</h2>
      <div className="about-me__block">
        <div className="about-me__info">
          <h3 className="about-me__name">Евгений</h3>
          <p className="about-me__activity">
            <nobr>Фронтенд-разработчик,</nobr> 36 лет
          </p>
          <p className="about-me__description">
            Я&nbsp;родился в&nbsp;поселке Улькан Иркутской области, живу
            в&nbsp;Красноярске, закончил факультет механической технологии
            деревообработки СибГТУ. У&nbsp;меня есть жена, сын и&nbsp;дочь.
            Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно
            начал кодить. С&nbsp;2012 года работал в&nbsp;сфере производства
            мебели. В&nbsp;2023 прошёл курс по&nbsp;веб-разработке, начал
            заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/TarEvgen"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__foto" alt="фото профиля" src={Foto}></img>
      </div>
    </section>
  );
}

export default AboutMe;
