import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useGetConstant = () => {
  const [loading, setLoading] = useState(true);
  let [patients, setPatients] = useState();
  const [token, setToken] = useState(null);
  const [isInitialMount, setIsInitialMount] = useState(true);

  // Fonction pour effectuer l'authentification et récupérer le token
  const login = async (credentials) => {
    try {
      const response = await api.post("/login", credentials);
      const { token } = response.data;
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        // Vérifier si le token existe avant de faire la requête
        if (token) {
          const response = await api.get("patients/currentuserbypatient");
          let patientsAPI = response.data;
          
          setPatients(patientsAPI);
          console.log("Patients API:", patientsAPI);
          console.log("FetchData executed successfully");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        // Marquez l'état initial comme "false" après la première exécution
        setIsInitialMount(false);
      }
    };

    // Assurez-vous que fetchData ne s'exécute qu'après le rendu initial
    if (isInitialMount) {
      fetchData();
    }
  }, [token, isInitialMount]);

  return { loading, patients, login };
};
