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

        const {
          diastoleValue,
          formattedDiastoleDate,
          formattedDouleurDate,
          douleurValue,
          temperatureValue,
          formattedTemperatureDate,
          poidsValue,
          formattedPoidsDate,
          systoleValue,
          formattedSaturationDate,
          saturationValue,
          fcValue,
          loading,
        } = DashboardData();

        return (
          <div className="app">
            <MenuNavigation />
            <ConstantTab
              douleur={douleurValue}
              douleurDate={formattedDouleurDate}
              tabClass="firstTab"
            />
            <ConstantTab
              diastole={diastoleValue}
              systole={systoleValue}
              fc={fcValue}
              diastoleDate={formattedDiastoleDate}
              tabClass="secondTab"
            />
            <ConstantTab
              temperature={temperatureValue}
              temperatureDate={formattedTemperatureDate}
              tabClass="thirdTab"
            />
            <ConstantTab
              poids={poidsValue}
              poidsDate={formattedPoidsDate}
              tabClass="fourthTab"
            />
            <ConstantTab
              saturation={saturationValue}
              saturationDate={formattedSaturationDate}
              tabClass="fifthTab"
            />
            <Graph />
            <SectionTop />
            <SectionBottom />
          </div>
        );
      };

// == Export
export default Dashboard;
