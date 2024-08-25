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
      console.log(response);
      setToken(token);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Define the URL
    const url = "http://localhost:8000/api/patients/";

    // Define headers
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Make the request
    fetch(url, {
      method: "GET", // or 'POST', 'PUT', etc.
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");

        }
        console.log(response.json())
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);


}
