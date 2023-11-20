//Mon fichier ConstantTab.js
import React from "react";
import "./ConstantTab.css";


function ConstantTab({ tabClass, douleur, diastoleDate }) {
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
          <p className="text-date-time">{diastoleDate}</p>
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
          <p>TA = 125/75</p>
          <p>FC = 76</p>
          <p className="text-date-time">31/12/2023</p>
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
          <p>37,5°</p>
          <p className="text-date-time">31/12/2023</p>
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
          <p>67,5 kg</p>
          <p className="text-date-time">31/12/2023</p>
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
          <p>99 %</p>
          <p className="text-date-time">31/12/2023</p>
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
