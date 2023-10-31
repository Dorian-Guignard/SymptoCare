// Mon fichier App.js
import  MenuNavigation  from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "../ConstantTab/ConstantTab.js";
import './App.css';
import Graph from '../Graph/Graph.js';
import SectionTop from '../SectionTop/SectionTop.js';
import SectionBottom from '../SectionBottom/SectionBottom.js';

// == Composant
function App() {
  return (
    <div className="app">
      <MenuNavigation />
      <ConstantTab tabClass="firstTab" />
      <ConstantTab tabClass="secondTab" />
      <ConstantTab tabClass="thirdTab" />
      <ConstantTab tabClass="fourthTab" />
      <ConstantTab tabClass="fifthTab" />
      <Graph />
      <SectionTop />
      <SectionBottom />
    </div>
  );
}

// == Export
export default App;
