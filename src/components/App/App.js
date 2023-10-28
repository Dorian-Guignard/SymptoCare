// Mon fichier App.js
import  MenuNavigation  from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "../ConstantTab/ConstantTab.js";
import './App.css';

// == Composant
function App() {
  return (
    <div className="app">
      <MenuNavigation />
      <ConstantTab />
      <ConstantTab isSecond />
    </div>
  );
}

// == Export
export default App;
