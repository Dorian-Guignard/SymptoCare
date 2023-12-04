import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../../../Utils/providers/UserContext";
import { useNavigate as useReactRouterNavigate } from "react-router-dom";


function Login(){

  const navigate = useReactRouterNavigate();
  const { updateUser } = useContext(UserContext);
  const {  setIsLoggedIn } = useContext(UserContext);

  const handleLogin = async (values) => {
    try {
      const response = await fetch("http://0.0.0.0:8000/api/login_check", {
        method: "POST",
        body: JSON.stringify({
          username: values.email,
          password: values.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect");
      }
  
      const data = await response.json();
      updateUser(data.token);
      message.success("Connexion réussie !");
      setIsLoggedIn(true);
      navigate('/')
      
    } catch (error) {
      console.error(error);
      message.error(error.message);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <div className="form-group-login">
              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                id="email"
                required="true"
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
                required="true"
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
