import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="title title_techs">Технологии</h2>
      <h3 className="techs__title">
        <nobr>7 технологий</nobr>
      </h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__name">HTML</li>
        <li className="techs__name">CSS</li>
        <li className="techs__name">JS</li>
        <li className="techs__name">React</li>
        <li className="techs__name">Git</li>
        <li className="techs__name">Express.js</li>
        <li className="techs__name">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
