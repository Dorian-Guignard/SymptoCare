import "./MenuNavigation.css";
import { Link } from "react-router-dom";

function MenuNavigation(){
return (
  <div className="MenuNavigation">
    <div className="sideFlap">
      <div className="title-symptocare-menu">
        <img
          src="/icons/LogoSymptoCare-removebg-preview.png"
          alt="Image"
          className="icon symptoCareLogo"
        />
        <h1 className="mainTitle">SymptoCare</h1>
      </div>

      <div id="navTabUl">
        <ul>
          <Link to="/">
            <li className="navTab">
              <div className="icon-text">
                <img src="/icons/menu.png" alt="Image" className="icon" />
                Tableau de bord
              </div>
            </li>
          </Link>
          <Link to="/mon-carnet">
            <li className="navTab">
              <div className="icon-text">
                <img
                  src="/icons/livre-medical.png"
                  alt="Image"
                  className="icon monCarnet"
                />
                Mon carnet
              </div>
            </li>
          </Link>
          <Link to="/symptomes">
            <li className="navTab">
              <div className="icon-text">
                <img src="/icons/eclair.png" alt="Image" className="icon" />
                Symptômes
              </div>
            </li>
          </Link>
          <Link to="/messagerie">
            <li className="navTab">
              <div className="icon-text">
                <img src="/icons/email.png" alt="Image" className="icon" />
                Messagerie
              </div>
            </li>
          </Link>
          <Link to="/historique">
            <li className="navTab">
              <div className="icon-text">
                <img src="/icons/contracter.png" alt="Image" className="icon" />
                Historique
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
);
};

export default MenuNavigation;
