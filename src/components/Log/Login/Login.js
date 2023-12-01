import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/patients/login", // Assurez-vous que l'URL est correcte
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        navigate("/");
        // Stocker le token ou gérer la session côté client
      } else {
        // Gérer les erreurs d'authentification
      }
    } catch (error) {
      // Gérer les erreurs de requête
      console.error("Erreur lors de la requête:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <>
      <div className="login-container">
        <div className="title-login">
          <h1 className="title-page-login">SymptoCare</h1>
        </div>
        <div className="form-container-login">
          <h2 className="title-form-login">Se connecter</h2>
          <form className="form-login" onSubmit={handleSubmit}>
            <div className="form-group-login">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group-login">
              <label htmlFor="password">Mot de passe:</label>
              <input
                type="password"
                id="password"
                placeholder="Entrer votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="form-submit-btn-login">
              Valider
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
