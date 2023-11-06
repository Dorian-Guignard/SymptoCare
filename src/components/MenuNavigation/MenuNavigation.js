import "./MenuNavigation.css";
import { Link } from "react-router-dom";

function MenuNavigation(){
return (
  <div className="MenuNavigation">
    <div className="sideFlap">
      <div id="title">
        <img
          src="/icons/LogoSymptoCare-removebg-preview.png"
          alt="Image"
          className="icon symptoCareLogo"
        />
        <h1 className="mainTitle">SymptoCare</h1>
      </div>

<div className="container-login">
      <button class="Btn2">
        <div class="sign">
          <svg viewBox="0 0 512 512">
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
          </svg>
        </div>
        <div class="text">Login</div>
      </button>
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

        <div className="container-logout">
          <button class="Btn">
            <div class="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div class="text">Logout</div>
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default MenuNavigation;
