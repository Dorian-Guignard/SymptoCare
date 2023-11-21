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
  const douleur = sortedConstants.find(
    (constant) => constant.constantType.type === "douleur"
  );


  // Obtenez la valeur de la constante de type "diastole"
  const douleurValue = douleur.value;
  const douleurDate = new Date(douleur.date);
  const formattedDouleurDate = douleurDate.toLocaleString("fr-FR");

  
  return { diastoleValue, formattedDiastoleDate,formattedDouleurDate,douleurValue };
}
