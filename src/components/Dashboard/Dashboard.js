import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuNavigation from "../MenuNavigation/MenuNavigation.js";
import ConstantTab from "./ConstantTab/ConstantTab.js";
import Graph from "./Graph/Graph.js";
import SectionTop from "./SectionTop/SectionTop.js";
import SectionBottom from "./SectionBottom/SectionBottom.js";
import "./Dashboard.css";


// == Composant App.js
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const apiBackend = axios
      .get("http://localhost:8000/api/patients")
      .then((response) => {
        const patientsAPI = response.data;
        setPatients(patientsAPI);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Ensure the dependency array is empty if you want this effect to run only once



  return (
    <div className="app">
      <MenuNavigation />
      <ConstantTab douleur={patients.constant} tabClass="firstTab" />
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
