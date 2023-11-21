//DashboardData.js
import { useGetConstant } from "../../Utils/api.js";

export function DashboardData() {
  const { loading, patients } = useGetConstant();

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


  // Obtenez la valeur de la constante de type "diastole"
  const diastoleValue = diastoleConstant.value;
  const diastoleDate = new Date(diastoleConstant.date);
  const formattedDiastoleDate = diastoleDate.toLocaleString("fr-FR");
  
 // Triez le tableau douleur par date dans l'ordre décroissant
  const sortedDouleur = patientDetails.douleur.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "douleur" parmi les constantes triées
  const douleur = douleur.find(
    (douleur) => constant.douleur.type === "douleur"
  );


  // Obtenez la valeur de la constante de type "douleur"
  const douleurValue = douleur.value;
  const douleurDate = new Date(douleur.date);
  const formattedDouleurDate = douleurDate.toLocaleString("fr-FR");

   // Triez le tableau température par date dans l'ordre décroissant
  const sortedTemperature = patientDetails.temperature.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "temperature" parmi les constantes triées
  const temperature = temperature.find(
    (temperature) => constant.temperature.type === "temperature"
  );


  // Obtenez la valeur de la constante de type "temperature"
  const temperatureValue = temperature.value;
  const temperatureDate = new Date(temperature.date);
  const formattedTemperatureDate = temperatureDate.toLocaleString("fr-FR");

     // Triez le tableau poids par date dans l'ordre décroissant
  const sortedPoids = patientDetails.poids.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "poids" parmi les constantes triées
  const poids = poids.find(
    (poids) => constant.poids.type === "poids"
  );

  // Obtenez la valeur de la constante de type "imc"
  const imcValue = imc.value;
  const imcDate = new Date(imc.date);
  const formattedImcDate = imcDate.toLocaleString("fr-FR");

       // Triez le tableau imc par date dans l'ordre décroissant
  const sortedImc = imcDetails.imc.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "imc" parmi les constantes triées
  const imc = imc.find(
    (imc) => constant.imc.type === "imc"
  );


    // Triez le tableau systole par date dans l'ordre décroissant
  const sortedSystole = systoleDetails.systole.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "systole" parmi les constantes triées
  const systole = systole.find(
    (systole) => constant.systole.type === "systole"
  );

  // Obtenez la valeur de la constante de type "systole"
  const systoleValue = systole.value;
  const systoleDate = new Date(systole.date);
  const formattedSystoleDate = systoleDate.toLocaleString("fr-FR");

  // Triez le tableau taille par date dans l'ordre décroissant
  const sortedTaille = tailleDetails.taille.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "taille" parmi les constantes triées
  const taille = taille.find(
    (taille) => constant.taille.type === "taille"
  );

  // Obtenez la valeur de la constante de type "taille"
  const tailleValue = taille.value;
  const tailleDate = new Date(taille.date);
  const formattedTailleDate = tailleDate.toLocaleString("fr-FR");

    // Triez le tableau saturation par date dans l'ordre décroissant
  const sortedSaturation = saturationDetails.saturation.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "saturation" parmi les constantes triées
  const saturation = saturation.find(
    (saturation) => constant.saturation.type === "saturation"
  );

  // Obtenez la valeur de la constante de type "saturation"
  const saturationValue = saturation.value;
  const saturationDate = new Date(saturation.date);
  const formattedSaturationDate = saturationDate.toLocaleString("fr-FR");

  // Triez le tableau saturation par date dans l'ordre décroissant
  const sortedSaturation = saturationDetails.saturation.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "saturation" parmi les constantes triées
  const saturation = saturation.find(
    (saturation) => constant.saturation.type === "saturation"
  );

  // Obtenez la valeur de la constante de type "saturation"
  const saturationValue = saturation.value;
  const saturationDate = new Date(saturation.date);
  const formattedSaturationDate = saturationDate.toLocaleString("fr-FR");

    // Triez le tableau fc par date dans l'ordre décroissant
  const sortedFc = fcDetails.fc.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trouvez la constante de type "fc" parmi les constantes triées
  const fc = fc.find(
    (fc) => constant.fc.type === "fc"
  );

  // Obtenez la valeur de la constante de type "fc"
  const fcValue = fc.value;
  const fcDate = new Date(fc.date);
  const formattedFcDate = fcDate.toLocaleString("fr-FR");
  
  return { diastoleValue, formattedDiastoleDate, formattedDouleurDate, douleurValue, temperatureValue, formattedTemperatureDate, poidsValue, formattedPoidsDate, imcValue, formattedImcDate,
         systoleValue, formattedSystoleDate, formattedTailleDate, tailleValue, formattedSaturationDate, saturationValue, fcValue, formattedFcDate
         };
}
