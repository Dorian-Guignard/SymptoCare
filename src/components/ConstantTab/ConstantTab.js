//Mon fichier ConstantTab.js

import React from "react";
import "./ConstantTab.css";

function ConstantTab({ isSecond }) {
  const tabClass = isSecond ? "secondTab" : "";

  return <div className={`constantTab ${tabClass}`}></div>;
}

export default ConstantTab;
