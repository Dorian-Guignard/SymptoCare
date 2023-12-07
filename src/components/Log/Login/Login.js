import "./Login.css";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Utils/providers/UserContext";
import { useNavigate as useReactRouterNavigate } from "react-router-dom";

function Login() {
  const navigate = useReactRouterNavigate();
  const { setIsLoggedIn, updateUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    let response = await fetch("http://0.0.0.0:8000/api/login_check", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Email ou mot de passe incorrect");
    }

    let data = await response.json();
    updateUser(data.token);
    // Vous voudrez peut-être remplacer la ligne suivante par votre propre logique d'affichage du succès
    console.log("Connexion réussie !");
    setIsLoggedIn(true);
    navigate("/home");
  } catch (error) {
    console.error(error);
    setError(error.message);
    // Vous voudrez peut-être remplacer la ligne suivante par votre propre logique d'affichage de l'erreur
    console.error(error.message);
  }
};


  return (
    <>
      <div className="login-container">
        <div className="title-login">
          <h1 className="title-page-login">SymptoCare</h1>
        </div>
        <div className="form-container-login">
          <h2 className="title-form-login">Se connecter</h2>
          <form className="form-login" onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group-login">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Entrer votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group-login">
              <label htmlFor="password">Mot de passe:</label>
              <input
                name="password"
                type="password"
                id="password"
                required
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
