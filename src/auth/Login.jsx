import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectLoading, selectError } from "../redux/slices/authSlice";

import "./style.css";
import eye from "../assets/images/eye.png";
import closedEye from "../assets/images/closedEye.png";
import { Link } from "react-router-dom/dist";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <div className="loginForm">
        <label htmlFor="email" className="Label">
          Enter email
        </label>
        <br />
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="loginForm">
        <label htmlFor="password" className="Label">
          Enter password
        </label>
        <br />
        <div className="passwordInput">
          <input
            type={showPassword ? "email" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? closedEye : eye}
            alt="toggle password visibility"
            onClick={handleTogglePassword}
          />
        </div>
      </div>
      <button onClick={handleLogin} disabled={loading} className="loginButton">
        {loading ? "Logging in..." : "Login"}
      </button>
      <p className="signup">
        Don’t have an account?
        <Link to="/register" className="link">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
