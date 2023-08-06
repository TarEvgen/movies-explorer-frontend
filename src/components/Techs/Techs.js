import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs">
      <h2 className="about__title about__title_techs">Технологии</h2>
      <h3 className="techs__title"><nobr>7 технологий</nobr></h3>
      <p className="techs__subtitle">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
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