// Mon fichier App.js
import './App.css';
import { Route, Routes } from "react-router-dom";
import MonCarnet from "../MonCarnet/MonCarnet";
import Dashboard from "../Dashboard/Dashboard.js";

// == Composant
function App() {
  return (
    <div className="app">
     
      <Routes>
        <Route path="/" element={ <Dashboard />}/>
        <Route path="/mon-carnet" element={<MonCarnet />} />
        <Route path="/symptomes" />
        <Route path="/messagerie" />
        <Route path="/historique" />
      </Routes>
    </div>
  );
}

// == Export
export default App;
