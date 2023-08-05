import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <nav>
        <ul className="navtab__link-list">
          <li>
            <a className="navtab__link" href="#about">
              О проекте
            </a>
          </li>
          <li>
            <a className="navtab__link" href="#techs">
              Технологии
            </a>
          </li>
          <li>
            <a className="navtab__link" href="#aboutme">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
