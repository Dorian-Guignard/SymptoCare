import "./MenuNavigation.css";

function MenuNavigation(){
return (
  <div className="MenuNavigation">
    <div className="sideFlap">
      <div id="navTabUl">
        <ul>
          <li className="navTab">
            <div className="icon-text">
              <img
                src="/icons/lanalyse-des-donnees.png"
                alt="Image"
                className="icon"
              />
              Dashboard
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img
                src="/icons/ordre-du-jour.png"
                alt="Image"
                className="icon"
              />
              Mon carnet
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/symptome.png" alt="Image" className="icon" />
              Symptômes
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img
                src="/icons/application-de-messagerie.png"
                alt="Image"
                className="icon"
              />
              Messagerie
            </div>
          </li>
          <li className="navTab">
            <div className="icon-text">
              <img src="/icons/temps.png" 
              alt="Image" 
              className="icon" />
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
