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
  const [patients, setPatients] = useState([]);
  const [token, setToken] = useState(null);

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
      try {
        // Vérifier si le token existe avant de faire la requête
        if (token) {
          const response = await api.get("/user/usersconnect");
          const patientsAPI = response.data;
          setPatients(patientsAPI);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Assurez-vous que le tableau de dépendances est vide si vous voulez que cet effet ne s'exécute qu'une fois
    if (!patients.length) {
      fetchData();
    }
  }, [token, patients.length]);

  return { loading, patients, login };
};
