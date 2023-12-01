// Mon fichier Symptome.js

import MenuNavigation from "../MenuNavigation/MenuNavigation";
import "./Symptome.css";

// == Composant
function Symptome() {

  let symptomeInformation = (
    <div className="card">
      <h1 id="title-MonCarnet">Mes Constantes et Symptomes du jour</h1>
      <p className="part-card-form">TA</p>
      <ul>
        <li></li>
      </ul>
      <p className="part-card-form">FC</p>
      <ul>
        <li> </li>
      </ul>
      <p className="part-card-form">T°</p>
      <ul>
        <li></li>
      </ul>
      <p className="part-card-form">Douleur</p>
      <ul>
        <li></li>
      </ul>
      <p className="part-card-form">Saturation</p>
      <ul>
        <li></li>
      </ul>
      <p className="part-card-form">Poids</p>
      <ul>
        <li></li>
      </ul>
      <p className="part-card-form">IMC</p>
      <ul>
        <li></li>
      </ul>
    </div>
  );

  return (
    <div className="Symptome">
      <MenuNavigation />
      {symptomeInformation}
    </div>
  );
}

// == Export
export default Symptome;
