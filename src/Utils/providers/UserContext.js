import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const verifiedUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser ? true : false;
  };

  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const updateUserToken = (token) => {
    // Mettez à jour l'état de connexion et les données utilisateur ici
    setIsLoggedIn(!!token);
    setUserData({ token }); // Vous pouvez inclure d'autres données utilisateur si nécessaire

    // Après avoir mis à jour le token, effectuez une requête pour obtenir les informations de l'utilisateur
    if (token) {
      axios
        .get("http://localhost:8000/api/user/usersconnect")
        .then((response) => {
          const userDataFromApi = response.data.user;
          setUserData((prevUserData) => ({
            ...prevUserData,
            ...userDataFromApi,
          }));
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données utilisateur :",
            error
          );
        });
    }
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        updateUserToken,
        isLoggedIn,
        setIsLoggedIn,
        logOut,
        verifiedUser,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
