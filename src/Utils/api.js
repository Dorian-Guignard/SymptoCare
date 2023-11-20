import axios from "axios";
import { useEffect, useState } from "react";

export const useGetConstant = () => {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/patients/1/"
        );
        const patientsAPI = response.data;
        setPatients(patientsAPI);
        
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
  }, []);

  return { loading, patients };
};


