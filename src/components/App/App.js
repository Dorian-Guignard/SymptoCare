// Mon fichier App.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import MonCarnet from "../MonCarnet/MonCarnet";
import Dashboard from "../Dashboard/Dashboard.js";
import Symptome from '../Symptome/Symptome';
import Historique from '../Historique/Historique';
import Messagerie from '../Messagerie/Messagerie';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mon-carnet" element={<MonCarnet />} />
        <Route path="/symptomes" element={<Symptome />} />
        <Route path="/messagerie" element={<Messagerie />} />
        <Route path="/historique" element={<Historique />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
