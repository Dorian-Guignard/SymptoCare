import "./MenuNavigation.css";

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
      <div id="navTabUl">
        <ul>
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/menu.png" alt="Image" className="icon" />
              Tableau de bord
            </div>
          </li>
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
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/eclair.png" alt="Image" className="icon" />
              Symptômes
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/email.png" alt="Image" className="icon" />
              Messagerie
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/contracter.png" alt="Image" className="icon" />
              Historique
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
};

export default MenuNavigation;
