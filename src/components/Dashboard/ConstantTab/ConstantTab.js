//Mon fichier ConstantTab.js
import React from "react";
import "./ConstantTab.css";

function ConstantTab({
  tabClass,
  diastole,
  diastoleDate,
  douleurDate,
  douleur,
  temperature,
  temperatureDate,
  poids,
  poidsDate,
  systole,
  saturationDate,
  saturation,
  fc,
}) {
  let douleurSection = (
    <section>
      <div className="title-tab">
        <h1>Douleurs</h1>
      </div>
      <div className="flex-logo-text">
        <div className="logo-tab">
          {" "}
          <img
            src="/icons/IconTab/poignet.png"
            alt="Image"
            className="logo-tab douleurs"
          />
        </div>
        <div className="text-tab">
          <p>EN = {douleur}</p>
          <p className="text-date-time">{douleurDate}</p>
        </div>
      </div>
    </section>
  );
  let cardioSection = (
    <section>
      <div className="title-tab">
        <h1>Cardio</h1>
      </div>
      <div className="flex-logo-text">
        <div className="logo-tab">
          {" "}
          <img
            src="/icons/IconTab/sante.png"
            alt="ImageCoeur"
            className="logo-tab coeur"
          />
        </div>
        <div className="text-tab coeur">
          <p>
            TA = {systole}/{diastole}
          </p>
          <p>FC = {fc} bpm</p>
          <p className="text-date-time">{diastoleDate}</p>
        </div>
      </div>
    </section>
  );
  let temperatureSection = (
    <section>
      <div className="title-tab">
        <h1>Température</h1>
      </div>
      <div className="flex-logo-text">
        <div className="logo-tab">
          {" "}
          <img
            src="/icons/IconTab/thermometre.png"
            alt="ImageT°"
            className="logo-tab temperature"
          />
        </div>
        <div className="text-tab">
          <p>{temperature}°</p>
          <p className="text-date-time">{temperatureDate}</p>
        </div>
      </div>
    </section>
  );
  let poidsSection = (
    <section>
      <div className="title-tab">
        <h1>Poids</h1>
      </div>
      <div className="flex-logo-text">
        <div className="logo-tab">
          {" "}
          <img
            src="/icons/IconTab/balance.png"
            alt="Image de Balance"
            className="logo-tab poids"
          />
        </div>
        <div className="text-tab">
          <p>{poids} kg</p>
          <p className="text-date-time">{poidsDate}</p>
        </div>
      </div>
    </section>
  );
  let saturationSection = (
    <section>
      <div className="title-tab">
        <h1>Saturation</h1>
      </div>
      <div className="flex-logo-text">
        <div className="logo-tab">
          {" "}
          <img
            src="/icons/IconTab/oxymetre.png"
            alt="Image de saturometre"
            className="logo-tab saturation"
          />
        </div>
        <div className="text-tab">
          <p>{saturation} %</p>
          <p className="text-date-time">{saturationDate}</p>
        </div>
      </div>
    </section>
  );
  return (
    
    <div className={`constantTab ${tabClass}`}>
      {tabClass === "firstTab" ? douleurSection : ""}
      {tabClass === "secondTab" ? cardioSection : ""}
      {tabClass === "thirdTab" ? temperatureSection : ""}
      {tabClass === "fourthTab" ? poidsSection : ""}
      {tabClass === "fifthTab" ? saturationSection : ""}
    </div>
    
  );
}

export default ConstantTab;
