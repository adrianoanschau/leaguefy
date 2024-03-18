import "./styles.sass";

export default function SoccerLeftMenu() {
  return (
    <ul className="menu">
      <li className="menu-title">
        <span className="flag flag-br"></span>
        <span>Brazil</span>
      </li>
      <li>
        <a>Série A</a>
      </li>
      <li className="menu-title">
        <span className="flag flag-gb-eng"></span>
        <span>England</span>
      </li>
      <li>
        <a>Premier League</a>
      </li>
      <li className="menu-title">
        <span className="flag flag-de"></span>
        <span>Germany</span>
      </li>
      <li>
        <a>Bundesliga</a>
      </li>
    </ul>
  );
}
