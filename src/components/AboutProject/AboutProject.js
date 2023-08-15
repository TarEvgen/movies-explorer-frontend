import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">О проекте</h2>
      <ul className="about__project-list">
        <li className="about__project">
          <h3 className="about__project-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__project-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="about__project">
          <h3 className="about__project-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__project-description">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="project__progress-list">
        <li className="project__progress project__progress_distance">
          <p className="project__progress-name project__progress-name_end">
            1 неделя
          </p>
          <p className="project__progress-description">Back-end</p>
        </li>
        <li className="project__progress">
          <p className="project__progress-name">4 недели</p>
          <p className="project__progress-description">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
