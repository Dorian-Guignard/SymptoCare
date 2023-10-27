// == Import
import  MenuNavigation  from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "../ConstantTab/ConstantTab.js";
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      
      <MenuNavigation />
      <ConstantTab />
    </div>
  );
}

// == Export
export default App;
