import React from "react";
import { DashboardData } from './DashboardData.js';
import MenuNavigation from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "./ConstantTab/ConstantTab.js";
import Graph from "./Graph/Graph.js";
import SectionTop from "./SectionTop/SectionTop.js";
import SectionBottom from "./SectionBottom/SectionBottom.js";
import "./Dashboard.css";

// == Composant App.js
function Dashboard() {
const { diastoleValue, formattedDiastoleDate, loading } = DashboardData();
  return (
    <div className="app">
      <MenuNavigation />
      <ConstantTab
        douleur={diastoleValue}
        diastoleDate={formattedDiastoleDate}
        tabClass="firstTab"
      />
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
export default Dashboard;
