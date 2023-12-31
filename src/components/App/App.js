// Mon fichier App.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "../Log/Logout/Logout";
import MonCarnet from "../MonCarnet/MonCarnet";
import Dashboard from "../Dashboard/Dashboard.js";
import Symptome from '../Symptome/Symptome';
import Historique from '../Historique/Historique';
import Messagerie from '../Messagerie/Messagerie';
import Login from '../Log/Login/Login';
import UserContextProvider from "../../Utils/providers/UserContext";



// == Composant
function App() {
  


  let loginIcon, logoutIcon;

const currentUrl = window.location.href;
  // Vérifier si l'URL se termine par "/login"
  if (currentUrl.endsWith("/login")) {
    // Si c'est le cas, définir les classes à null
    logoutIcon = null;
    loginIcon = null;
  }
  else{
loginIcon = (
  <Link to="/login">
    <div className="app-container-login">
      <button className="Btn2" id="Btn2" >
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
          </svg>
        </div>
        <div className="text">Login</div>
      </button>
    </div>
  </Link>
);

logoutIcon = (
  <div className="app-container-logout">
    <button className="Btn" id="Btn">
      <div className="sign">
        <svg viewBox="0 0 512 512">
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
        </svg>
      </div>
      <div className="text">Logout</div>
    </button>
  </div>
);
}
  return (
    <div className="app">
      <UserContextProvider>
        {loginIcon}
        {logoutIcon}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/mon-carnet" element={<MonCarnet />} />
          <Route path="/symptomes" element={<Symptome />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/historique" element={<Historique />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
  }

// == Export
export default App;
