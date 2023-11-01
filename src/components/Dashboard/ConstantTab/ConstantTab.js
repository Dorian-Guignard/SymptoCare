//Mon fichier ConstantTab.js
import React from "react";
import "./ConstantTab.css";

function ConstantTab({ tabClass }) {
  return (
    <div className={`constantTab ${tabClass}`}>
      {tabClass === "firstTab" ? "Douleurs" : ""}
      {tabClass === "secondTab" ? "TA et FC" : ""}
      {tabClass === "thirdTab" ? "Température" : ""}
      {tabClass === "fourthTab" ? "Poids" : ""}
      {tabClass === "fifthTab" ? "Saturation" : ""}
    </div>
  );
}

export default ConstantTab;
