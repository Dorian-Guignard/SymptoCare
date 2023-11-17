// Mon fichier App.js
import MenuNavigation from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "./ConstantTab/ConstantTab.js";
import Graph from "./Graph/Graph.js";
import SectionTop from "./SectionTop/SectionTop.js";
import SectionBottom from "./SectionBottom/SectionBottom.js";
import "./Dashboard.css";

// == Composant App.js
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
