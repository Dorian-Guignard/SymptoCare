import { useGetConstant } from "../../Utils/api.js";


export function DashboardData() {
const { loading, patients} = useGetConstant();
  
 console.log("Patients API:", patients);

  function decimal(value0) {
    return Math.trunc(value0);
  }

  // Assurez-vous que 'patients' est un objet avant d'essayer de l'utiliser
  if (!patients || typeof patients !== "object" || !patients.patients) {
    return <p>Données de l'API en chargement.</p>;
  }

  // Obtenez les détails du patient
  const patientDetails = patients.patients;

  // Triez le tableau constants par date dans l'ordre décroissant
  const sortedConstants = patientDetails.constants.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "diastole" parmi les constantes triées
  const diastoleConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "diastole"
  );

  // Vérifiez si la constante de type "diastole" a été trouvée
  if (!diastoleConstant) {
    return <p>Constante de type "diastole" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "diastole"
  const diastoleValue = decimal(diastoleConstant.value);
  const diastoleDate = new Date(diastoleConstant.date);
  const formattedDiastoleDate = diastoleDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "douleur" parmi les constantes triées
  const douleurConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "douleur"
  );

  // Vérifiez si la constante de type "douleur" a été trouvée
  if (!douleurConstant) {
    return <p>Constante de type "douleur" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "douleur"
  const douleurValue = decimal(douleurConstant.value);
  const douleurDate = new Date(douleurConstant.date);
  const formattedDouleurDate = douleurDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "temperature" parmi les constantes triées
  const temperatureConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "température"
  );

  // Vérifiez si la constante de type "temperature" a été trouvée
  if (!temperatureConstant) {
    return <p>Constante de type "temperature" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "temperature"
  const temperatureValue = temperatureConstant.value;
  const temperatureDate = new Date(temperatureConstant.date);
  const formattedTemperatureDate = temperatureDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "poids" parmi les constantes triées
  const poidsConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "poids"
  );

  // Vérifiez si la constante de type "poids" a été trouvée
  if (!poidsConstant) {
    return <p>Constante de type "poids" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "poids"
  const poidsValue = poidsConstant.value;
  const poidsDate = new Date(poidsConstant.date);
  const formattedPoidsDate = poidsDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "imc" parmi les constantes triées
  const imcConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "imc"
  );

  // Vérifiez si la constante de type "imc" a été trouvée
  if (!imcConstant) {
    return <p>Constante de type "imc" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "imc"
  const imcValue = imcConstant.value;
  const imcDate = new Date(imcConstant.date);
  const formattedImcDate = imcDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "systole" parmi les constantes triées
  const systoleConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "systole"
  );

  // Vérifiez si la constante de type "systole" a été trouvée
  if (!systoleConstant) {
    return <p>Constante de type "systole" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "systole"
  const systoleValue = decimal(systoleConstant.value);
  const systoleDate = new Date(systoleConstant.date);
  const formattedSystoleDate = systoleDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "taille" parmi les constantes triées
  const tailleConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "taille"
  );

  // Vérifiez si la constante de type "taille" a été trouvée
  if (!tailleConstant) {
    return <p>Constante de type "taille" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "taille"
  const tailleValue = tailleConstant.value;
  const tailleDate = new Date(tailleConstant.date);
  const formattedTailleDate = tailleDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "saturation" parmi les constantes triées
  const saturationConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "saturation"
  );

  // Vérifiez si la constante de type "saturation" a été trouvée
  if (!saturationConstant) {
    return <p>Constante de type "saturation" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "saturation"
  const saturationValue = decimal(saturationConstant.value);
  const saturationDate = new Date(saturationConstant.date);
  const formattedSaturationDate = saturationDate.toLocaleString("fr-FR");

  // Trouvez la constante de type "fc" parmi les constantes triées
  const fcConstant = sortedConstants.find(
    (constant) => constant.constantType.type === "fréquence cardiaque"
  );

  // Vérifiez si la constante de type "fc" a été trouvée
  if (!fcConstant) {
    return <p>Constante de type "fc" non trouvée.</p>;
  }

  // Obtenez la valeur de la constante de type "fc"
  const fcValue = decimal(fcConstant.value);
  const fcDate = new Date(fcConstant.date);
  const formattedFcDate = fcDate.toLocaleString("fr-FR");

  return {
    diastoleValue,
    formattedDiastoleDate,
    formattedDouleurDate,
    douleurValue,
    temperatureValue,
    formattedTemperatureDate,
    poidsValue,
    formattedPoidsDate,
    imcValue,
    formattedImcDate,
    systoleValue,
    formattedSystoleDate,
    formattedTailleDate,
    tailleValue,
    formattedSaturationDate,
    saturationValue,
    fcValue,
    formattedFcDate,
    loading
  };
}

