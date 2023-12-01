// Mon fichier MonCarnet.js
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import "./MonCarnet.css";
import React, { useState } from "react";


function MonCarnet() {
  const [antecedents, setAntecedents] = useState([""]); // Initialisation avec un champ vide
  const [treatments, setTreatments] = useState([""]); // Initialisation avec un champ vide
  const [formData, setFormData] = useState({
      mainDisease: "",
      treatments: [],
      antecedents: [],
    });


const addAntecedent = () => {
  const updatedAntecedents = [...antecedents, ""];
  setAntecedents(updatedAntecedents);
  setFormData({ ...formData, antecedents: updatedAntecedents });
};

const addTreatment = () => {
  const updatedTreatments = [...treatments, ""];
  setTreatments(updatedTreatments);
  setFormData({ ...formData, treatments: updatedTreatments });
};

const handleAntecedentChange = (index, value) => {
  const updatedAntecedents = [...antecedents];
  updatedAntecedents[index] = value;
  setAntecedents(updatedAntecedents);

  const updatedFormData = { ...formData, antecedents: updatedAntecedents };
  setFormData(updatedFormData);
};

const handleTreatmentChange = (index, value) => {
  const updatedTreatments = [...treatments];
  updatedTreatments[index] = value;
  setTreatments(updatedTreatments);

  const updatedFormData = { ...formData, treatments: updatedTreatments };
  setFormData(updatedFormData);
};
const handleMainDiseaseChange = (value) => {
  setFormData({ ...formData, mainDisease: value });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Les données du formulaire sont dans formData
    console.log(formData); // Vous pouvez envoyer ces données à votre backend ou effectuer d'autres actions ici
  };


  let formCarnet = (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {/* Champ pour la Maladie Principale */}
        <div className="form-group">
          <label htmlFor="mainDisease">Maladie Principale</label>
          <input
            required=""
            name="mainDisease"
            id="mainDisease"
            type="text"
            value={formData.mainDisease}
            onChange={(e) => handleMainDiseaseChange(e.target.value)}
          />
        </div>

        {/* Champs pour les traitements */}
        {treatments.map((treatment, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`treatment-${index}`}>Traitement {index + 1}</label>
            <input
              required=""
              name={`treatment-${index}`}
              id={`treatment-${index}`}
              type="text"
              value={treatment}
              onChange={(e) => handleTreatmentChange(index, e.target.value)}
            />
          </div>
        ))}

        {/* Bouton pour ajouter un nouveau traitement */}
        <button className="button-add" type="button" onClick={addTreatment}>
          Ajouter
        </button>

        {/* Champs pour les antécédents */}
        {antecedents.map((antecedent, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`antecedent-${index}`}>
              Antécédent {index + 1}
            </label>
            <input
              required=""
              name={`antecedent-${index}`}
              id={`antecedent-${index}`}
              type="text"
              value={antecedent}
              onChange={(e) => handleAntecedentChange(index, e.target.value)}
            />
          </div>
        ))}

        {/* Bouton pour ajouter un nouvel antécédent */}
        <button className="button-add" type="button" onClick={addAntecedent}>
          Ajouter
        </button>

        <button type="submit" className="form-submit-btn">
          Envoyer
        </button>
      </form>
    </div>
  );

let healthInformation = (
  <div className="card">
    <h1 id="title-MonCarnet">Mon Carnet</h1>
    <p className="part-card-form">Maladie principale</p>
    <p>{formData.mainDisease}</p>
    <p className="part-card-form">Mes traitements</p>
    <ul>
      {formData.treatments.map((treatment, index) => (
        <li key={index}>{treatment}</li>
      ))}
    </ul>
    <p className="part-card-form">Mes antécédents</p>
    <ul>
      {formData.antecedents.map((antecedent, index) => (
        <li key={index}>{antecedent}</li>
      ))}
    </ul>
  </div>
);

  return (
  <>
    <div className="mon-carnet-container">
      <MenuNavigation />
      <div className='flex-mon-carnet'>
      {formCarnet}
      {healthInformation}
      </div>
    </div>
    </>
  );
}


export default MonCarnet;
