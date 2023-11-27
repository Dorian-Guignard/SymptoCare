import "./Login.css";


function Login() {
  return (
   
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="form-submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
